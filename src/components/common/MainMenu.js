"use client"


import {
  homeItems,
  blogItems,
  listingItems,
  propertyItems,
  pageItems,
  Services
} from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MainMenu = () => {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState("");
  const [submenu, setSubmenu] = useState("");
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
 
   
    Services.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("pages");
      }
    });

 
  }, [pathname]);

  const handleActive = (link) => {
    if (link.split("/")[1] == pathname.split("/")[1]) {
      return "menuActive";
    }
  };
  return (


    <ul className="ace-responsive-menu ">
      <li >
        <a className="list-item" href="/">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Home
          </span>
        </a>
        {/* Level Two*/}
      
      </li>
      {/* End homeItems */}

    

   

      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "blog" ? "title menuActive" : "title"}>
          Services
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {Services.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End blog Items */}
      <li >
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
          Explore
          </span>
        </a>
        {/* Level Two*/}
      
      </li>
      <li className=" ">
        <a className="list-item" href="/about">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
          About us
          </span>
        </a>
        {/* Level Two*/}
      
      </li>
      {/* End pages Items */}
    </ul>

 


  );
};

export default MainMenu;
