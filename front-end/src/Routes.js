import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from "./auth/PrivateRoute";
import { LogInPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignupPage";
import { UserInfoPage } from './pages/UserInfoPage';

export const Routes = () => {
    return (
      <Router>
        <Switch>
          <PrivateRoute path="/" exact>
            <UserInfoPage />
          </PrivateRoute>
          <Route path="/login" exact>
            <LogInPage />
          </Route>
          <Route path="/signup" exact>
            <SignUpPage />
          </Route>
        </Switch>
      </Router>
    );
}