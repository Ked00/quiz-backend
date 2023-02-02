import express, {Request, Response} from "express";
import {questionStructure} from "../types/questionStructure";
import {stank} from "../questions";
const router = express.Router();

router.get("/q1", (req: Request, res: Response) => {
  res.send(stank[0]);
});

router.get("/q2", (req: Request, res: Response) => {
  res.send(stank[1]);
});

router.get("/q3", (req: Request, res: Response) => {
  res.send(stank[2]);
});

router.get("/q4", (req: Request, res: Response) => {
  res.send(stank[3]);
});

router.get("/q5", (req: Request, res: Response) => {
  res.send(stank[4]);
});

// searches for the answer you provided and sends wheter its correct or not
router.post("/checkAnswer", (req: Request, res: Response) => {
  const findAnswer = req.body.answer;
  let counter = 0;

  for (let x = 0; x < stank.length; ) {
    let currentIndex = stank[x].answers[counter].text;

    if (currentIndex == findAnswer) {
      // when the answer is found send back a boolean
      res.send(stank[x].answers[counter].correct);
      return;
    } else {
      // if the answer wasnt found check if the counter is on the last index
      // if it is restart the counter
      if (counter == stank[x].answers.length - 1) {
        // -1 makes sure the counter starts at 0 when its being reset
        // setting counter to 0 starts it at 1 when being reset
        counter = -1;
        x++;
      }
      counter++;
    }
  }
});

module.exports = router;
