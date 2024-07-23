import React from "react";
import { FiCommand, FiSettings } from "react-icons/fi";

// Define the type for the props
interface NavigationProps {
  setOpenSetting: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({ setOpenSetting }) => {
  return (
    <nav className="pt-5 text-white flex justify-between w-11/12 mx-auto">
      <div className="flex items-center gap-1 cursor-pointer">
        <FiCommand className="text-sm" />
        <h1>Daily Focus</h1>
      </div>
      <FiSettings
        className="text-2xl cursor-pointer"
        onClick={() => setOpenSetting((value) => !value)}
      />
    </nav>
  );
};

export default React.memo(Navigation);