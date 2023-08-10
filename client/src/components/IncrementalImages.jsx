import React, { useEffect, useState } from "react";
import smileImage from "../assets/images/icons/smile-min.png";
import likeImage from "../assets/images/icons/like-min.png";
import groupImage from "../assets/images/icons/group-min.png";
import cameraImage from "../assets/images/icons/camera-min.png";
import "../App.css";


const IncrementalImages = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const numberPosition = 300; 


  const getIncrementalNumber = (base) => {
    return Math.floor((scrollPosition / numberPosition) * base);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex-container">
      {/* Render the "Welcome to AdoptMeow!" text on the left side */}
      <div className="text-container">
        <h1 className="text text-light">
          Welcome to AdoptMeow!
          <br />
          <br />
          We are dedicated to rescuing and adopting over a thousand companion
          animals annually. Our focus is on strengthening the human-animal bond
          through education programs and emergency assistance for pet parents.
          With the support of donors and volunteers, we thrive, ensuring a
          loving home for pets in need. Find your perfect match at AdoptMeow and
          make a difference in an animal's life today!
        </h1>
      </div>

      {/* Render the images with incremental numbers on the right side */}
      <div className="image-container">
        {/* Use conditional rendering to display the incremental numbers */}
        {scrollPosition > numberPosition && (
          <div className="image-wrapper">
            <div className="image">

              <img src={smileImage} alt="Adoption" className="img img-yellow"/>

            </div>
            <div className="line">
              {" "}
              {/* Vertical line */}
              <div className="text-right">
                <h3 className="number text-3xl font-bold text-yellow">
                  {getIncrementalNumber(14)}+
                </h3>
                <h2 className="number-title text-xl font-bold text-light">
                  Adoption since 2008
                </h2>
              </div>
            </div>
          </div>
        )}

        {scrollPosition > numberPosition && (
          <div className="image-wrapper">
            <div className="image">

              <img src={likeImage} alt="Love" className="image img-red" />

            </div>
            <div className="line">
              {" "}
              {/* Vertical line */}
              <div className="text-right">
                <h3 className="number text-3xl font-bold text-red">
                  {getIncrementalNumber(1.5)}+
                </h3>
                <h2 className="number-title text-xl font-bold text-light">
                  TONS of LOVE
                </h2>
              </div>
            </div>
          </div>
        )}

        {scrollPosition > numberPosition && (
          <div className="image-wrapper">
            <div className="image">

              <img src={groupImage} alt="Families" className="image img-green" />

            </div>
            <div className="line">
              {" "}
              {/* Vertical line */}
              <div className="text-right">
                <h3 className="number text-3xl font-bold text-green">
                  {getIncrementalNumber(25)}+
                </h3>
                <h2 className="number-title text-xl font-bold text-light">
                  Foster Families
                </h2>
              </div>
            </div>
          </div>
        )}

        {scrollPosition > numberPosition && (
          <div className="image-wrapper">
            <div className="image">

              <img src={cameraImage} alt="Events" className="image img-violet" />

            </div>
            <div className="line">
              {" "}
              {/* Vertical line */}
              <div className="text-right">
                <h3 className="number text-3xl font-bold text-violet">
                  {getIncrementalNumber(25)}+
                </h3>
                <h2 className="number-title text-xl font-bold text-light">
                  Yearly Events
                </h2>
              </div>
            </div>
          </div>
        )}
        {/* ... Repeat the pattern for the other images ... */}
      </div>
    </div>
  );
};

export default IncrementalImages;