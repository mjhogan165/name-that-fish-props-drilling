import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import { Images } from "./assets/images";
import { useState } from "react";
import "./Components/styles/final-score.css";

function App() {
  const [guess, setGuess] = useState("");
  const [fishIndex, setFishIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState([
    "trout",
    "salmon",
    "shark",
    "tuna",
  ]);
  const [isGameOver, setIsGameOver] = useState(false);

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

  const handleInput = (e) => {
    setGuess(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fishIndex === 3) {
      console.log("is 3");
      setFishIndex(3);
      setIsGameOver(true);
      if (checkInput(guess, initialFishes[fishIndex].name)) {
        setCorrectCount(correctCount + 1);
      } else setIncorrectCount(incorrectCount + 1);
    } else {
      if (checkInput(guess, initialFishes[fishIndex].name)) {
        setCorrectCount(correctCount + 1);
        setAnswersLeft(() => {
          return answersLeft.filter((fish) => fish !== guess);
        });
      } else {
        setIncorrectCount(incorrectCount + 1);
      }
      setFishIndex(fishIndex + 1);
    }
    setGuess("");
  };
  const checkInput = (input, value) => {
    return input.toLowerCase() === value.toLowerCase() ? true : false;
  };
  return (
    <div className="App">
      <header>
        <ScoreBoard
          incorrectCount={incorrectCount}
          correctCount={correctCount}
          answersLeft={answersLeft}
        />
        {isGameOver && (
          <FinalScore
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            totalCount={initialFishes.length}
          />
        )}
        {!isGameOver && (
          <GameBoard
            guess={guess}
            initialFishes={initialFishes}
            fishIndex={fishIndex}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        )}
      </header>
    </div>
  );
}

export default App;
