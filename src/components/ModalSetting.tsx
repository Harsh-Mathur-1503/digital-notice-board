import React from "react";
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
      label: "Pomodoro",
      ref: pomodoroRef,
      defaultValue: 25,
    },
    {
      label: "Short Break",
      ref: shortBreakRef,
      defaultValue: 5,
    },
    {
      label: "Long Break",
      ref: longBreakRef,
      defaultValue: 10,
    },
  ];

  return (
    <>
      {openSetting && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setOpenSetting(false)}
        />
      )}
      {openSetting && (
        <div className="fixed z-50 inset-0 flex items-center justify-center">
          <div className="max-w-xl w-full bg-teal-50 p-5 rounded-lg shadow-lg sm:w-96 relative">
            <div className="flex justify-between items-center text-gray-800">
              <h1 className="uppercase font-bold tracking-wider">Time Settings</h1>
              <FiX
                className="text-teal-600 text-2xl cursor-pointer"
                onClick={() => setOpenSetting(false)}
              />
            </div>
            <div className="h-1 w-full bg-teal-200 mt-5 mb-5"></div>
            <div className="space-y-4">
              {inputs.map((input, index) => (
                <div key={index}>
                  <label className="block text-gray-800 text-sm font-medium mb-1">{input.label}</label>
                  <input
                    defaultValue={input.defaultValue}
                    type="number"
                    className="w-full bg-teal-100 border border-teal-300 py-2 rounded text-center outline-none"
                    ref={input.ref}
                  />
                </div>
              ))}
            </div>
            <button
              className="bg-teal-500 w-full mt-5 text-white py-2 rounded uppercase hover:bg-teal-600"
              onClick={updateTimeDefaultValue}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(ModalSetting);