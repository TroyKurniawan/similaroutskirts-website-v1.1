import ToggleSwitch from "../components/toggleswitch";

type SearchFilterProps = {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setTempo: React.Dispatch<React.SetStateAction<number[]>>;
  setReleaseYear: React.Dispatch<React.SetStateAction<number[]>>;
  setKeysig: React.Dispatch<React.SetStateAction<string>>;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
  setOriginals: React.Dispatch<React.SetStateAction<boolean>>;
  setRemixes: React.Dispatch<React.SetStateAction<boolean>>;
  setCollaborations: React.Dispatch<React.SetStateAction<boolean>>;
  openSearchFilter: () => void;
};

const currentYear: number = new Date().getFullYear();
const person = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    viewBox="0 -960 960 960"
    width="20px"
    fill="#FFFFFF"
    className="size-7 mr-3"
  >
    <path d="M480-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.29-49 61.29-17 124.5-17t124.71 17Q666-398 721-366q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.18-3.03-9.41-3.02-4.24-7.97-6.59-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.72-3 3.73-3 8.28v24Zm216.21-288Q510-552 531-573.21t21-51Q552-654 530.79-675t-51-21Q450-696 429-674.79t-21 51Q408-594 429.21-573t51 21Zm-.21-72Zm0 360Z" />
  </svg>
);
const construction = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    viewBox="0 -960 960 960"
    width="20px"
    fill="#FFFFFF"
    className="size-7 mr-3"
  >
    <path d="M96-144v-92q0-26 12.5-47.5T143-318q54-32 114.5-49T384-384q66 0 126.5 17T625-318q22 13 34.5 34.5T672-236v92H96Zm72-72h432v-20q0-6.47-3.03-11.76-3.02-5.3-7.97-8.24-47-27-99-41.5T384-312q-54 0-106 14t-99 42q-4.95 2.83-7.98 7.91-3.02 5.09-3.02 12V-216Zm216-216q-60 0-102-42t-42-102h-12q-5.4 0-8.7-3.3-3.3-3.3-3.3-8.7 0-5.4 3.3-8.7 3.3-3.3 8.7-3.3h12q0-40 19.8-72.52Q279.6-705.03 312-724v64q0 5.4 3.3 8.7 3.3 3.3 8.7 3.3 5.4 0 8.7-3.3 3.3-3.3 3.3-8.7v-74.84q11-4.16 22.9-6.66 11.91-2.5 25-2.5 13.1 0 25.1 2.5 12 2.5 23 6.66V-660q0 5.4 3.3 8.7 3.3 3.3 8.7 3.3 5.4 0 8.7-3.3 3.3-3.3 3.3-8.7v-64q32.4 18.87 52.2 51.22Q528-640.43 528-600h12q5.4 0 8.7 3.3 3.3 3.3 3.3 8.7 0 5.4-3.3 8.7-3.3 3.3-8.7 3.3h-12q0 60-42 102t-102 42Zm.21-72Q414-504 435-525.15T456-576H312q0 30 21.21 51t51 21Zm261.94 120-5.07-25.31Q636-411 631.5-414q-4.5-3-8.5-6l-24 9-17-30 19-15.65q0-2.35-.5-5.35-.5-3-.5-6t.5-6q.5-3 .5-5.35L582-495l17-30 24 9q4-3 8.67-6 4.66-3 9.33-5l5.09-25H680l4 25q5 2 10 5t9 6l24-9 17 30-19 15.65q0 2.35.5 5.35.5 3 .5 6t-.5 6q-.5 3-.5 5.35L744-441l-17 30-24-9q-4 3-8.85 5.86-4.86 2.85-10.15 5.14l-4 25h-33.85ZM663-443q11 0 18-7t7-18q0-11-7-18t-18-7q-11 0-18.5 7t-7.5 18q0 11 7.5 18t18.5 7Zm81-133-7-37q-8-2-14-6t-12-9l-35 12-24-42 28-24q-1-4-1.5-7t-.5-7q0-4 .5-7.5t1.5-7.5l-28-24 24-42 35 12q6-5 12-9t14-6l6.88-36H792l8 36q8 2 14 6t12 9l34-12 24 42-27 24q1 4 1 7.5v7.5q0 4-.5 7.5T856-681l28 24-24 42-35-12q-6 5-12 9t-14 6l-6.87 36H744Zm23.96-77q18.04 0 30.54-12.46t12.5-30.5q0-18.04-12.46-30.54t-30.5-12.5q-18.04 0-30.54 12.46t-12.5 30.5q0 18.04 12.46 30.54t30.5 12.5ZM384-216Z" />
  </svg>
);
const groups = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    viewBox="0 -960 960 960"
    width="20px"
    fill="#FFFFFF"
    className="size-7 mr-3"
  >
    <path d="M0-240v-59q0-51 45-80t123-29q15 0 30 1.5t30 4.5q-17 20-26.5 45t-9.5 50.56V-240H0Zm240 0v-61q0-27.86 14.5-50.93T293-387q44-22 91-33.5t95.53-11.5Q529-432 576-420.5t91 33.5q24 12 38.5 35.07T720-301v61H240Zm528 0v-67.37q0-26.95-9.5-50.79T732-402q17-3 31.5-4.5T792-408q78 0 123 29t45 80v59H768Zm-454-72h332q-7-17-59.5-32.5T480-360q-54 0-106.5 15.5T314-312ZM167.79-456Q138-456 117-477.03q-21-21.02-21-50.55Q96-558 117.03-579q21.02-21 50.55-21Q198-600 219-579.24t21 51.45Q240-498 219.24-477t-51.45 21Zm624 0Q762-456 741-477.03q-21-21.02-21-50.55Q720-558 741.03-579q21.02-21 50.55-21Q822-600 843-579.24t21 51.45Q864-498 843.24-477t-51.45 21ZM479.5-480q-49.5 0-84.5-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85.5q0 49.5-35 84.5t-85.5 35Zm.5-72q20.4 0 34.2-13.8Q528-579.6 528-600q0-20.4-13.8-34.2Q500.4-648 480-648q-20.4 0-34.2 13.8Q432-620.4 432-600q0 20.4 13.8 34.2Q459.6-552 480-552Zm0 240Zm0-288Z" />
  </svg>
);

