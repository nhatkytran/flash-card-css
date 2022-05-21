import Flashcard from "./Flashcard";

function FlashcardList({ flashcards }) {
  return (
    <div className="cards">
      {flashcards.map((flashcard) => (
        <Flashcard key={flashcard.id} flashcard={flashcard} />
      ))}
    </div>
  );
}

export default FlashcardList;
