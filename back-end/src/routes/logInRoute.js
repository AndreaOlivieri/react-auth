import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getDbConnection } from "../db";

export const logInRoute = {
  path: "/api/login",
  method: "post",
  handler: async (req, res) => {
    const { email, password } = req.body;

    const db = getDbConnection("react-auth-db");
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      res.sendStatus(401);
    }

    const { _id: id, passwordHash, info, isVerified } = user;

    const isCorrect = await bcrypt.compare(password, passwordHash);

    if (isCorrect) {
      jwt.sign(
        {
          id,
          email,
          info,
          isVerified,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "2d",
        },
        (err, token) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
          } else {
            res.status(200).send({ token });
          }
        }
      );
    } else {
      res.sendStatus(401);
    }
  },
};
