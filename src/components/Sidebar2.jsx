import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { Link } from 'react-router-dom';


function Sidebar2() {
    const sidebarItems = [
        {
          id: 1,
          name: "Home",
          icon: <GoHome />,
          path: "/" //path of the home page
        },
        {
          id: 2,
          name: "Shorts",
          icon: <SiYoutubeshorts />,
        },
        {
          id: 3,
          name: "Subscriptions",
          icon: <MdOutlineSubscriptions />,
        },
        {
            id: 4,
            name: "Your Channel",
            icon: <PiUserSquareThin />,
          }
      ];
  return (
    <>
    <div className="px-6 w-[17%] h-[calc(100vh-6.625rem)] ">
      <div className=" space-y-3 items-center">
        {sidebarItems.map((item) => {
          return (
            <Link to={item.path || "#"} key={item.id}> {/* Link added for routing */}
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
            </Link>
          );
        })}
      </div>
      </div>
    </>
  )
}

export default Sidebar2
