import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/components/api/userApi";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const { isAuthenticated } = useKindeAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }

    getAllUsers().then((data) => {
      setUsers(data);
    });
  });

  return (
    <div className=" w-3/4 mt-32 mx-auto ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[200px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Subscription Status</TableHead>
            <TableHead>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-1" variant="ghost">
                    Subscription End
                    <ArrowUpDownIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuRadioGroup value="ascending">
                    <DropdownMenuRadioItem value="ascending">
                      Ascending
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="descending">
                      Descending
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user: any, index) => {

            const date: Date = new Date(user.subscriptionDate);
            const oneYearAhead: Date = new Date(date.setFullYear(date.getFullYear() + 1));
            const initials = user.name.split(" ").map((n: string) => n[0].toUpperCase()).join("");
            const subscriptionStatus = user.subscriptionStatus.charAt(0).toUpperCase() + user.subscriptionStatus.slice(1);

            return (
              <TableRow key={index}>
                <TableCell className="flex items-center gap-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage alt="Avatar" src={user.profilePic} />
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                  <div className="font-medium">{user.name}</div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="">
                  {user.subscriptionStatus == "active" ? (<CheckIcon className="h-4 w-4 mr-2 text-green-500" />) : (<XIcon className="h-4 w-4 mr-2 text-red-500" />)}
                  {subscriptionStatus}
                </TableCell>
                <TableCell className="pl-6">
                  {user.subscriptionDate == null ? "N/A" : oneYearAhead.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

function ArrowUpDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default UserList;
