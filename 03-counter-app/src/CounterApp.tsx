import { useState } from "react";

interface Props {
  value: number;
}

export const CounterApp = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (num: number) => {
    setCounter(counter + num);
  };

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={() => handleAdd(-1)}>-1</button>
      <button onClick={() => handleAdd(1)}>+1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
