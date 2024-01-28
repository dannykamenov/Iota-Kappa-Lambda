import { useEffect } from "react";
import "./Events.css";
import PaginationDemo from "./paginationDemo";

const EventLoaded = () => {

  useEffect(() => {
    //get year from url
    const url = window.location.href;
    const year = url.split("/").pop();

  }, []);

  return (
    <>
      <div className="event-image">
        <h1 className="event-title">Events & Photos</h1>
      </div>
      <div className="event-container">
        <div className="event-years">
            <PaginationDemo />
        </div>
      </div>
    </>
  );
};

export default EventLoaded;
