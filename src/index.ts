import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import mongo from "connect-mongo";
import * as dotenv from "dotenv";

const app = express();
dotenv.config();

declare module "express-session" {
  interface SessionData {
    isLoggedIn: boolean;
    userInfo: {
      username: string;
      password: string;
    };
  }
}

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(
  session({
    secret: process.env.Secret || "nothing",
    resave: false,
    saveUninitialized: false,
    store: mongo.create({
      mongoUrl: process.env.DBConnection,
      dbName: "session",
    }),
  })
);

// routers
app.use("/test", require("./routes/typeTest"));
app.use("/authentication", require("./routes/authentication"));
app.use("/account", require("./routes/account"));

mongoose.connect(process.env.DBConnection || "3500", () => {
  console.log("DB CONNECTED!");
});

app.listen(3500, () => {
  console.log("server started");
});
