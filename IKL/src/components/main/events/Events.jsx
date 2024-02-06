import { useEffect, useState } from "react";
import "./Events.css";
import PaginationDemo from "./paginationDemo";
import { useNavigate } from 'react-router-dom'

const Events = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const currentYear = new Date().getFullYear().toString();
    setCurrentPage(currentYear);
    navigate(`/events-and-photos/${currentYear}`);
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
