import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import { Images } from "./assets/images";
import { useState } from "react";
import "./Components/styles/final-score.css";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

function App() {
  const [guess, setGuess] = useState("");
  const [fishIndex, setFishIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(initialFishes);

  const handleInput = (e) => {
    setGuess(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let correctFish = initialFishes[fishIndex].name;
    let isCorrect = guess.toLowerCase() === correctFish.toLowerCase()

    setAnswersLeft(answersLeft.filter((x) => x.name !== correctFish));
    
    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    setFishIndex(fishIndex + 1);
    setGuess("");
  };

  return (
    <div className="App">
      <header>
        <ScoreBoard
          incorrectCount={incorrectCount}
          correctCount={correctCount}
          answersLeft={answersLeft}
        />
        {correctCount + incorrectCount > 3 && (
          <FinalScore
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            totalCount={initialFishes.length}
          />
        )}
        <GameBoard
          guess={guess}
          initialFishes={initialFishes}
          fishIndex={fishIndex}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
      </header>
    </div>
  );
}

export default App;
