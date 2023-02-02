export type questionStructure = {
  question: string;
  type: string;
  answers: {text: string; correct: boolean}[];
};
