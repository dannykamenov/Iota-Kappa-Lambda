import { useEffect, useState } from "react";
import "./Events.css";
import PaginationDemo from "./paginationDemo";
import { getEventsByYear } from "@/components/api/eventApi";

const EventLoaded = () => {
  const [events, setEvents] = useState([]);

  const handleYearChange = (year) => {
    getEventsByYear(year).then((res) => {
      setEvents(res.data.events);
    });
  };

  useEffect(() => {
    //get year from url
    const url = window.location.href;
    const year = url.split("/").pop();
    //get events by year
    handleYearChange(year);
  }, []);

  return (
    <>
      <div className="event-image">
        <h1 className="event-title">Events & Photos</h1>
      </div>
      <div className="event-container">
        <div className="event-years">
          <PaginationDemo onYearChange={handleYearChange} />
        </div>
        <div className="w-9/12 flex mx-auto my-10 justify-center flex-wrap">
          {events.map((event, index) => {
            return (
              <div
                key={index}
                className="flex basis-1/3 items-center justify-center large:basis-1/2 m-2"
              >
                <div className="w-fit text-center">
                  <img
                    src={event.mainImg}
                    alt=""
                    className=" w-80 h-80 rounded-md object-contain mx-auto "
                  />
                  <h1 className="text-3xl font-bold text-center current-event-title">
                    {event.title}
                  </h1>
                  <p className="text-xl font-semibold text-center text-white">
                    {event.summary}
                  </p>
                  <p className="text-md font-semibold text-center text-white italic ">
                    {event.location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EventLoaded;
