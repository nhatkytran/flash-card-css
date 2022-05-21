import { useState } from "react";

function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`card ${flip ? "flip" : "unflip"}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        <div>{flashcard.question}</div>
        <ul>
          {flashcard.options.map((opt, index) => {
            return <li key={index}>{opt}</li>;
          })}
        </ul>
      </div>
      <div className="back">{flashcard.answer}</div>
    </div>
  );
}

export default Flashcard;
