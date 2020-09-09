import React, { useState, useCallback } from "react";

const Form = () => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(20);

  const handleOnRow = useCallback((e) => {
    setRow(e.target.value);
  });

  const handleOnCell = useCallback((e) => {
    setCell(e.target.value);
  });

  const handleOnMine = useCallback((e) => {
    setMine(e.target.value);
  });

  return (
    <>
      <input type="number" value={row} onChange={handleOnRow} />
      <input type="number" value={cell} onChange={handleOnCell} />
      <input type="number" value={mine} onChange={handleOnMine} />
    </>
  );
};

export default Form;
