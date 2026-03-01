import { useState } from "react";
import { SunMoon, CloudSun } from "lucide-react";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="mt-4 absolute right-4">
      <button
        onClick={handleToggle}
        className="flex justify-center-safe items-center border border-white bg-blue-200 rounded-2xl w-12 h-8"
      >
        {isToggled ? <SunMoon /> : <CloudSun />}
      </button>
    </div>
  );
};

const SignInButton = () => {
  const handleSignIn = () => {
    console.log("Need to impliment this");
  };

  return (
    <>
      <button
        className="text-white font-extrabold text-xs w-18 h-8 border bg-blue-200 border-white mt-4 px-2 py-2 truncate absolute right-18 rounded-2xl"
        onClick={() => handleSignIn()}
      >
        Sign In
      </button>
    </>
  );
};

export { ToggleButton, SignInButton };
