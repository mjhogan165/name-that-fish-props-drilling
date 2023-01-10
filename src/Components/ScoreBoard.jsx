import "./styles/score-board.css";
//  Where the score is presented

const answersLeft = ["trout", "salmon", "shark", "tuna"];

export const ScoreBoard = ({incorrectCount, correctCount, answersLeft}) => {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
