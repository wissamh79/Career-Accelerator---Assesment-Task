import React from "react";

const About = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <p className="border border-gray-300 dark:border-gray-700 font-sans text-sm capitalize font-normal  text-black dark:text-white px-3 py-2 rounded-lg  my-2">
        The idea of the application is simple, there are 2 pages (Home, Jokes).
        <br />
        Home page is designed to enable the user to enter his/her name and let
        the application predicts the genderity based on his/her name.
        <br /> Jokes page enable the user to choose kind of random jokes he/she
        wish to read.
      </p>
    </div>
  );
};

export default About;
