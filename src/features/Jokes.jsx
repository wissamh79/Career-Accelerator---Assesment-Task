import { useState } from "react";
import axios from "axios";
import { useApp } from "../context";
import Selector from "../components/Selector";
import Closure from "../components/Closure";
import { useEffect } from "react";

const API_URL = "https://official-joke-api.appspot.com/jokes";
const Jokes = () => {
  const { types, selectType } = useApp();
  const [jokes, setJokes] = useState({});

  const fetchJokes = async (type) => {
    console.log(type);
    const response = await axios.get(`${API_URL}/${type}/ten`);
    const data = await response.data;
    console.log(data);
    setJokes(data);
  };
  useEffect(() => {
    fetchJokes(types[1].name);
  }, []);

  return (
    <section className="max-w-full max-h-full">
      <div className="flex flex-col items-center justify-center  h-full space-y-5 my-16 ">
        <div className="mb-5 ">
          <h1 className="font-poppins text-2xl md:text-4xl text-center  text-black dark:text-white font-black ">
            Grab ten random jokes!
          </h1>
        </div>
        <div>
          <form
            className=" flex flex-wrap items-stretch space-x-2"
            onSubmit={(e) => {
              e.preventDefault();
              try {
                fetchJokes(selectType.name);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Selector />
            <button className="  bg-teal-50 dark:bg-teal-600 text-black dark:text-white rounded-lg px-6 py-2 font-poppins text-sm uppercase font-normal">
              grab
            </button>
          </form>
        </div>
        <div className="space-y-4">
          {jokes?.length ? (
            jokes.map((joke) => (
              <div
                key={joke.id}
                className="w-[300px] md:w-[540px] bg-orange-100 dark:bg-yellow-900 px-5 py-3 rounded-lg space-y-2"
              >
                <h2 className="font-poppins text-black dark:text-white text-sm capitalize font-semibold">
                  {joke.setup}
                </h2>

                <Closure punchline={joke.punchline} />
              </div>
            ))
          ) : (
            <div className=" flex flex-col items-center justify-center w-[540px] h-[100px] bg-orange-100 dark:bg-yellow-900 px-4 py-2 rounded-xl text-center  ">
              <h2 className=" font-poppins text-l   uppercase text-gray-400 dark:text-gray-200 font-normal">
                There is no jokes to display
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Jokes;
