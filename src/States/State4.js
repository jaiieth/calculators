import { useState } from "react";

const State4 = () => {
  const [number, setNumber] = useState(0);
  const calculate = () => setNumber(+number + 7);
  return (
    <div className="flex flex-row items-center bg-gray-300 w-fit px-4 my-4 m-2 rounded-lg">
      <input
        type="number"
        placeholder="Enter Number"
        onChange={(e) => setNumber(e.target.value)}
        className="bg-gray-200 rounded-lg px-2 w-[140px]"
      ></input>
      <button onClick={calculate} className="bg-gray-400 rounded-lg p-2 m-2 ">
        Calculate
      </button>
      <p>{number}</p>
    </div>
  );
};

export default State4;
