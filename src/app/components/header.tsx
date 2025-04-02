"use client";

import Menu from "./Menu/Menu";
import ButtonHeader from "./buttonheader";

function pageBehind() {
  if (document.getElementById("page")?.classList.contains("-z-10"))
    document.getElementById("page")?.classList.remove("-z-10");
  else document.getElementById("page")?.classList.add("-z-10");
}

function Header() {
  document.addEventListener("scroll", bgColor);

  // If the user is not at the top of the page, add a black background to the header
  function bgColor() {
    if (window.scrollY !== 0)
      document.getElementById("header")?.classList.add("bg-black");
    else document.getElementById("header")?.classList.remove("bg-black");
  }

  return (
    <>
      <div
        className="w-screen h-16 px-4 top-0 fixed z-50
                flex place-items-center place-content-between
                transition-all"
        id="header"
      >
        {/* Logo */}
        <a href="/">
          <img
            src="so-logos/so-logo.png"
            alt="similar outskirts logo"
            className="min-w-10 w-10"
          />
        </a>

        {/* Buttons */}
        <div className="h-16 hidden lg:flex">
          <ButtonHeader title="Home" link="/home" />
          <ButtonHeader title="About" link="/about" />
          <ButtonHeader title="Music" link="/music" />
          <ButtonHeader title="Live Shows" link="/live-shows" />
          <ButtonHeader title="Music Usage" link="/music-usage" />
          <ButtonHeader title="Contact" link="/contact" />
        </div>

        <div className="inline lg:hidden">
          <Menu pageBehind={pageBehind} />
        </div>
      </div>
    </>
  );
}

export default Header;
