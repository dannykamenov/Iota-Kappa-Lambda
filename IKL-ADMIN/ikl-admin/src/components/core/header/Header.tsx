import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { ModeToggle } from "../../mode-toggle";
import { NavigationMenuDemo } from "./NavMenuDemo";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const { isAuthenticated, logout } = useKindeAuth();

  if (isAuthenticated) {
    return (
      <div className=" my-5 mx-auto w-3/5 flex justify-between small:w-fit small:justify-center small:text-center small:overflow-hidden small:block medium:w-3/4 xl:w-1/2">
        <NavigationMenuDemo />
        <div className="flex ">
          <ModeToggle />
          <Button variant="outline" className="ml-3" onClick={logout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </Button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Header;
