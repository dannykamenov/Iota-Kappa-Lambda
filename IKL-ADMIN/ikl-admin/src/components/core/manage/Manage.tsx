import React, { useEffect } from "react";
import { getEvents } from "@/components/api/eventApi";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const ManageComponent = () => {
  useEffect(() => {
    getEvents().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <h1>Manage</h1>
    </>
  );
};

export default ManageComponent;
