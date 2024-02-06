import "./Profile.css";
import { useEffect, useRef, useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { createUser } from "@/components/api/userApi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
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

const Profile = () => {
  const { user } = useKindeAuth();
  const [processed, setProcessed] = useState(false);
  const requestSentRef = useRef(false);

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
        .then((response) => {
          setProcessed(true);
          console.log(response.message);
        })
        .catch((err) => {
          console.error("Error creating user:", err);
        });
    }
  }, [user]);

  if (!user) return null;

  return (
    <div className=" mt-48 ">
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
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            placeholder={user.family_name}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          placeholder={user.email}
                          type="email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          placeholder="Enter your password"
                          type="password"
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
                      <Button className="ml-auto">Save</Button>
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
                            <CardTitle>Acme Pro</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid gap-1">
                              <div>$29/month</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                Next payment: January 1, 2023
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button className="ml-auto" variant="outline">
                              Cancel
                            </Button>
                          </CardFooter>
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
