import "./Home.css";
import logo from "../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselDemo } from "./CarouselDemo";

const Home = () => {
  return (
    <>
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
          <div
            className="elfsight-app-7f5905de-8f48-4964-8149-c1826666edc7 widget"
            data-elfsight-app-lazy
          ></div>
        </div>
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
        <a href="https://www.paypal.com/donate?token=Qy9ToviYwgBiC0m9h172Ro5CqTureDKe_PD0yULw03wDL_TsFDjZti-qIw0rXttpa8-78Ask6tuddAaD" target="_blank" rel="noreferrer" className="donate-button">
            <FontAwesomeIcon icon={faPaypal} className="donate-icon" />
            <p className="donate-text">Donate</p>
        </a>
      </div>
    </>
  );
};

export default Home;
