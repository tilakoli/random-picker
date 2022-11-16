import React from "react";

const index = () => {
  return (
    <div>
      <div className=" bg-gray-400 h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col items-center">
          <input
            className="h-12 w-56 p-2 border"
            placeholder="Enter value to set"
          />
          <button className=" w-28 bg-green-600 mt-5 px-6 py-2 rounded-md">
            submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
