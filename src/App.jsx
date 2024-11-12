import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import { useAuth } from "./context/AuthProvider";
import Loading from "./loader/Loading";
// import { useState } from "react";

function App() {
  const { loading } = useAuth();
  // const [showSidebar, setShowSidebar] = useState(true); // State to track which sidebar is shown

  // Toggle function to switch sidebars
//   const toggleSidebar = () => {
//    setShowSidebar((prev) => !prev);
//  };
  return (
    <div>
      {loading && <Loading />}
      <Navbar  /> {/* Pass the toggle function to Navbar  onToggleSidebar={toggleSidebar}*/}
      <Routes>
        <Route path="/" exact element={<Home />} />  {/*showSidebar={showSidebar}*/}
        <Route path="/search/:searchQuery" element={<Search/>} />{/*showSidebar={showSidebar}*/}
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
}

export default App;
