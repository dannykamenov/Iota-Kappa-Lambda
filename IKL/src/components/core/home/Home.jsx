import "./Home.css";
import logo from "../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { CarouselDemo } from "./CarouselDemo";
import { useEffect, useState } from "react";
import { getLatestEvents } from "@/components/api/eventApi";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { format, parseISO } from 'date-fns';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [activeEvent, setActiveEvent] = useState(null);

  useEffect(() => {
    getLatestEvents().then((res) => {
      setEvents(res.data.events);
    });
  }, []);

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
    <main>
      <div className="section1-box">
        <div className="our-mission">
          <h1 className="our-mission-title">Our Mission</h1>
          <p className="our-mission-text">
            The success of our effort to uplift the African American male is the
            civil rights issue of this generation and has nothing to do with
            anyone else but us, for it is our job. Mothers, grandmothers,
            teachers, caretakers, incarcerated parents and even the boys
            themselves have reached out to Alpha men for help. In order to be
            men, our boys must see men...Alpha Men! <br /> <br />{" "}
            <strong>
              - Brother Mark S. Tillman, 34th General President, Alpha Phi Alpha
            </strong>
          </p>
        </div>
        <div className="calendar-box">
          {events.map((event, index) => {
            const date = new Date(event.date);
            const day = date.getDate();
            const month = date
              .toLocaleString("default", { month: "short" })
              .toUpperCase();
            const year = date.getFullYear();
            let eventDay = `${day} `;
            let eventMonth = `${month} ${year}`;
            if (event.summary.length > 50) {
              event.summary = event.summary.substring(0, 25) + "...";
            }
            return (
              <div
                key={index}
                className="event-calendar-box hover:cursor-pointer"
                onClick={() => handleEventClick(event)}
              >
                <div className="event-calendar-info">
                  <p className="event-calendar-month">{eventMonth}</p>
                  <h1 className="event-calendar-day"> {eventDay} </h1>
                  <h1 className="event-calendar-title hover:underline hover:cursor-pointer">
                    {event.title}
                  </h1>
                  <p className="event-calendar-summary">{event.summary}</p>
                  <p className="event-calendar-time">
                    <FontAwesomeIcon icon={faClock} className="clock-icon" />{" "}
                    {event.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {activeEvent && (
          <div className="full-screen-view">
            <div className="full-screen-event">
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
                <p className="event-expand-when"><FontAwesomeIcon icon={faClock} className="when-icon"/>WHEN</p>
                <p className="event-expand-date">
                  {formattedDate} @ {activeEvent.time}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="slogan-div">
        <h1 className="slogan-text">
          MANLY DEEDS, SCHOLARSHIP <br /> AND LOVE FOR ALL MANKIND
        </h1>
      </div>
      <div className="section2-box">
        <div className="carousel-box">
          <CarouselDemo></CarouselDemo>
        </div>
      </div>
      <div className="section3-box">
        <div className="section3-title">
          <h1 className="section3-title">Onward and Upward</h1>
        </div>
        <div className="card-content">
          <div className="info-card">
            <img src={logo} alt="" className="card-image" />
            <p className="card-info">
              Since 1969 the Brothers of Iota Kappa Lambda Chapter of Alpha Phi
              Alpha Inc., have enjoyed strong leadership from its members who
              have served the Syracuse Community well.
            </p>
            <h1 className="card-title">Iota Kappa Lambda</h1>
          </div>
          <div className="info-card">
            <img src={logo} alt="" className="card-image" />
            <p className="card-info">
              Alpha Phi Alpha Fraternity, Inc. develops leaders, promotes
              brotherhood and academic excellence, while providing service and
              advocacy for our communities.
            </p>
            <h1 className="card-title">Alpha Phi Alpha Inc.</h1>
          </div>
          <div className="info-card">
            <img src={logo} alt="" className="card-image" />
            <p className="card-info">
              KNOWLEDGE, INTEGRITY, HONOR We value those who believe that their
              membership in Alpha Phi Alpha is the presentation of their
              personal commitment to these time-valued words.
            </p>
            <h1 className="card-title">Membership</h1>
          </div>
        </div>
      </div>
      <div className="section4-box">
        <h1 className="section4-title">Servants of all</h1>
        <p className="section4-content">
          The Iota Kappa Lambda Chapter is involved in many of the National
          programs of Alpha Phi Alpha Inc. They are also involved in local
          community service programs unique and helpful to the Syracuse and
          Central NY Community. Please feel free to contact brothers who are
          here to serve and better the community. Additionally, volunteers are
          always welcomed as the fraternity strives to involve the community in
          its efforts. To be involved either as a brother or a willing volunteer
          please follow the links to contact us and support us and our efforts
          for a better Syracuse.
        </p>
        <a
          href="https://www.paypal.com/donate?token=Qy9ToviYwgBiC0m9h172Ro5CqTureDKe_PD0yULw03wDL_TsFDjZti-qIw0rXttpa8-78Ask6tuddAaD"
          target="_blank"
          rel="noreferrer"
          className="donate-button"
        >
          <FontAwesomeIcon icon={faPaypal} className="donate-icon" />
          <p className="donate-text">Donate</p>
        </a>
      </div>
    </main>
  );
};

export default Home;
