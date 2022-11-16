import "./App.css";
// import logo from "./logo.png";

function App() {
  return (
    <div className="h-screen w-screen bg-gray-600">
      {/* topbar div  */}
      <div className="w-full bg-[#616161]">
        <div className="flex justify-between py-[8px] px-[16px] items-center">
          <div>
            <img src="logo.png" className="" alt="logo" />
          </div>
          <div className="pr-8 pt-4 text-white tracking-[4px]">
            EVEN THE mini TOOLS CAN EMPOWER PEOPLE TO DO GREAT THINGS.
          </div>
        </div>

        <div className="flex w-full justify-between pr-8 bg-black py-[8px] px-[16px]">
          <div className="w-1/3">
            <ul className="flex justify-start items-center h-full">
              <li className="pr-10 pl-7">Home</li>
              <li className="pr-10">Randomness</li>
              <li className="pr-10">Random Picker</li>
            </ul>
          </div>

          <div className="w-2/3">
            <ul className="flex justify-end items-center h-full">
              <li className=" py-[8px] px-[16px]">icon1</li>
              <li className=" py-[8px] px-[16px]">icon2</li>
              <li className=" py-[8px] px-[16px]">icon3</li>
              <li className=" py-[8px] px-[16px]">icon4</li>
              <li className="py-[8px] px-[16px] tracking-[4px] bg-[#008073]">
                Access Premium Version
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
