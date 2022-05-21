import { useState } from "react";
import "./style.css";
import FlashcardList from "./components/FlashcardList";

const data = [
  {
    id: 1,
    question: "Question 1",
    answer: 1,
    options: [1, 2, 3, 4],
  },
  {
    id: 2,
    question: "Question 2",
    answer: 2,
    options: [1, 2, 3, 4],
  },
  {
    id: 3,
    question: "Question 3",
    answer: 3,
    options: [1, 2, 3, 4],
  },
];

function App() {
  const [flashcards, setFlashcards] = useState(data);

  return (
    <div className="container">
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default App;
