import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Login = () => {
  const { login, isAuthenticated, user } = useKindeAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenticated, user);
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  });


  return (
    <div className="flex justify-center align-middle min-h-screen items-center ">
      <div className="text-center">
        <h1 className="pb-5 text-4xl">Welcome to IKL Admin Panel!</h1>
        <Button onClick={login} type="button" className="mx-auto my-auto">
          Log In
        </Button>
      </div>
    </div>
  );
};

export default Login;
