import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { GrLink } from "react-icons/gr";

export const Referal = () => {
  const [copyText, setCopyText] = useState("https://crown-wave.com/wise");

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
    alert("Copied!");
  };
  return (
    <div className="referal">
      <div className="referaltop">
        <GrLink />
        Referal link
      </div>

      <div className="referallink">
        <input value={copyText} onChange={(e) => setCopyText(e.target.value)} />

        <button onClick={handleCopy}>
          <MdOutlineContentCopy />
          Copy link
        </button>
      </div>
    </div>
  );
};
