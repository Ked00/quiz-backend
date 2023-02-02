import {questionStructure} from "./types/questionStructure";

export let stank: questionStructure[] = [
  {
    question: "How do you define a custom type in TypeScript?",
    type: "multiple",
    answers: [
      {text: "type keyword", correct: true},
      {text: "interface", correct: true},
      {text: "declaring a class", correct: true},
      {text: "declaring a enum", correct: true},
    ],
  },
  {
    question: "How does TypeScript handle type inference?",
    type: "single",
    answers: [
      {
        text: "inference is based on the value passed to a variable",
        correct: true,
      },
      {text: "inference is based on type annotation", correct: false},
      {text: "inference is based on strict", correct: false},
      {text: "inference is based on static types", correct: false},
    ],
  },
  {
    question:
      "what is the difference between const and let type in typescript?",
    type: "single",
    answers: [
      {
        text: "Both are signals that a variable will not be reassigned",
        correct: false,
      },
      {
        text: "let will not be reassigned, const will be reassigned",
        correct: false,
      },
      {
        text: "Const will not be reassigned, let will be reassigned",
        correct: true,
      },
      {
        text: "Both are signals that a variable will be reassigned",
        correct: false,
      },
    ],
  },
  {
    question:
      "Why should you not use the types Objects, String, Numbers in typescript?",
    type: "single",
    answers: [
      {text: "They are typscript non-primitive types", correct: false},
      {text: "You can use them", correct: false},
      {text: "They cause bugs that can be hard to track down", correct: false},
      {text: "They are javascript non-primitive types", correct: true},
    ],
  },
  {
    question: "What is the difference between a type and a interface?",
    type: "single",
    answers: [
      {text: "There is no difference between them", correct: false},
      {text: "interfaces can be reopened and types can not", correct: true},
      {text: "types can be reopened and interfaces can not", correct: false},
      {text: "They are the same thing with different names", correct: false},
    ],
  },
];
