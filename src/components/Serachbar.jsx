import { useState } from "react";

function Searchbar({ searchTerm, onSearch }) {
  return (
    <div className=" md:block  flex items-center">
      <input
        type="text"
        placeholder="Search.."
        value={searchTerm}
        className="border rounded-l px-2 py-1 text-black max-w-md"
        onChange={(e) => onSearch(e.target.value)}
      />

      <button className="bg-blue-500 text-white rounded-r px-4 py-1">
        Search
      </button>
    </div>
  );
}

export default Searchbar;
