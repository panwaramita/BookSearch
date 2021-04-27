import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  fixed-top" style={{backgroundColor:"#ff80aa"}}>
        <a className="navbar-brand"  href="/">
       Search
      </a>
      <a className="navbar-brand" href="/save">
       Saved
      </a>
      <a className="navbar-brand" href="/" style={{fontSize:"larger",margin:"auto"}}>
       Google Book Search
      </a>
    </nav>
  );
}

export default Nav;
