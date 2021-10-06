import React from "react";
import Playarrowroundedicon from "@mui/icons-material/PlayArrowRounded";
import Navigatenextroundedicon from "@mui/icons-material/NavigateNextRounded";
import Navigatebeforeroundedicon from "@mui/icons-material/NavigateBeforeRounded";
const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <Navigatebeforeroundedicon className="skip-prev" fontSize="large" />
        <Playarrowroundedicon className="play" fontSize="large" />
        <Navigatenextroundedicon className="skip-next" fontSize="large" />
      </div>
    </div>
  );
};
export default Player;
