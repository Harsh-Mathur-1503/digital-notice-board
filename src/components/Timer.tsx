import React from "react";
import { FiBellOff } from "react-icons/fi";

// Define the types for the props
interface TimerProps {
  stage: number;
  switchStage: (index: number) => void;
  getTickingTime: () => number;
  seconds: number;
  ticking: boolean;
  startTimer: () => void;
  isTimeUp: boolean;
  muteAlarm: () => void;
  reset: () => void;
}

const Timer: React.FC<TimerProps> = ({
  stage,
  switchStage,
  getTickingTime,
  seconds,
  ticking,
  startTimer,
  isTimeUp,
  muteAlarm,
  reset,
}) => {
  const options = ["Pomodoro", "Short Break", "Long Break"];

  return (
    <div className="w-10/12 mx-auto pt-5 flex flex-col justify-center items-center mt-10">
      <div className="flex gap-5 items-center">
        {options.map((option, index) => (
          <h1
            key={index}
            className={`${
              index === stage ? "bg-teal-100 text-teal-700" : "text-teal-300"
            } p-2 cursor-pointer transition-all rounded-md`}
            onClick={() => switchStage(index)}
          >
            {option}
          </h1>
        ))}
      </div>
      <div className="mt-10 mb-10">
        <h1 className="text-8xl font-bold select-none text-teal-900 m-0">
          {getTickingTime()}:{seconds.toString().padStart(2, "0")}
        </h1>
      </div>
      <div className="flex gap-2 items-center">
        <button
          className={`px-16 py-2 text-2xl rounded-md ${
            ticking ? "bg-teal-500 text-white hover:bg-teal-600" : "bg-teal-100 text-teal-500 hover:bg-teal-200"
          } uppercase font-bold transition-colors duration-300`}
          onClick={startTimer}
        >
          {ticking ? "Stop" : "Start"}
        </button>
        {isTimeUp && (
          <FiBellOff
            className="text-3xl text-teal-500 cursor-pointer"
            onClick={muteAlarm}
          />
        )}
      </div>
      {ticking && (
        <button className="uppercase text-teal-500 underline mt-5" onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Timer;