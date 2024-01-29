import { useEffect, useState } from "react";
import "./Events.css";
import PaginationDemo from "./paginationDemo";

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCurrentPage(new Date().getFullYear().toString());
    window.location.href = `events-and-photos/${currentPage}`;
  });

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

export default Events;
