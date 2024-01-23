import "./Events.css";
import PaginationDemo from "./paginationDemo";

const Events = () => {
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
