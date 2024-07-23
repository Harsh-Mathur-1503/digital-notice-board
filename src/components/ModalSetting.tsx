import React, { ForwardedRef } from "react";
import { FiX } from "react-icons/fi";

// Define the types for the props
interface ModalSettingProps {
  pomodoroRef: React.RefObject<HTMLInputElement>;
  shortBreakRef: React.RefObject<HTMLInputElement>;
  longBreakRef: React.RefObject<HTMLInputElement>;
  openSetting: boolean;
  setOpenSetting: React.Dispatch<React.SetStateAction<boolean>>;
  updateTimeDefaultValue: () => void;
}

const ModalSetting: React.FC<ModalSettingProps> = ({
  pomodoroRef,
  shortBreakRef,
  longBreakRef,
  openSetting,
  setOpenSetting,
  updateTimeDefaultValue,
}) => {
  const inputs = [
    {
      value: "Pomodoro",
      ref: pomodoroRef,
      defaultValue: 25,
    },
    {
      value: "Short Break",
      ref: shortBreakRef,
      defaultValue: 5,
    },
    {
      value: "Long Break",
      ref: longBreakRef,
      defaultValue: 10,
    },
  ];

  return (
    <>
      <div
        className={`absolute h-full w-full left-0 top-0 bg-black bg-opacity-30 ${
          openSetting ? "" : "hidden"
        }`}
        onClick={() => setOpenSetting(false)}
      ></div>
      <div
        className={`max-w-xl bg-white absolute sm:w-96 w-11/12 left-1/2 top-1/2 p-5 rounded-md ${
          openSetting ? "" : "hidden"
        }`}
        style={{
          transform: "translate(-50%,-50%)",
        }}
      >
        <div className="text-gray-400 flex justify-between items-center">
          <h1 className="uppercase font-bold tracking-wider">Time setting</h1>
          <FiX
            className="text-2xl cursor-pointer"
            onClick={() => setOpenSetting(false)}
          />
        </div>
        <div className="h-1 w-full bg-gray-400 mt-5 mb-5"></div>
        <div className="flex gap-5">
          {inputs.map((input, index) => (
            <div key={index}>
              <h1 className="text-gray-400 text-sm">{input.value}</h1>
              <input
                defaultValue={input.defaultValue}
                type="number"
                className="w-full bg-gray-400 bg-opacity-30 py-2 rounded outline-none text-center"
                ref={input.ref}
              />
            </div>
          ))}
        </div>
        <button
          className="bg-green-500 uppercase w-full mt-5 text-white rounded py-2"
          onClick={updateTimeDefaultValue}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default React.memo(ModalSetting);