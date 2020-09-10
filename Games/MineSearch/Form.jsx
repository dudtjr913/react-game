import React, { useState, useCallback, useContext, useMemo } from "react";
import { TableContext } from "./Mine";
import { START_GAME } from "./Mine";

const Form = React.memo(() => {
  const [row, setRow] = useState("");
  const [cell, setCell] = useState("");
  const [mine, setMine] = useState("");
  const { dispatch } = useContext(TableContext);

  const handleOnRow = useCallback((e) => {
    setRow(parseInt(e.target.value));
  }, []);

  const handleOnCell = useCallback((e) => {
    setCell(parseInt(e.target.value));
  }, []);

  const handleOnMine = useCallback((e) => {
    setMine(parseInt(e.target.value));
  }, []);

  const startGame = useCallback(() => {
    dispatch({
      type: START_GAME,
      row,
      cell,
      mine,
    });
  }, [row, cell, mine]);

  return useMemo(
    () => (
      <>
        <input
          type="number"
          placeholder="가로줄수"
          value={row}
          onChange={handleOnRow}
        />
        <input
          type="number"
          placeholder="세로줄수"
          value={cell}
          onChange={handleOnCell}
        />
        <input
          type="number"
          placeholder="지뢰수"
          value={mine}
          onChange={handleOnMine}
        />
        <button onClick={startGame}>시작</button>
      </>
    ),
    [row, cell, mine]
  );
});

export default Form;
