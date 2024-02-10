import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, register, user, isAuthenticated } = useKindeAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  });

  return (
    <div>
      <button onClick={register} type="button">
        Register
      </button>
      <button onClick={login} type="button">
        Log In
      </button>
    </div>
  );
};

export default Login;