function SearchFilter({
  setKeyword,
  setTempo,
  setReleaseYear,
  setKeysig,
  setLabel,
  setOriginals,
  setRemixes,
  setCollaborations,
  openSearchFilter,
}: SearchFilterProps) {
  // Format tempo to send as state change
  function formatTempo() {
    setTempo([
      parseInt(
        (document.getElementById("lower-tempo") as HTMLInputElement)?.value
      ),
      parseInt(
        (document.getElementById("upper-tempo") as HTMLInputElement)?.value
      ),
    ]);
  }

  // Format release year to send as state change
  function formatReleaseYear() {
    setReleaseYear([
      parseInt(
        (document.getElementById("lower-year") as HTMLInputElement)?.value
      ),
      parseInt(
        (document.getElementById("upper-year") as HTMLInputElement)?.value
      ),
    ]);
  }

  // = = = = = = = = = = = = = = = = = =

  return (
    <div
      className="w-96
                  h-[calc(100vh-200px)]
                  py-4
                  border-4 border-slate-800 bg-slate-900 backdrop-blur bg-opacity-80
                  place-items-center content-start
                  animate-fadeInSlide overflow-y-auto
                  grid"
    >
      {/* Title */}
      <div className="flex w-[21rem] px-2 place-content-between place-items-center">
        <h1 className="text-2xl font-black my-2">Filter by</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#FFFFFF"
          className="cursor-pointer inline lg:hidden"
          onClick={openSearchFilter}
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </div>

      {/* Filters */}
      <div className="w-80">
        <div className="w-full h-[2px] my-4 bg-slate-800" />

        {/* = = = = = = = = = = = = = = = = = = */}

        <h2 className="font-bold my-2">Title</h2>

        <div className="my-2 flex relative">
          <div className="absolute m-1 pl-1 scale-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#6b7280"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </div>
          <input
            id="keyword-input"
            className="bg-slate-800 w-full pl-10 pr-2 h-8"
            placeholder="Search..."
            type="search"
            autoComplete="off"
            onChange={() => {
              let userInput = (document.getElementById(
                "keyword-input"
              ) as HTMLInputElement)!.value;
              userInput = userInput.toLowerCase();
              setKeyword(userInput);
            }}
          />
        </div>

        <div className="w-full h-[2px] my-4 bg-slate-800" />

        {/* = = = = = = = = = = = = = = = = = = */}

        <h2 className="font-bold my-2">Tempo</h2>

        <div className="flex place-content-between place-items-center relative">
          {/* Lower */}
          <div className="flex">
            <div className="absolute m-1 pl-1 scale-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#6b7280"
              >
                <path d="M418-340q24 24 62 23.5t56-27.5l224-336-336 224q-27 18-28.5 55t22.5 61Zm62-460q59 0 113.5 16.5T696-734l-76 48q-33-17-68.5-25.5T480-720q-133 0-226.5 93.5T160-400q0 42 11.5 83t32.5 77h552q23-38 33.5-79t10.5-85q0-36-8.5-70T766-540l48-76q30 47 47.5 100T880-406q1 57-13 109t-41 99q-11 18-30 28t-40 10H204q-21 0-40-10t-30-28q-26-45-40-95.5T80-400q0-83 31.5-155.5t86-127Q252-737 325-768.5T480-800Zm7 313Z" />
              </svg>
            </div>
            <input
              id="lower-tempo"
              className="bg-slate-800 w-36 h-8 pl-4 text-center"
              placeholder="Lower BPM"
              type="number"
              defaultValue={60}
              onChange={formatTempo}
            />
          </div>
          <p>to</p>
          {/* Upper */}
          <input
            id="upper-tempo"
            className="bg-slate-800 w-36 h-8 text-center"
            placeholder="Upper BPM"
            type="number"
            defaultValue={200}
            onChange={formatTempo}
          />
        </div>

        <div className="w-full h-[2px] my-4 bg-slate-800" />

        {/* = = = = = = = = = = = = = = = = = = */}

        <h2 className="font-bold my-2">Release Year</h2>

        <div className="flex place-content-between place-items-center relative">
          <div className="flex">
            <div className="absolute m-1 pl-1 scale-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="#6b7280"
              >
                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
              </svg>
            </div>
            <input
              id="lower-year"
              className="bg-slate-800 w-36 h-8 pl-4 text-center"
              placeholder="Lower Year"
              type="number"
              defaultValue={2014}
              onChange={formatReleaseYear}
            />
          </div>
          <p>to</p>
          <input
            id="upper-year"
            className="bg-slate-800 w-36 h-8 text-center"
            placeholder="Upper Year"
            type="number"
            defaultValue={currentYear}
            onChange={formatReleaseYear}
          />
        </div>

        <div className="w-full h-[2px] my-4 bg-slate-800" />

        {/* = = = = = = = = = = = = = = = = = = */}

        <h2 className="font-bold my-2">Key</h2>

        <div className="my-2 flex relative">
          <div className="absolute m-1 pl-1 scale-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#6b7280"
            >
              <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" />
            </svg>
          </div>

          <select
            id="keysig-menu"
            className="bg-slate-800 w-full pl-10 h-8"
            onChange={() =>
              setKeysig(
                (document.getElementById("keysig-menu") as HTMLSelectElement)!
                  .value
              )
            }
            defaultValue={"-"}
          >
            <option value="-">-</option>
            <option value="C / Am">C / Am</option>
            <option value="C# / A#m">C# / A#m</option>
            <option value="D / Bm">D / Bm</option>
            <option value="D# / Cm">D# / Cm</option>
            <option value="E / C#m">E / C#m</option>
            <option value="F / Dm">F / Dm</option>
            <option value="F# / D#m">F# / D#m</option>
            <option value="G / Em">G / Em</option>
            <option value="G# / Fm">G# / Fm</option>
            <option value="A / F#m">A / F#m</option>
            <option value="A# / Gm">A# / Gm</option>
            <option value="B / G#m">B / G#m</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="w-full h-[2px] my-4 bg-slate-800" />

        {/* = = = = = = = = = = = = = = = = = = */}

        <h2 className="font-bold my-2">Label</h2>

        <div className="my-2 flex relative">
          <div className="absolute m-1 pl-1 scale-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#6b7280"
            >
              <path d="M480-300q75 0 127.5-52.5T660-480q0-75-52.5-127.5T480-660q-75 0-127.5 52.5T300-480q0 75 52.5 127.5T480-300Zm0-140q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </div>

          <select
            id="label-menu"
            className="bg-slate-800 w-full pl-10 h-8"
            onChange={() =>
              setLabel(
                (document.getElementById("label-menu") as HTMLSelectElement)!
                  .value
              )
            }
            defaultValue={"-"}
          >
            <option value="-">-</option>
            <option value="APEXA">APEXA</option>
            <option value="Disciple">Disciple</option>
            <option value="FiXT">FiXT</option>
            <option value="FORM">FORM</option>
            <option value="Heaven Sent">Heaven Sent</option>
            <option value="Hot Panda Media">Hot Panda Media</option>
            <option value="Hypernight">Hypernight</option>
            <option value="Independent">Independent</option>
            <option value="Proximity">Proximity</option>
            <option value="Rushdown">Rushdown</option>
            <option value="Umbra Collective">Umbra Collective</option>
          </select>
        </div>

        <div className="w-full h-[2px] my-4 bg-slate-800" />

        {/* = = = = = = = = = = = = = = = = = = */}
        <h2 className="font-bold my-2">Type</h2>

        <div className="">
          <ToggleSwitch
            callback={setOriginals}
            title="Originals"
            subtitle=""
            init={true}
            icon={person}
            enable={true}
          />
          <ToggleSwitch
            callback={setRemixes}
            title="Remixes"
            subtitle=""
            init={true}
            icon={construction}
            enable={true}
          />
          <ToggleSwitch
            callback={setCollaborations}
            title="Collaborations"
            subtitle=""
            init={true}
            icon={groups}
            enable={true}
          />
        </div>

        {/* = = = = = = = = = = = = = = = = = = */}
      </div>
    </div>
  );
}

export default SearchFilter;
