import React from "react";
import { MdWavingHand } from "react-icons/md";

export const Welcome = () => {
  return (
    <div className="welcome">
      <div>Welcome back, Brian!</div>

      <MdWavingHand className="welcomeicon" />
    </div>
  );
};
