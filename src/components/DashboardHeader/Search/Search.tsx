import { SearchIcon } from "lucide-react";

function Search() {
  return (
    <div
      className="hidden md:flex flex-1 items-center justify-between w-full lg:w-auto
      max-w-xl lg:min-w-[270px] py-3 px-4 gap-x-6 rounded-md cursor-pointer bg-gray-100"
    >
      <div className=" flex items-center gap-x-3">
        <SearchIcon />
        <p>Search</p>
      </div>
    </div>
  );
}

export default Search;
