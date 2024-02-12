import { useEffect, useState } from "react";
import "./Events.css";
import PaginationDemo from "./paginationDemo";
import { getEventsByYear } from "@/components/api/eventApi";
import { useParams } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, parseISO } from "date-fns";

const EventLoaded = () => {
  const [events, setEvents] = useState([]);
  const { id } = useParams();
  const [activeEvent, setActiveEvent] = useState(null);

  const handleYearChange = (year) => {
    getEventsByYear(year).then((res) => {
      setEvents(res.data.events);
    });
  };

  useEffect(() => {
    if (id) {
      handleYearChange(id);
    }
  }, [id]);

  const handleEventClick = (event) => {
    setActiveEvent(event);
  };

  const handleClose = () => {
    setActiveEvent(null);
  };

  let formattedDate = "";
  if (activeEvent) {
    formattedDate = format(parseISO(activeEvent.date), "EEEE, MMMM d, yyyy");
  }

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
            const date = new Date(event.date);
            const day = date.getDate();
            const month = date
              .toLocaleString("default", { month: "short" })
              .toUpperCase();
            const year = date.getFullYear();
            let eventDay = `${day} `;
            let eventMonth = `${month} ${year}`;
            let eventSummary;
            if (event.summary.length > 25) {
              eventSummary = event.summary.substring(0, 28) + "...";
            }
            return (
              <div
                key={index}
                className="flex items-center justify-center large:basis-3/5 m-4 large:w-11/12 xmedium:basis-9/12"
                onClick={() => handleEventClick(event)}
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
      {activeEvent && (
        <div className="full-screen-view ">
          <div className="full-screen-event overflow-y-auto">
            <div className="btn-holder">
              <button onClick={handleClose} className="event-closebtn">
                x
              </button>
            </div>
            <h1 className="event-expand-title">{activeEvent.title}</h1>
            <img
              src={activeEvent.mainImg}
              alt=""
              className="event-expand-img"
            />
            <div className="info-event-holder">
              <p className="event-expand-summary">{activeEvent.summary}</p>
              <p className="event-expand-desc">{activeEvent.description}</p>
              <p className="event-expand-when">
                <FontAwesomeIcon icon={faClock} className="when-icon" />
                WHEN
              </p>
              <p className="event-expand-date">
                {formattedDate} @ {activeEvent.time}
              </p>
              <Carousel className=" w-10/12 bg-transparent mx-auto">
                <CarouselContent className="bg-transparent ">
                  {activeEvent.images.map((photo, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3 bg-transparent "
                    >
                      <div className="">
                        <Card className="">
                          <CardContent className="flex aspect-square items-center justify-center p-0 bg-transparent">
                            <img
                              src={photo}
                              alt=""
                              className="w-full h-full rounded-md border-5 border-black  object-cover "
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventLoaded;
