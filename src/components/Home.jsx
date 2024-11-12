import React from "react";
import Sidebar from "./Sidebar.jsx";
// import Sidebar2 from "./Sidebar2.jsx";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider.jsx";
import ListItems from "./ListItems.jsx";
function Home() {      //{showSidebar}
  const { data, loading } = useAuth();
 


  console.log(data);
  return (
    <div className="flex mt-20">
      {/* Show Sidebar or Sidebar2 based on state */}
       <Sidebar /> {/*{showSidebar ? <Sidebar /> : <Sidebar2 />} */}
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
      
        <ListItems />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            data.map((item) => {
              if (item.type !== "video") return false;
              return <Video key={item.id} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
