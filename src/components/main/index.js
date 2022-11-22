import React from "react";
import { FaBookmark } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Loader from "../loader/loader";
import SecondLoader from "../secondLoader/index";
// import Setter from "../setter/index";

const Index = (props) => {
  console.log(props);
  const [showLoader, setShowLoader] = React.useState(false);
  const [showSecondLoader, setShowSecondLoader] = React.useState(false);
  const [showResultDiv, setShowResultDiv] = React.useState(false);
  const [showFinalResult, setShowFinalResult] = React.useState(false);
  const [showSetter, setShowSetter] = React.useState(false);
  const [winnerCode, setWinnerCode] = React.useState("");
  const handleChange = (event) => setWinnerCode(event.target.value);

  const handleClickSetter = () => {
    window.alert("Done!", winnerCode);
  };
  const handleToggleSetter = () => {
    setShowSetter(!showSetter);
  };
  const handleClick = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setShowResultDiv(true);
      setShowSecondLoader(true);
      setTimeout(() => {
        setShowSecondLoader(false);
        setShowFinalResult(true);
      }, 2000);
    }, 3000);
  };
  return (
    <div className="w-screen h-screen ">
      {/* Navbar div  */}
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
            <ul className="flex items-center justify-start h-full">
              <li className="pr-10 pl-7">Home</li>
              <li className="pr-10">Randomness</li>
              <li className="pr-10">Random Picker</li>
            </ul>
          </div>

          <div className="w-2/3">
            <ul className="flex items-center justify-end h-full">
              <li className=" py-[8px] px-[16px]">
                <FaBookmark />
              </li>
              <li className=" py-[8px] px-[16px]">
                <MdOutlineDarkMode />
              </li>
              <li className=" py-[8px] px-[16px]">
                <FaGlobeAmericas />
              </li>
              <li className=" py-[8px] px-[16px]">
                <FaSearch />
              </li>
              <li className="py-[8px] px-[16px] tracking-[4px] bg-[#008073]">
                Access Premium Version
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar Section */}
        <div className="">
          <div className="h-full w-[260px] fixed">
            {/* heading  */}
            <div className=" w-full px-[16px] py-[0.01em] mt-5 mb-2">
              <h3 className="uppercase my-[10px] text-black">ALL tools</h3>
            </div>
            {/* links */}
            <div className="w-full h-full links">
              <div className="w-full text-[#444] p-[18px] cursor-pointer text-left bg-[#eee] flex hover:bg-[#D6D6D6] justify-between">
                <div>PWA (Progressive Web App) Tools (18)</div>
                <div className="flex items-end text-[#777] font-bold ml-[5px]">
                  +
                </div>
              </div>

              <div className="w-full text-[#444] p-[18px] cursor-pointer text-left bg-[#eee] flex hover:bg-[#D6D6D6] justify-between">
                <div>Financial Calculators(121)</div>
                <div className="flex items-end text-[#777] font-bold ml-[5px]">
                  +
                </div>
              </div>

              <div className="w-full text-[#444] p-[18px] cursor-pointer text-left bg-[#eee] flex hover:bg-[#D6D6D6] justify-between">
                <div>Health and Fitness (31)</div>
                <div className="flex items-end text-[#777] font-bold ml-[5px]">
                  +
                </div>
              </div>

              <div className="w-full text-[#444] p-[18px] cursor-pointer text-left bg-[#eee] flex hover:bg-[#D6D6D6] justify-between">
                <div>Math (161)</div>
                <div className="flex items-end text-[#777] font-bold ml-[5px]">
                  +
                </div>
              </div>

              <div className="w-full text-[#444] p-[18px] cursor-pointer text-left bg-[#eee] flex hover:bg-[#D6D6D6] justify-between">
                <div>Randomness (17)</div>
                <div className="flex items-end text-[#777] font-bold ml-[5px]">
                  +
                </div>
              </div>

              <div className="w-full text-[#444] p-[18px] cursor-pointer text-left bg-[#eee] flex hover:bg-[#D6D6D6] justify-between">
                <div>Sports (8)</div>
                <div className="flex items-end text-[#777] font-bold ml-[5px]">
                  +
                </div>
              </div>

              <div className="w-full text-[#444] p-[18px] cursor-pointer text-left bg-[#eee] flex hover:bg-[#D6D6D6] justify-between">
                <div>Text Tools (30)</div>
                <div className="flex items-end text-[#777] font-bold ml-[5px]">
                  +
                </div>
              </div>

              <div className="w-full text-[#444] p-[18px] cursor-pointer text-left bg-[#eee] flex hover:bg-[#D6D6D6] justify-between">
                <div>Time and Date (27)</div>
                <div className="flex items-end text-[#777] font-bold ml-[5px]">
                  +
                </div>
              </div>

              <div className="w-full text-[#444] p-[18px] cursor-pointer text-left bg-[#eee] flex hover:bg-[#D6D6D6] justify-between">
                <div>Webmaster Tools (10)</div>
                <div className="flex items-end text-[#777] font-bold ml-[5px]">
                  +
                </div>
              </div>

              <div className="w-full text-[#444] p-[18px] cursor-pointer text-left bg-[#eee] flex justify-between">
                <div>Hash and Checksum (8)</div>
                <div className="flex items-end text-[#777] font-bold ml-[5px]">
                  +
                </div>
              </div>

              <div className="w-full text-[#444] p-[18px] cursor-pointer text-left bg-[#eee] flex justify-between">
                <div>Miscellaneous (109)</div>
                <div className="flex items-end text-[#777] font-bold ml-[5px]">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main body  */}

        {showLoader && <Loader />}
        <div className="w-full  ml-[260px] h-full flex py-[12px] px-[24px] text-black ">
          {/* outer div  */}
          <div className=" h-full w-[77%] py-[12px] px-[24px] bg-[#F1F1F1] shadow ">
            <div className="w-full h-full ">
              <div className="">
                <div className="flex gap-3 pt-6 ">
                  <h1>Random Picker</h1>
                  <h2>icon</h2>
                </div>
              </div>
            </div>
            {/* div with textarea  */}
            <div className="p-6 pb-12 shadow">
              <div className="w-full h-full mt-2 mb-6 ">
                <span className="text-[#000000] font-bold">
                  Enter all items (names, numbers...) in the field below, each
                  on a separate line:
                </span>
              </div>

              <div className="">
                <textarea
                  className="w-full mx-0 border-solid border border-[#ccc] "
                  cols="40"
                  input="type"
                  id="id_text"
                  name="text"
                  rows="10"
                ></textarea>
              </div>

              <div className="p-[15px] mt-3">
                <p>
                  Import all items from a text file: <input type="file" />
                </p>
              </div>

              <div
                onClick={handleClick}
                className="w-full mt-[8px]  bg-[#3A8338] cursor-pointer p-[15px] rounded-[4px] text-white flex justify-center"
              >
                <button>Pick a Random Item</button>
              </div>
            </div>

            {/* Results div  */}
            {showResultDiv && (
              <div className="absolute z-40 w-[62.5%] h-64 mt-12 bg-[#F1F1F1] flex items-center justify-center  ">
                {showSecondLoader && <SecondLoader />}
                {showFinalResult && (
                  <div>
                    <h4 className="t2">The Winner is:</h4>
                    <div className="glow">
                      <h1>{winnerCode}</h1>
                    </div>
                  </div>
                )}
              </div>
            )}
            {/* ad image  */}
            <div
              className={`relative flex justify-center pt-5 pb-3 ${
                showResultDiv ? "mt-80" : "mt-0"
              }`}
            >
              <img src="adbanner1.png" alt="ad1" />
            </div>

            {/* extra dummy content  */}
            <div className="shadow2 px-[20px] pt-[15px] pb-[5px]  w-full">
              <h2 className="mb-5"> About Random Picker</h2>
              <p>
                This tool allows you to quickly pick a random name, number or
                other item from a list of items.
              </p>
              <h2>FAQ</h2>
              <div className="dummyboxes hover:bg-[#D6D6D6] flex justify-between">
                <h4>Is the picker really random? How do you make sure?</h4>
                <div>+</div>
              </div>{" "}
              <div className="panel">
                <h4>
                  Yes, the results are quite random. When you click Pick a
                  Random item button, the tool will submit all text line by line
                  to our server. Then it will use python random module to
                  generate one pseudo-random number between 0 to total items.
                  Then it will choose the item with this random number as a
                  winner.
                </h4>
              </div>
              <div className="dummyboxes hover:bg-[#D6D6D6] flex justify-between">
                <h4>Does it support email,phone numbers or image?</h4>
                <div>+</div>
              </div>{" "}
              <div className="panel">
                <h4>
                  it supports email, phone numbers and any item in text. At this
                  moment it does not "really" support random image picker. You
                  can input the image file name to the form and pick a winner,
                  but it can not display the image on the result.
                </h4>
              </div>
              <div className="dummyboxes hover:bg-[#D6D6D6] flex justify-between">
                <h4>
                  When i re-used Random Picker,I found it displayed the items I
                  submitted last time. why?
                </h4>
                <div>+</div>
              </div>{" "}
              <div className="panel">
                <h4>
                  Some users want to use the picker many times with the same
                  list. So we use HTML5 Web Storage technique to make their life
                  easier. With web storage, web applications can store data
                  locally within the user's browser. If you use a public
                  computer and do not want your names stored, you can use
                  private or incognito window from your browser or submit
                  another some Meaningless text. (We only use web storage to
                  store the last submitted information.)
                </h4>
              </div>
              <div className="dummyboxes hover:bg-[#D6D6D6] flex justify-between">
                <h4>Does your server store the information what i submit?</h4>
                <div>+</div>
              </div>{" "}
              <div className="panel">
                <h4>
                  No. We never store any data visitors submit. We recognize that
                  privacy of your personal information is important. More
                  information can be found in our privacy policy
                </h4>
              </div>
              <div className="dummyboxes hover:bg-[#D6D6D6] flex justify-between">
                <h4>Is there a mobile app?</h4>
                <div>+</div>
              </div>{" "}
              <div className="panel">
                <h4>
                  This Random Picker tool is designed as a PWA (Progressive Web
                  App). You can install it on your home screen if your device
                  and browser support PWA.
                </h4>
              </div>
              <div
                className="dummyboxes hover:bg-[#D6D6D6] flex justify-between"
                onClick={handleToggleSetter}
              >
                <h4>Terms and Conditions?</h4>
                <div>+</div>
              </div>{" "}
              {/* --------------------------------- setter component here ----------------------- */}
              {showSetter && (
                <div>
                  <div>
                    <div className="flex items-center justify-center w-64 h-64 m-auto bg-gray-400 ">
                      <div className="flex flex-col items-center">
                        <input
                          onChange={handleChange}
                          className="w-56 h-12 p-2 text-black border"
                          placeholder="Enter value to set"
                        />
                        <button
                          onClick={handleClickSetter}
                          className="px-6 py-2 mt-5 bg-green-600 rounded-md w-28"
                        >
                          submit{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Right  */}
          <div className="h-screen w-[22%] px-5 flex flex-col">
            {/* right top box  */}
            <div className="px-2">
              <div className=" py-[0.15px] px-[16px]  bg-[#3A8338] ">
                <p className="text-white mt-[15px] ml-0 mb-[16.5px]">
                  Miniwebtool
                </p>
              </div>
              <div className="flex justify-between dummyboxes1">
                <button>Link To This Tool</button>
                <div>+</div>
              </div>
              <div className="dummyboxes1 ">
                <button>Embed The Widget</button>
              </div>
              <div className="dummyboxes1">
                <a href="#">Recommend This Too</a>
              </div>
              <div className="dummyboxes1">
                <a href="#">Upgrade To Premium</a>
              </div>
              <div className="flex justify-between dummyboxes1">
                <button>My Tool Box</button>
                <div>+</div>
              </div>
            </div>
            {/* left top ad box  */}
            <div className="mt-3 ml-2">
              <img src="addbanner2.png" alt="ad" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
