import { Navbar } from "flowbite-react";
import React from "react";
import logo from "../../Media/apple.svg";

const Header = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      style={{ backgroundColor: "black" }}
      className="font-sansSerif bg-black px-20 rounded-none"
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img src={logo} className="mr-3 h-[30px] p-0" alt="Flowbite Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="">
        <Navbar.Link href="#Projects">
          <span className="text-gray-300 hover:text-gray-100">
            Store
          </span>
        </Navbar.Link>
        <Navbar.Link href="#Benefits">
          <span className="text-gray-300 hover:text-gray-100">
            Mac
          </span>
        </Navbar.Link>
        <Navbar.Link href="#What">
          <span className="text-gray-300 hover:text-gray-100">
            iPad
          </span>
        </Navbar.Link>
        <Navbar.Link href="#How">
          <span className="text-gray-300 hover:text-gray-100">
            iPhone
          </span>
        </Navbar.Link>
        <Navbar.Link href="#Contact">
          <span className="text-gray-300 hover:text-gray-100">
            Watch
          </span>
        </Navbar.Link>
        <Navbar.Link href="#Blogs">
          <span className="text-gray-300 hover:text-gray-100">
            AirPods
          </span>
        </Navbar.Link>
        <Navbar.Link href="#Blogs">
          <span className="text-gray-300 hover:text-gray-100">
            TV & Home
          </span>
        </Navbar.Link>
        <Navbar.Link href="#Blogs">
          <span className="text-gray-300 hover:text-gray-100">
            Only on Apple
          </span>
        </Navbar.Link>
        <Navbar.Link href="#Blogs">
          <span className="text-gray-300 hover:text-gray-100">
            Support
          </span>
        </Navbar.Link>
       
      </Navbar.Collapse>
      <div className="hidden md:flex"></div>
    </Navbar>
  );
};

export default Header;
