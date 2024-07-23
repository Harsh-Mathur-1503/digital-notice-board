"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Alarm from "./Alarm";
import ModalSetting from "./ModalSetting";
import Navigation from "../components/Navigation";
import Timer from "./Timer";

const Index: React.FC = () => {
  const [pomodoro, setPomodoro] = useState<number>(25);
  const [shortBreak, setShortBreak] = useState<number>(5);
  const [longBreak, setLongBreak] = useState<number>(10);
  const [seconds, setSeconds] = useState<number>(0);
  const [stage, setStage] = useState<number>(0);
  const [consumedSeconds, setConsumedSeconds] = useState<number>(0);
  const [ticking, setTicking] = useState<boolean>(false);
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);
  const [openSetting, setOpenSetting] = useState<boolean>(false);

  const alarmRef = useRef<HTMLAudioElement>(null);
  const pomodoroRef = useRef<HTMLInputElement>(null);
  const shortBreakRef = useRef<HTMLInputElement>(null);
  const longBreakRef = useRef<HTMLInputElement>(null);

  const updateTimeDefaultValue = useCallback(() => {
    setPomodoro(pomodoroRef.current?.valueAsNumber ?? 25);
    setShortBreak(shortBreakRef.current?.valueAsNumber ?? 5);
    setLongBreak(longBreakRef.current?.valueAsNumber ?? 10);
    setOpenSetting(false);
    setSeconds(0);
    setConsumedSeconds(0);
  }, []);

  const getTickingTime = useCallback((): number => {
    const timeStage: { [key: number]: number } = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak,
    };
    return timeStage[stage];
  }, [pomodoro, shortBreak, longBreak, stage]);

  const updateMinute = useCallback(() => {
    const updateStage: { [key: number]: React.Dispatch<React.SetStateAction<number>> } = {
      0: setPomodoro,
      1: setShortBreak,
      2: setLongBreak,
    };
    return updateStage[stage];
  }, [stage]);

  const reset = useCallback(() => {
    setConsumedSeconds(0);
    setTicking(false);
    setSeconds(0);
    updateTimeDefaultValue();
  }, [updateTimeDefaultValue]);

  const timeUp = useCallback(() => {
    reset();
    setIsTimeUp(true);
    if (alarmRef.current) {
      alarmRef.current.play();
    }
  }, [reset]);

  const clockTicking = useCallback(() => {
    const minutes = getTickingTime();
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      timeUp();
    } else if (seconds === 0) {
      setMinutes((minute) => minute - 1);
      setSeconds(59);
    } else {
      setSeconds((second) => second - 1);
    }
  }, [getTickingTime, seconds, updateMinute, timeUp]);

  const switchStage = (index: number) => {
    const confirmSwitch = consumedSeconds && stage !== index
      ? confirm("Are you sure you want to switch?")
      : false;
    if (confirmSwitch || !consumedSeconds) {
      reset();
      setStage(index);
    }
  };

  const muteAlarm = () => {
    if (alarmRef.current) {
      alarmRef.current.pause();
      alarmRef.current.currentTime = 0;
    }
  };

  const startTimer = () => {
    setIsTimeUp(false);
    muteAlarm();
    setTicking(prevTicking => !prevTicking);
  };

  useEffect(() => {
    window.onbeforeunload = () => consumedSeconds ? "Unsaved changes" : null;

    const timer = setInterval(() => {
      if (ticking) {
        setConsumedSeconds(value => value + 1);
        clockTicking();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [clockTicking, consumedSeconds, ticking]);

  return (
    <div className="bg-gray-800 min-h-screen text-white font-inter flex flex-col">
      <div className="max-w-3xl mx-auto p-4 flex-1">
        <Navigation setOpenSetting={setOpenSetting} />
        <div className="mt-4">
          <Timer
            stage={stage}
            switchStage={switchStage}
            getTickingTime={getTickingTime}
            seconds={seconds}
            ticking={ticking}
            startTimer={startTimer}
            muteAlarm={muteAlarm}
            isTimeUp={isTimeUp}
            reset={reset}
          />
        </div>
        <Alarm ref={alarmRef} />
        <ModalSetting
          openSetting={openSetting}
          setOpenSetting={setOpenSetting}
          pomodoroRef={pomodoroRef}
          shortBreakRef={shortBreakRef}
          longBreakRef={longBreakRef}
          updateTimeDefaultValue={updateTimeDefaultValue}
        />
      </div>
    </div>
  );
};

export default Index;