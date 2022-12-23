import { useApp } from "../context";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FiCheck, FiChevronDown } from "react-icons/fi";

const Selector = () => {
  const { types, selectType, setSelectType } = useApp();
  return (
    <div className="w-[200px] md:w-[450px]">
      <Listbox value={selectType} onChange={setSelectType}>
        <div className=" ">
          <Listbox.Button className="md:relative flex  justify-between w-full cursor-default rounded-lg capitalize text-black dark:text-white bg-teal-50 dark:bg-teal-600 py-2 pl-3 md:pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectType.name}</span>
            <span className="pointer-events-none md:absolute md:inset-y-0 md:right-0 flex items-center pr-2 ">
              <FiChevronDown
                size={25}
                className="h-5 w-5 text-gray-400 dark:text-gray-200"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute   capitalize  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ml-1">
              {types.map((type, typeIdx) => (
                <Listbox.Option
                  key={typeIdx}
                  className={
                    "relative cursor-default select-none py-2 pl-10 pr-4 ui-active:bg-teal-100 text-black  "
                  }
                  value={type}
                >
                  {({ selected }) => (
                    <div>
                      <span
                        className={` ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {type.name}
                      </span>
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                        <FiCheck
                          size={20}
                          className=" block ui-not-selected:hidden h-5 w-5"
                        />
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Selector;
