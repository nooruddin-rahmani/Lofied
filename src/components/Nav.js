import React from "react";

import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <h1>Lofied</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        <span>
          <LibraryMusicRoundedIcon fontSize="small" />
        </span>
        <span>Library</span>
      </button>
    </nav>
  );
};

export default Nav;
