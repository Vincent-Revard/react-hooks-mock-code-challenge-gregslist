import React from "react";
import Search from "./Search";

function Header( {handleSubmit} ) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSubmit={handleSubmit}/>
    </header>
  );
}

export default Header;
