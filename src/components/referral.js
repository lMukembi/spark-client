import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { GrLink } from "react-icons/gr";

export const Referal = () => {
  return (
    <div className="referal">
      <div className="referaltop">
        <GrLink />
        Referal link
      </div>

      <div className="referallink">
        https://crown-wave.com/wise
        <i className="copylink">
          <MdOutlineContentCopy />
          Copy link
        </i>
      </div>
    </div>
  );
};
