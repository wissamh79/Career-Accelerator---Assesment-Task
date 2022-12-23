import { Disclosure } from "@headlessui/react";

const Closure = ({ punchline }) => {
  return (
    <div className=" ">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="font-sans text-sm bg-white dark:bg-black rounded-lg text-gray-300 dark:text-gray-100 capitalize font-medium px-4 py-1 m-1">
              <span>punchline</span>
            </Disclosure.Button>
            <Disclosure.Panel className=" border border-gray-300 dark:border-gray-700 font-sans text-sm capitalize font-normal  text-black dark:text-white px-3 py-2 rounded-lg  my-2 ">
              {punchline}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Closure;
