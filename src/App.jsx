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
    let isCorrect = checkInput(guess, initialFishes[fishIndex].name);
    let currentFish = initialFishes[fishIndex].name;
    let isLastFish = fishIndex === 3 ? true : false;
    let index = answersLeft.findIndex((fish) => fish === currentFish);
    let answersLeftCopy = answersLeft;
    answersLeftCopy.splice(index, 1);
    isCorrect
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);
    isLastFish ? setIsGameOver(true) : setFishIndex(fishIndex + 1);
    setAnswersLeft(answersLeftCopy);
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
