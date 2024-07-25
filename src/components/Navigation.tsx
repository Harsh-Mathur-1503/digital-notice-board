import React from "react";
import { FiCommand, FiSettings } from "react-icons/fi";

// Define the type for the props
interface NavigationProps {
  setOpenSetting: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({ setOpenSetting }) => {
  return (
    <nav className="pt-5 text-teal-900 flex justify-between items-center w-11/12 mx-auto">
      <div className="flex items-center gap-2 cursor-pointer">
        <FiCommand className="text-teal-600 text-lg" />
        <h1 className="text-teal-900 text-xl font-semibold">Productivity Hub</h1>
      </div>
      <FiSettings
        className="text-teal-600 text-2xl cursor-pointer"
        onClick={() => setOpenSetting((value) => !value)}
      />
    </nav>
  );
};

export default React.memo(Navigation);