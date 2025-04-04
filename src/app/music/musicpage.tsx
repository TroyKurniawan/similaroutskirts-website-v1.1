"use client";

import { useState } from "react";
import SearchFilter from "./searchfilter";
import SearchResults from "./searchresults";
const currentYear: number = new Date().getFullYear();

function MusicPage() {
  // States
  const [keyword, setKeyword] = useState("");
  const [tempo, setTempo] = useState([0, 1000]);
  const [releaseYear, setReleaseYear] = useState([2014, currentYear]);
  const [keysig, setKeysig] = useState("-");
  const [label, setLabel] = useState("-");
  const [originals, setOriginals] = useState(true);
  const [remixes, setRemixes] = useState(true);
  const [collaborations, setCollaborations] = useState(true);

  // Open search filter box on small devices
  function openSearchFilter() {
    // If closed, open
    if (
      document
        .getElementById("search-filter")
        ?.classList.contains("-translate-x-[calc(100vw+50px)]")
    ) {
      document
        .getElementById("search-filter")
        ?.classList.remove("-translate-x-[calc(100vw+50px)]");
      document.getElementById("black-bg")?.classList.remove("invisible");
    }
    // If opened, close
    else {
      document
        .getElementById("search-filter")
        ?.classList.add("-translate-x-[calc(100vw+50px)]");
      document.getElementById("black-bg")?.classList.add("invisible");
    }
  }

  return (
    <>
      <div
        className="h-screen w-screen bg-[url(/backgrounds/bg-music.jpg)] fixed top-0 -z-50
                   bg-cover bg-bottom"
      />

      <div
        className="w-screen h-screen 
                  justify-center content-center place-items-center
                  text-white py-20 lg:space-x-4
                  grid lg:flex"
      >
        {/* Filter icon for small devices */}
        <span
          className="group bg-blue-500 w-full justify-center mb-2
                    hover:bg-white transition-all cursor-pointer
                    lg:hidden flex"
          onClick={openSearchFilter}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            width="40px"
            viewBox="0 -960 960 960"
            fill="#e8eaed"
            className=" group-hover:fill-blue-500"
          >
            <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
          </svg>
        </span>

        {/* SearchFilter */}
        <div
          id="search-filter"
          className="absolute lg:static -translate-x-[calc(100vw+50px)] lg:-translate-x-0 transition-all z-20"
        >
          <SearchFilter
            setKeyword={setKeyword}
            setTempo={setTempo}
            setReleaseYear={setReleaseYear}
            setKeysig={setKeysig}
            setLabel={setLabel}
            setOriginals={setOriginals}
            setRemixes={setRemixes}
            setCollaborations={setCollaborations}
            openSearchFilter={openSearchFilter}
          />
        </div>

        {/* Black BG For small devices */}
        <span
          id="black-bg"
          className="invisible h-screen w-screen absolute top-0 bg-black bg-opacity-50 z-10 transition-all backdrop-blur-sm"
          onClick={openSearchFilter}
        />

        {/* Search Results */}
        <div id="search-results" className="">
          <SearchResults
            keyword={keyword}
            tempo={tempo}
            releaseYear={releaseYear}
            keysig={keysig}
            label={label}
            originals={originals}
            remixes={remixes}
            collaborations={collaborations}
          />
        </div>
      </div>
    </>
  );
}

export default MusicPage;
