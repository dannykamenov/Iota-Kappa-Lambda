import "./Profile.css";
import { useEffect, useRef, useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { createUser, getUser } from "@/components/api/userApi";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { ConfirmToast } from "react-confirm-toast";

const Profile = () => {
  const { user } = useKindeAuth();
  const requestSentRef = useRef(false);
  const [userData, setUserData] = useState({});
  const [subDate, setSubDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  useEffect(() => {
    if (user && !requestSentRef.current) {
      requestSentRef.current = true;
      const name = `${user.given_name} ${user.family_name}`;
      const userData = {
        name,
        email: user.email,
        role: "user",
      };
      createUser(userData)
        .then((response) => {})
        .catch((err) => {
          console.error("Error creating user:", err);
        });
    }

    if (user) {
      getUser(user.email)
        .then((response) => {
          setUserData(response);
          if (response.subscriptionDate) {
            setSubDate(new Date(response.subscriptionDate));
            const expiryDateTemp = new Date(response.subscriptionDate);
            expiryDateTemp.setFullYear(expiryDateTemp.getFullYear() + 1);
            setExpiryDate(expiryDateTemp.toDateString());
          }
        })
        .catch((err) => {
          console.error("Error getting user:", err);
        });
    }
  }, [user]);

  if (!user) return null;

  const createStripeSubscription = () => {
    const productId = "price_1Oh9FYEOFAKdfkEnhxgm2VcM";
    fetch(
      "https://iota-kappa-lambda.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId: productId, customerId: userData._id }),
        credentials: "include",
        mode: "cors",
      }
    )
      .then((res) => {
        if (res.ok) return res.json();
        console.log(res);
        return res.json().then((json) => Promise.reject(json));
      })
      .then((session) => {
        window.location = session.session.url;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const cancelStripeSubscription = () => {
    console.log("Cancelling subscription");
  };

  return (
    <div className=" mt-48 custom-profile-box ">
      <div className="w-full overflow-hidden pb-8 bg-white">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mx-auto">
            <h1 className="font-semibold text-4xl p-3">My Profile</h1>
          </div>
          <div className="flex mx-auto">
            <div className="md:col-span-4 lg:col-span-3 xl:col-span-4 flex flex-col gap-6">
              <div className="md:grid md:grid-cols-3 gap-6 h-full">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder={user.given_name}
                          disabled
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder={user.family_name}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder={user.email}
                        type="email"
                        disabled
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        className="min-h-[100px]"
                        id="bio"
                        placeholder="Enter your bio"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="ml-auto">
                      <Link to="/contact-us">Request Name Change</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="md:col-span-1">
                  <CardHeader>
                    <CardTitle>Subscriptions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>IKL Membership</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-1">
                            <div>$100/year</div>
                            {userData.subscriptionDate && (
                              <div className="text-sm text-gray-500 dark:text-gray">
                                {`Subscribed on: ${subDate.toDateString()}`}{" "}
                                <br />
                                {`Expires on: ${expiryDate}`}
                              </div>
                            )}
                          </div>
                        </CardContent>
                        {userData.subscriptionStatus === "active" ? (
                          <CardFooter>
                            <ConfirmToast customFunction={cancelStripeSubscription}>
                              <Button
                                className="ml-auto"
                              >
                                Cancel
                              </Button>
                            </ConfirmToast>
                          </CardFooter>
                        ) : (
                          <CardFooter>
                            <Button
                              className="ml-auto"
                              onClick={createStripeSubscription}
                            >
                              Subscribe
                            </Button>
                          </CardFooter>
                        )}
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
