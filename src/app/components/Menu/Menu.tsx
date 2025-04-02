import React, { useState } from "react";
import MenuLinks from "./MenuLinks";
// import MenuBtn from "../../icons/google-menu.svg";
// import CloseBtn from "../../icons/google-close.svg";

type MenuProps = {
  pageBehind: () => void;
};

function Menu({ pageBehind }: MenuProps) {
  const [open, setOpen] = useState(false);

  //   Function to open/close menu
  function menuOpen() {
    // If open, close
    if (open) {
      document.getElementById("menu")?.classList.add("translate-x-[100vw]");
    }
    // If closed, open
    else {
      document.getElementById("menu")?.classList.remove("translate-x-[100vw]");
    }
    pageBehind();
    setOpen(!open);
  }

  //   ====================

  return (
    <div className="z-50">
      <div className="z-50">
        {/* Menu Button SVG */}
        {!open && (
          <img
            src="google-menu.svg"
            className="hover:cursor-pointer size-10 m-3"
            alt="menu button"
            onClick={menuOpen}
          />
        )}
        {/* Close Button SVG */}
        {open && (
          <img
            src="google-close.svg"
            className="hover:cursor-pointer size-10 m-3"
            alt="close button"
            onClick={menuOpen}
          />
        )}
      </div>

      {/* Menu */}
      <div
        id="menu"
        className="h-screen w-72 transition-all -z-10 absolute top-0 right-0 
                    translate-x-[100vw]
                    grid justify-center content-center
                    bg-black"
      >
        <div className="w-44 text-4xl font-bold text-right">
          <MenuLinks title="Home" link="/home" />
          <MenuLinks title="About" link="/about" />
          <MenuLinks title="Music" link="/music" />
          <MenuLinks title="Live Shows" link="/live-shows" />
          <MenuLinks title="Music Usage" link="/music-usage" />
          <MenuLinks title="Contact" link="/contact" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
