import React from "react";
import "./Home.css";
import home from "../../../assets/HOME.jpg";

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
        <div className="section3-title"></div>
        <div className="card-content"></div>
      </div>
    </>
  );
};

export default Home;
