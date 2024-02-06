import { useEffect, useState } from "react";
import "./Events.css";
import PaginationDemo from "./paginationDemo";
import { getEventsByYear } from "@/components/api/eventApi";
import {useParams} from 'react-router-dom'

const EventLoaded = () => {
  const [events, setEvents] = useState([]);
  const {id} = useParams()

  const handleYearChange = (year) => {
    getEventsByYear(year).then((res) => {
      setEvents(res.data.events);
    });
  };

  useEffect(() => {
    if(id){
      handleYearChange(id)
    }
  }, [id]);

  return (
    <>
      <div className="event-image">
        <h1 className="event-title">Events & Photos</h1>
      </div>
      <div className="event-container">
        <div className="event-years">
          <PaginationDemo onYearChange={handleYearChange} />
        </div>
        <div className="w-9/12 flex mx-auto my-10 justify-center flex-wrap xs:my-5 xs:w-full">
          {events.map((event, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center large:basis-3/5 m-4 large:w-11/12 xmedium:basis-9/12"
              >
                <div className="text-center">
                  <img
                    src={event.mainImg}
                    alt=""
                    className=" w-80 h-80 rounded-md object-contain mx-auto medium:w-full medium:h-full"
                  />
                  <h1 className="text-3xl font-bold text-center current-event-title">
                    {event.title}
                  </h1>
                  <p className=" text-lg font-semibold text-center text-white">
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
