import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const Navs = [
    {
      id: 1,
      title: "Advice",
      url: "/Advice",
    },
    {
      id: 2,
      title: "Homepage",
      url: "/Homepage",
    },
    {
      id: 3,
      title: "Incanddec",
      url: "/Incanddec",
    },
    {
      id: 4,
      title: "Timecount",
      url: "/Timecount",
    },
  ];
  return (
    <div>
      <div className="w-full h-[80px] border-b-4 flex justify-center items-center">
        <div className="w-[80%] h-full  flex justify-between items-center ">
          {Navs.map((el) => (
            <Link to={el.url}>
              <div>{el.title}</div>
            </Link>
          ))}
        </div>

        {/* <div>PRACTICE</div> */}
      </div>
    </div>
  );
};

export default Header;
