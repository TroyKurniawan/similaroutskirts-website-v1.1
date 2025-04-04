import { useState } from "react";
import ButtonPrimary from "../components/buttonprimary";

type MusicEntryProps = {
  entry: {
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
};

function MusicEntry({ entry }: MusicEntryProps) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Format date
  let date_split: string[] = entry.release_date.split("-");
  let year: string = date_split[0];
  let month: string = months[Number(date_split[1]) - 1];
  let date: string = date_split[2];
  let date_string = month + " " + date + ", " + year;

  // Format length
  let length_string = "";
  let min: number = Math.floor(entry.length / 60);
  let sec: number = entry.length % 60;
  if (sec < 10) length_string = min + ":0" + sec;
  else length_string = min + ":" + sec;

  // Format keysig
  let keysig_string: string = entry.keysig[0];
  if (entry.keysig.length > 1) {
    for (let i = 1; i < entry.keysig.length; i++) {
      keysig_string += ", " + entry.keysig[i];
    }
  }

  // Format tempo
  let tempo_string: string = entry.tempo[0].toString();
  if (entry.tempo.length > 1) {
    for (let i = 1; i < entry.tempo.length; i++) {
      tempo_string += ", " + entry.tempo[i];
    }
  }

  // Format inline style background image
  let background_inline = {
    // backgroundImage: "url(" + entry.art + ")",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    // width: "10px",
    // height: "10px",
  };

  // ============================================

  const [open, setOpen] = useState(false);

  // ============================================

  return (
    <>
      <a
        // href={entry.link}
        target="_blank"
        className="h-24 md:h-28 2xl:h-36
                hover:bg-slate-800 bg-slate-900 bg-opacity-0
                  flex place-items-center
                  cursor-pointer
                  hover:border-l-8 border-blue-500 transition-all"
        onClick={() => setOpen(!open)}
      >
        {/* ID */}
        <p className="w-12 md:w-14 grid place-content-center text-xs 2xl:text-sm text-gray-500 font-black">
          {entry.id}
        </p>

        {/* Main Box */}
        <div
          className="w-96 sm:w-4/5 
                        h-24 md:h-28 2xl:h-36
                        pr-4 space-x-4 flex place-items-center"
        >
          {/* Art */}
          <img src={entry.art} className="h-24 md:h-28 2xl:h-36 py-4" />

          <div className="">
            <h1
              className="text-xl 2xl:text-4xl
                          font-black"
            >
              {entry.title}
            </h1>
            {entry.subtitle && (
              <h2 className="text-sm 2xl:text-base">({entry.subtitle})</h2>
            )}
            <p
              className="text-gray-500 mt-2
                            text-xs 2xl:text-sm"
            >
              {date_string}
            </p>
          </div>
        </div>

        {/* Side Box */}
        <div
          className="hidden sm:grid justify-start place-content-between w-36
                      text-gray-500 space-y-1
                      text-xs 2xl:text-sm"
        >
          {/* Length */}
          <div className="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="17px"
              viewBox="0 -960 960 960"
              width="17px"
              fill="#6b7280"
            >
              <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
            </svg>
            <p className="ml-1">{length_string}</p>
          </div>
          {/* Tempo */}
          <div className="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="17px"
              viewBox="0 -960 960 960"
              width="17px"
              fill="#6b7280"
            >
              <path d="M418-340q24 24 62 23.5t56-27.5l224-336-336 224q-27 18-28.5 55t22.5 61Zm62-460q59 0 113.5 16.5T696-734l-76 48q-33-17-68.5-25.5T480-720q-133 0-226.5 93.5T160-400q0 42 11.5 83t32.5 77h552q23-38 33.5-79t10.5-85q0-36-8.5-70T766-540l48-76q30 47 47.5 100T880-406q1 57-13 109t-41 99q-11 18-30 28t-40 10H204q-21 0-40-10t-30-28q-26-45-40-95.5T80-400q0-83 31.5-155.5t86-127Q252-737 325-768.5T480-800Zm7 313Z" />
            </svg>
            <p className="ml-1">{tempo_string + " bpm"}</p>
          </div>

          {/* Key */}
          <div className="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="17px"
              viewBox="0 -960 960 960"
              width="17px"
              fill="#6b7280"
            >
              <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" />
            </svg>
            <p className="ml-1">{keysig_string}</p>
          </div>

          {/* Label */}
          <div className="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="17px"
              viewBox="0 -960 960 960"
              width="17px"
              fill="#6b7280"
            >
              <path d="M480-300q75 0 127.5-52.5T660-480q0-75-52.5-127.5T480-660q-75 0-127.5 52.5T300-480q0 75 52.5 127.5T480-300Zm0-140q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <p className="ml-1">{entry.label}</p>
          </div>
        </div>
      </a>

      {/* Open Entry */}
      {open && (
        <div
          className=" px-10 text-sm 2xl:text-base
                        bg-slate-950
                      grid place-items-center sm:flex sm:justify-between"
        >
          <div className="my-4">
            <p className="font-bold mb-2">Usage Info:</p>
            {entry.official && (
              <div className="">
                <div className="flex space-x-2">
                  <p>YouTube Content ID: </p>
                  <p
                    className={entry.yt_id ? "text-red-500" : "text-green-500"}
                  >
                    {entry.yt_id ? "ON" : "OFF"}
                  </p>
                </div>
                {entry.license_info && (
                  <p>
                    License Info:{" "}
                    <a
                      href={entry.license_info}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      {entry.label} Licensing
                    </a>
                  </p>
                )}
              </div>
            )}
            {!entry.official && <div>Unofficial Release</div>}
          </div>
          <ButtonPrimary title="Download / Stream" link={entry.link} />
        </div>
      )}
    </>
  );
}

export default MusicEntry;
