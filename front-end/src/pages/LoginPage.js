import { useState } from "react";
import { useHistory } from "react-router-dom";

export const LogInPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const history = useHistory();

  const onLogInClicked = async () => {
    alert("Log In clicked!");
  };

  return (
    <div className="content-container">
      <h1>Log In</h1>
      {errorMessage && <p className="fail">{errorMessage}</p>}
      <input
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder="someone@gmail.com"
      />
      <input
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        placeholder="password"
        type="password"
      />
      <hr />
      <button disabled={!emailValue || !passwordValue} onClick={onLogInClicked}>
        Log In
      </button>
      <button onClick={() => history.push("/forgot-password")}>
        Forgot your password?
      </button>
      <button onClick={() => history.push("/signup")}>
        Don't have an account? Sign Up
      </button>
    </div>
  );
};
