import "./styles/game-board.css";

export const GameBoard = ({
  handleSubmit,
  handleInput,
  guess,
  answersLeft
}) => {
  const nextFishToName = answersLeft[0];
   if(answersLeft.length < 1){
    return null
   }
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e) => {}}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          onChange={handleInput}
          value={guess}
          name="fish-guess"
        />
        <input onClick={handleSubmit} type="submit" />
      </form>
    </div>
  );
};
