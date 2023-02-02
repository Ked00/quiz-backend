import express, {Request, Response} from "express";
import user from "../models/user";
const router = express.Router();

router.get("/info", (req: Request, res: Response) => {
  res.send(req.session.userInfo);
});

router.patch("/update", async (req, res) => {
  const {newname, username, newpassword} = req.body;

  if (!newname && !newpassword) {
    res.send({
      message: "Please provide a username or password",
      variant: "danger",
    });
  } else {
    const newUser = await user
      .findOne({username})
      .update({username: newname, password: newpassword});
    res.send({message: "user updated successfully", variant: "success"});
    console
  }
  
});

module.exports = router;
