import React, { useState, useCallback, useContext } from "react";
import { TableContext } from "./Mine";
import { START_GAME } from "./Mine";

const Form = () => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(20);
  const { dispatch } = useContext(TableContext);

  const handleOnRow = useCallback((e) => {
    setRow(parseInt(e.target.value));
  });

  const handleOnCell = useCallback((e) => {
    setCell(parseInt(e.target.value));
  });

  const handleOnMine = useCallback((e) => {
    setMine(parseInt(e.target.value));
  });

  const startGame = useCallback(() => {
    dispatch({
      type: START_GAME,
      row,
      cell,
      mine,
    });
  }, [row, cell, mine]);

  return (
    <>
      <input type="number" value={row} onChange={handleOnRow} />
      <input type="number" value={cell} onChange={handleOnCell} />
      <input type="number" value={mine} onChange={handleOnMine} />
      <button onClick={startGame}>시작</button>
    </>
  );
};

export default Form;
