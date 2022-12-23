import { useState } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
const API_URL = "https://api.genderize.io?name";
const Home = () => {
  const [searchName, setSearchName] = useState("");
  const [name, setName] = useState({});

  const fetchName = async (title) => {
    const response = await axios.get(`${API_URL}=${title}`);
    const data = await response.data;
    setName(data);
  };

  return (
    <section className="max-w-full max-h-full">
      <div className="flex flex-col items-center justify-center  h-full space-y-5 my-16 ">
        <div className="mb-5">
          <h1 className="font-poppins   text-2xl md:text-4xl text-black dark:text-white font-extrabold indent-16">
            Predict the gender of
            <br /> a person based on your name.
          </h1>
        </div>
        <div className="  ">
          <form
            className="flex w-[350px] md:w-[550px]  bg-teal-50 dark:bg-teal-600 rounded-xl"
            onSubmit={(e) => {
              e.preventDefault();
              try {
                fetchName(searchName);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <input
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className=" bg-teal-50 dark:bg-teal-600 dark:text-gray-300 rounded-lg font-poppins px-3 py-2 w-5/6"
              placeholder="Enter your name"
            />
            <button className="  flex items-center justify-center md:pl-5 w-1/6">
              <span className="text-gray-300">
                <AiOutlineSearch size={25} />
              </span>
            </button>
          </form>
        </div>
        <div>
          {name?.count ? (
            <div className="w-[350px] md:w-[550px] bg-orange-100 dark:bg-yellow-900 px-5 py-3 rounded-lg space-y-2">
              <h2 className="font-poppins text-sm dark:text-gray-200 uppercase font-bold">
                your name here
              </h2>
              <p className="font-poppins text-sm capitalize dark:text-gray-200 font-bold">
                gender:
                <span className="font-poppins text-sm uppercase font-bold  text-gray-300 dark:text-gray-700 pl-3">
                  {name.gender}
                </span>
              </p>
              <p className="font-poppins text-sm capitalize dark:text-gray-200 font-bold">
                count:
                <span className="font-poppins text-sm uppercase font-bold text-gray-300 dark:text-gray-700 pl-3">
                  {name.count}
                </span>
              </p>
            </div>
          ) : (
            <div className=" flex flex-col items-center justify-center w-[350px] md:w-[550px] h-[100px] bg-orange-100 dark:bg-yellow-900 px-4 py-2 rounded-lg text-center  ">
              <h2 className=" font-poppins text-l   uppercase text-gray-400 dark:text-gray-200 font-normal">
                There is no enough information
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
