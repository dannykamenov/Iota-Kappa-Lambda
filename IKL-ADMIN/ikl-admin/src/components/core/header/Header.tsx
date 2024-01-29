import { ModeToggle } from "../../mode-toggle";
import { NavigationMenuDemo } from "./NavMenuDemo";

const Header = () => {
  return (
    <div className=" my-5 mx-auto w-2/5 flex justify-between small:w-fit small:justify-center small:text-center small:overflow-hidden small:block medium:w-3/4 xl:w-1/2" >
      <NavigationMenuDemo/>
      <ModeToggle />
    </div>
  );
};

export default Header;
