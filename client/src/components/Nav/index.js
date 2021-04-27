// import the rect 
import React from "react";
// Nav function to create the navgation bar
function Nav() {
  //return the nav bar contains search and save
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  fixed-top" style={{backgroundColor:"#ff80aa"}}>      
        {/* //link to the Search */}
        <a className="navbar-brand"  href="/">
       Search
      </a>
      {/* //link to the save */}
      <a className="navbar-brand" href="/save">
       Saved
      </a>
      <a className="navbar-brand" href="/" style={{fontSize:"larger",margin:"auto"}}>
       Google Book Search
      </a>
    </nav>
  );
}
//export the Nav bar
export default Nav;
