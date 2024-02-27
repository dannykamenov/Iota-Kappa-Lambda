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
import { storage } from "@/firebase";

const EventLoaded = () => {
  const [events, setEvents] = useState([]);
  const { id } = useParams();
  const [activeEvent, setActiveEvent] = useState(null);
  const [vintagePhotos, setVintagePhotos] = useState([]);

  const handleYearChange = (year) => {
    if (year === "Vintage") {
      const storageRef = storage.ref();
      const imagesRef = storageRef.child("Vintage");
      imagesRef.listAll().then((res) => {
        const urlPromises = res.items.map((itemRef) =>
          itemRef.getDownloadURL()
        );
        Promise.all(urlPromises).then((urls) => {
          setVintagePhotos(urls);
        });
      });
      setEvents([]);
    } else {
      getEventsByYear(year).then((res) => {
        setEvents(res.data.events);
        setVintagePhotos([]);
      });
    }
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
        {vintagePhotos && vintagePhotos.length > 0 && (
          <p className="vintage-title">
            Dedicated to all the brothers that have passed through the Chapter
            and have unselfishly worked to better this community and the
            fraternity. Thank You.
          </p>
        )}
        {events.length == 0 && vintagePhotos.length === 0 && (
          <h1 className="w-full h-96 text-center text-6xl font-bold text-gold pt-52 small:pt-16">
            No events found
          </h1>
        )}
        <div className="w-9/12 flex mx-auto my-10 justify-center flex-wrap xs:my-5 xs:w-full">
          {events &&
            events.map((event, index) => {
              const shortSummary = event.summary.substring(0, 28) + "...";

              return (
                <div
                  key={index}
                  className="flex items-center justify-center large:basis-3/5 m-4 large:w-11/12 medium:basis-9/12 hover:cursor-pointer hover:shadow-lg hover:transform hover:scale-105 hover:transition-all hover:duration-300"
                  onClick={() => handleEventClick(event)}
                >
                  <div className="text-center">
                    <img
                      src={event.mainImg}
                      alt=""
                      className=" w-80 h-80 rounded-md object-contain mx-auto medium:w-full medium:h-full"
                    />
                    <h1 className="text-3xl font-bold text-center current-event-title hover:underline">
                      {event.title}
                    </h1>
                    <p className=" text-lg font-semibold text-center text-white">
                      {shortSummary}
                    </p>
                    <p className="text-md font-semibold text-center text-white italic ">
                      {event.location}
                    </p>
                  </div>
                </div>
              );
            })}
          {vintagePhotos &&
            vintagePhotos.length > 0 &&
            vintagePhotos.map((photo, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center large:basis-3/5 m-4 large:w-11/12 medium:basis-9/12 hover:cursor-pointer hover:shadow-lg hover:transform hover:scale-105 hover:transition-all hover:duration-300"
                >
                  <div className="text-center">
                    <img
                      src={photo}
                      alt=""
                      className=" w-80 h-80 rounded-md object-contain mx-auto medium:w-full medium:h-full"
                    />
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
              <p className="event-expand-summary break-words">
                {activeEvent.summary}
              </p>
              <p className="event-expand-desc break-words">
                {activeEvent.description}
              </p>
              <p className="event-expand-when">
                <FontAwesomeIcon icon={faClock} className="when-icon" />
                WHEN
              </p>
              <p className="event-expand-date">
                {formattedDate} @ {activeEvent.time}
              </p>
              {activeEvent.images && activeEvent.images.length > 0 && (
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
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventLoaded;
