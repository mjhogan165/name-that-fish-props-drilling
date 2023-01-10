import "./styles/game-board.css";

export const GameBoard = ({
  handleSubmit,
  handleInput,
  fishIndex,
  initialFishes,
  guess,
}) => {
  const nextFishToName = initialFishes[fishIndex];

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
