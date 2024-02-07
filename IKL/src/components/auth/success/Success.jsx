import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { getUser } from "@/components/api/userApi";

const Success = () => {
  const navigate = useNavigate();
  const { user } = useKindeAuth();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (user) {
      getUser(user.email)
        .then((response) => {
          setUserData(response);
        })
        .catch((err) => {
          console.error("Error getting user:", err);
        });

      if (userData._id && userData.sessionId) {
        fetch(
          "https://iota-kappa-lambda.onrender.com/api/confirm-checkout-session",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sessionId: userData.sessionId,
              userId: userData._id,
            }),
          }
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            return response.json().then((json) => Promise.reject(json));
          })
          .then((data) => {
            navigate("/profile");
          })
          .catch((err) => {
            console.error("Error creating session:", err);
          });
      }
    }
  }, [user, navigate, userData._id, userData.sessionId, userData]);

  return null;
};

export default Success;
