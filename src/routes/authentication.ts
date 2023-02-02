import express, {Request, Response} from "express";
import user from "../models/user";
const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  const registerUser = new user({
    username: req.body.username,
    password: req.body.password,
  });

  try {
    const matching = await user.findOne({username: registerUser.username});

    if (matching) {
      res.send({message: "Username not available", variant: "danger"});
    } else {
      await registerUser.save();
      res.send({message: "User Created Successfully", variant: "success"});
    }
  } catch (err) {
    res.send({
      message: "Something went wrong please try again.",
      variant: "danger",
    });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  const {username, password} = req.body;
  const findUser = await user.findOne({
    username: username,
    password: password,
  });

  try {
    if (!findUser) {
      res.send({message: "Wrong Email or Password.", variant: "danger"});
    } else {
      req.session.isLoggedIn = true;
      req.session.userInfo = {username: username, password: password};
      res.send({message: "Successful login.", variant: "success"});
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/verify", (req, res) => {
  const currentSession = req.session.isLoggedIn;
  
  if (!currentSession) {
    res.send("not authorized");
  } else {
    res.send(true);
  }
});

module.exports = router;
