import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useEffect } from "react";

const Login = () => {
  const { login, register, user } = useKindeAuth();


  useEffect(() => {
    if (user) {
        console.log(user);
    } else {
        console.log('no user');
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
