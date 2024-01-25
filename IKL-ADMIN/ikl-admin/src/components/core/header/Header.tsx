import React from "react";
import { ModeToggle } from "../../mode-toggle";
import { NavigationMenuDemo } from "./NavMenuDemo";

const Header = () => {
  return (
    <div className=" my-5 mx-auto w-2/5  flex justify-between">
      <NavigationMenuDemo />
      <ModeToggle />
    </div>
  );
};

export default Header;
