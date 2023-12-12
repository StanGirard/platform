/* eslint-disable */
import { useState } from "react";

import { useBrainApi } from "@/lib/api/brain/useBrainApi";
import { useBrainContext } from "@/lib/context/BrainProvider/hooks/useBrainContext";

import { ListFilesProps } from "@/lib/api/brain/types";
import ListBrains from "./ListBrains";
import ListFiles from "./ListFiles";



const DocFinderContent = (): JSX.Element => {
  const { getDocsFromQuestion } = useBrainApi();
  const [searchQuery, setSearchQuery] = useState("");
  const { currentBrainId } = useBrainContext();
  const [matchingDocs, setmatchingDocs] = useState<ListFilesProps["files"]>([]);

  const handleSearch = async () => {
    if (!currentBrainId) return;
    setmatchingDocs(await getDocsFromQuestion(currentBrainId, searchQuery)); // eslint-disable
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div>
        <ListBrains />
      </div>
      <div>
        <label htmlFor="search" className="block text-sm font-medium leading-6 text-gray-900">
          Quick search
        </label>
        <div className="relative mt-2 flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center px-2 py-1 text-sm font-medium text-white bg-indigo-500 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 20l-3.87-3.88"
              />
            </svg>
          </button>
        </div>
      </div>
      {matchingDocs.length > 0 && (
        /* add some padding to the top of the results */
      <><div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-sm text-gray-500">Results</span>
        </div>
      </div><div>
          <h2 className="text-lg leading-6 font-medium text-gray-900">Matching Documents</h2>
          <p className="mt-1 text-sm text-gray-500">
            {matchingDocs.length} documents match your search query
          </p>
        </div><ListFiles files={matchingDocs} /></> // eslint-disable-line
        )}
    </>
  );
};

export default DocFinderContent;
        
     
  


   