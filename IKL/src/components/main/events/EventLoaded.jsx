import { useEffect, useState } from "react";
import "./Events.css";
import PaginationDemo from "./paginationDemo";
import {getEventsByYear} from "@/components/api/eventApi";

const EventLoaded = () => {

    const [events, setEvents] = useState([]);

  useEffect(() => {
    //get year from url
    const url = window.location.href;
    const year = url.split("/").pop();
    //get events by year
    getEventsByYear(year).then((res) => {
      setEvents(res.data.events);
    });
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
        <div className="w-full">
            {events.map((event, index) => {
                return (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <div className="w-fit">
                            <img src={event.mainImg} alt="" className=" w-96 h-96  rounded-md border-5 border-black  object-contain "/>
                            <h1 className="text-3xl font-bold text-center text-white">{event.title}</h1>
                            <p className="text-xl font-semibold text-center text-white">{event.summary}</p>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </>
  );
};

export default EventLoaded;
