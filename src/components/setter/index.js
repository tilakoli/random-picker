import React, { useState } from "react";

const Index = (props) => {
  const [winnerCode, setWinnerCode] = useState("");
  const handleChange = (event) => setWinnerCode(event.target.value);

  const handleClick = () => {
    window.alert("Done!", winnerCode);
  };
  return (
    <div>
      <div className="flex items-center justify-center w-64 h-64 m-auto bg-gray-400 ">
        <div className="flex flex-col items-center">
          <input
            onChange={handleChange}
            className="w-56 h-12 p-2 text-black border"
            placeholder="Enter value to set"
          />
          <button
            onClick={handleClick}
            className="px-6 py-2 mt-5 bg-green-600 rounded-md w-28"
          >
            submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
