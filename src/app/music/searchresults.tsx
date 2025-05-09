import { useEffect, useState } from "react";
import { MusicData } from "../music/musicdata";
import MusicEntry from "./musicentry";
import PageButton from "./pagebutton";
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, child, get } from "firebase/database";
// import {
//   initializeAppCheck,
//   ReCaptchaEnterpriseProvider,
// } from "firebase/app-check";

type EntryProps = {
  id: number;
  title: string;
  subtitle: string;
  release_date: string;
  length: number;
  keysig: string[];
  tempo: number[];
  label: string;
  remix: boolean;
  official: boolean;
  collaboration: boolean;
  anison: boolean;
  yt_id: boolean;
  license_info: string;
  link: string;
  art: string;
};

type SearchResultsProps = {
  keyword: string;
  tempo: number[];
  releaseYear: number[];
  keysig: string;
  label: string;
  originals: boolean;
  remixes: boolean;
  collaborations: boolean;
};

function SearchResults({
  keyword,
  tempo,
  releaseYear,
  keysig,
  label,
  originals,
  remixes,
  collaborations,
}: SearchResultsProps) {
  // Firebase init
  // const firebaseConfig = {
  //   databaseURL: "",
  // };
  // const app = initializeApp(firebaseConfig);
  // const databaseRef = ref(getDatabase(app));
  // const [discography, setDiscography] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  // Get data from Firebase
  // useEffect(() => {
  // App Check init
  // const appCheck = initializeAppCheck(app, {
  //   provider: new ReCaptchaEnterpriseProvider(""),
  //   isTokenAutoRefreshEnabled: true,
  // });
  // get(child(databaseRef, "/"))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setDiscography(snapshot.val());
  //       setLoading(false);
  //     } else {
  //       setError(true);
  //       console.log("Error: No data found!");
  //     }
  //   })
  //   .catch((error) => {
  //     setError(true);
  //     console.error(error);
  //   });
  // }, []);

  const loading = false;

  // Count number of entries that are rendered
  const entryCount = MusicData.slice(0).filter(musicFilter).length;

  // Pages
  const itemsPerPage = 30;
  const pageCount = Math.ceil(entryCount / itemsPerPage);
  const [pageRange, setPageRange] = useState([0, itemsPerPage]);
  const [pageCurrent, setPageCurrent] = useState(1);

  // Filter music entries
  function musicFilter(entry: EntryProps) {
    // Check keyword
    if (keyword && !entry.title.toLowerCase().includes(keyword)) return null;

    // Check tempo
    for (let i = 0; i < entry.tempo.length; i++) {
      if (tempo[0] <= entry.tempo[i] && entry.tempo[i] <= tempo[1]) break;
      if (i === entry.tempo.length - 1) return null;
    }

    // Check release year
    const date_split: string[] = entry.release_date.split("-");
    const year: number = parseInt(date_split[0]);
    if (releaseYear[0] > year || year > releaseYear[1]) return null;

    // Check keysig
    if (keysig !== "-") {
      for (let i = 0; i < entry.keysig.length; i++) {
        if (entry.keysig[i].includes(keysig)) break;
        if (keysig == "Other" && entry.keysig[i].includes("ct")) break;
        if (i === entry.keysig.length - 1) return null;
      }
    }

    // Check label
    if (label !== "-" && label !== entry.label) return null;

    // Check type of release
    if (!entry.remix && !originals) return null;
    if (entry.remix && !remixes) return null;
    if (entry.subtitle.includes("w/") && !collaborations) return null;

    // If all pass, render component
    return entry;
  }

  // Every time a filter is changed, set the page back to 1
  useEffect(() => {
    setPageRange([0, itemsPerPage]);
    setPageCurrent(1);
  }, [keyword, tempo, releaseYear, keysig, label, itemsPerPage]);

  // Sort entry
  const [sortMethod, setSortMethod] = useState("Newest");
  function sortEntry(a: EntryProps, b: EntryProps) {
    if (sortMethod === "Newest") return b.id - a.id;
    if (sortMethod === "Oldest") return a.id - b.id;

    if (sortMethod === "Longest") return b.length - a.length;
    if (sortMethod === "Shortest") return a.length - b.length;

    if (sortMethod === "Fastest") return b.tempo[0] - a.tempo[0];
    if (sortMethod === "Slowest") return a.tempo[0] - b.tempo[0];

    if (sortMethod === "A - Z") {
      //
    }
    if (sortMethod === "Z - A") {
      //
    }

    return 0;
  }

  // Scroll back to top of results when page, sort, or filter changes
  useEffect(() => {
    const musicentries: HTMLElement | null =
      document.getElementById("music-entries");
    musicentries!.scrollTop = 0;
  }, [pageCurrent, sortMethod, keyword, tempo, releaseYear, keysig]);

  // ===========================================

  return (
    <div
      className="w-[calc(100vw)] md:w-[calc(100vw-200px)] lg:w-[calc(100vw-500px)] max-w-[1024px]
                  h-[calc(100vh-180px)] md:h-[calc(100vh-200px)]
                  border-4 border-slate-800 bg-slate-900 backdrop-blur bg-opacity-80
                  grid justify-center place-content-start
                  animate-fadeInSlide"
    >
      {/* Header */}
      <div
        className="w-[calc(100vw)] md:w-[calc(100vw-200px)] lg:w-[calc(100vw-500px)] max-w-[1024px]
                  h-16 md:h-20 flex px-4 text-xs md:text-sm
                  border-l-4 border-r-4 border-b-4 border-slate-800 bg-slate-900 bg-opacity-0
                  place-content-center sm:place-content-between place-items-center"
      >
        {/* Result Count */}
        <div className="text-gray-500 hidden sm:inline">
          <b>Results:</b>
          {entryCount !== 0 && (
            <p>
              ( {pageRange[0] + 1} - {Math.min(pageRange[1], entryCount)} of{" "}
              {entryCount} )
            </p>
          )}
          {entryCount === 0 && <p>No results found.</p>}
        </div>

        <div className="flex space-x-4 place-items-center">
          {/* Sort */}
          <div className="flex place-items-center text-gray-500">
            <b className="w-14">Sort by:</b>
            <select
              id="sort-menu"
              className="bg-slate-800 w-24 pl-2 h-7"
              defaultValue={"Newest"}
              onChange={() => {
                setSortMethod(
                  (document.getElementById("sort-menu") as HTMLSelectElement)!
                    .value
                );
              }}
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
              <option value="Longest">Longest</option>
              <option value="Shortest">Shortest</option>
              <option value="Fastest">Fastest</option>
              <option value="Slowest">Slowest</option>
              {/* <option value="A - Z">A - Z</option> */}
              {/* <option value="Z - A">Z - A</option> */}
            </select>
          </div>
          {/* Pages */}
          <div className="flex space-x-2">
            {Array.from({ length: pageCount }, (_, index) => (
              <PageButton
                key={index}
                setPageRange={setPageRange}
                pageNumber={index + 1}
                pageCurrent={pageCurrent}
                setPageCurrent={setPageCurrent}
                itemsPerPage={itemsPerPage}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Music Entries */}
      <div
        id="music-entries"
        className="border-l-4 border-r-4 border-slate-800 overflow-x-hidden"
      >
        {/* Loading Icon */}
        {/* {loading && (
          <div
            className="w-[calc(100vw)] md:w-[calc(100vw-200px)] lg:w-[calc(100vw-500px)] max-w-[1024px] place-items-center
          grid items-center h-[calc(100vh-180px-80px)] md:h-[calc(100vh-200px-90px)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100px"
              viewBox="0 -960 960 960"
              width="100px"
              fill="#1d293d"
              className="animate-spin"
            >
              <path d="M480-480Zm-400 0q0-88 34-163t93-130q59-55 136-83.5T508-879q17 2 27 14.5t7 29.5q-3 17-16.5 27t-30.5 9q-69-3-129.5 19.5T259-713q-46 44-72.5 103.5T160-480q0 134 93 227t227 93q69 0 128.5-26.5T712-259q46-48 68-109t19-127q-1-17 9-30.5t27-16.5q17-3 29.5 7t14.5 27q6 87-22.5 164T774-208q-57 62-133 95T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480Zm640-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
            </svg>
          </div>
        )} */}

        {/* Entries */}
        {!loading &&
          MusicData.filter(musicFilter)
            .sort(sortEntry)
            .slice(pageRange[0], pageRange[1])
            .map((entry: EntryProps) => (
              <MusicEntry key={entry.id} entry={entry} />
            ))}

        {/* Error Message */}
        {/* {!loading && error && (
          <div
            className="w-[calc(100vw)] md:w-[calc(100vw-200px)] lg:w-[calc(100vw-500px)] max-w-[1024px] place-items-center
          grid items-center h-[calc(100vh-180px-80px)] md:h-[calc(100vh-200px-90px)]"
          >
            <div className="grid place-items-center mx-8 text-center">
              <p className="text-3xl font-black mb-2">
                Error: Music data could not be retrieved.
              </p>
              <p className="text-xl">Please refresh or try again later.</p>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default SearchResults;
