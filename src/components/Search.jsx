import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import Sidebar from "./Sidebar.jsx";
// import Sidebar2 from "./Sidebar2.jsx";
import SearchCard from "./SearchCard.jsx";
// import { useUtils } from "../context/UtilsContext.jsx";

function Search() {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  // const {showSidebar}= useUtils();

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    fetchData(`search/?q=${searchQuery}`).then(({ contents }) => {
      console.log({"Search Result":contents});
      setResult(contents);
    });
  };

  return (
    <div className="">
      <div className="mt-24 flex flex-row h-[calc(100%-56px)]">
        {/* Show Sidebar or Sidebar2 based on state */}
        <Sidebar /> {/* {showSidebar ? <Sidebar /> : <Sidebar2 />} */}
        <div className="grow h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
          <div className=" grid grid-cols-1 gap-2 p-2">
            {result?.map((item, index) => {
              if (item?.type !== "video") return false;
              return <SearchCard key={index} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
