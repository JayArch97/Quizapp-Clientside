import React, { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      {/* The button's appearance and text change based on the 'isToggled' state */}
      <button
        onClick={handleToggle}
        className="border border-indigo-500 bg-indigo-500 rounded-2xl w-200px"
      >
        {isToggled ? "Turn off" : "Turn on"}
      </button>

      {/* Content can be conditionally rendered based on the state */}
      {isToggled && <p>Content is visible!</p>}
    </div>
  );
};

export default ToggleButton;
