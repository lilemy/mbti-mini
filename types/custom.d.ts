interface QuestionOption {
  result: string;
  value: string;
  key: string;
}

interface Question {
  title: string;
  options: QuestionOption[];
}
