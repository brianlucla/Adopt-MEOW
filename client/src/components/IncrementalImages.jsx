import React, { useEffect, useState } from "react";
import smileImage from "../assets/images/smile.png";
import likeImage from "../assets/images/like.png";
import groupImage from "../assets/images/group.png";
import cameraImage from "../assets/images/camera.png";
import "../index.css";

const IncrementalImages = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const numberPosition = 200; // Adjust this value based on your preferred scroll position

  const getIncrementalNumber = (increment) => {
    const scrollIncrement = Math.floor(scrollPosition / increment);
    return scrollIncrement.toLocaleString();
  };

  return (
    <div className="flex">
      {/* Render your text on the left side */}
      <div className="text-container">
        <h1 className="text-4xl font-bold text-white">
          Welcome to AdoptMeow! We are dedicated to rescuing and adopting over a
          thousand companion animals annually. Our focus is on strengthening the
          human-animal bond through education programs and emergency assistance
          for pet parents. With the support of donors and volunteers, we thrive,
          ensuring a loving home for pets in need. Find your perfect match at
          AdoptMeow and make a difference in an animal's life today!
        </h1>
      </div>

      {/* Render the images with incremental numbers */}
      <div className="flex-1 container">
        <div className="image-container">
          {/* Use conditional rendering to display the incremental numbers */}
          {scrollPosition > numberPosition && (
            <div className="image-wrapper">
              <div className="text-right">
                <h2 className="text-xl font-bold text-white">
                  Adoption since 2008
                </h2>
                <h3 className="text-3xl font-bold text-white">
                  {getIncrementalNumber(14)}+
                </h3>
              </div>
              <img src={smileImage} alt="Adoption" className="image" />
            </div>
          )}

          {scrollPosition > numberPosition && (
            <div className="image-wrapper">
              <div className="text-right">
                <h2 className="text-xl font-bold text-white">TONS of LOVE</h2>
                <h3 className="text-3xl font-bold text-white">
                  {getIncrementalNumber(1.5)}+
                </h3>
              </div>
              <img src={likeImage} alt="Love" className="image" />
            </div>
          )}

          {scrollPosition > numberPosition && (
            <div className="image-wrapper">
              <div className="text-right">
                <h2 className="text-xl font-bold text-white">
                  Foster Families
                </h2>
                <h3 className="text-3xl font-bold text-white">
                  {getIncrementalNumber(25)}+
                </h3>
              </div>
              <img src={groupImage} alt="Families" className="image" />
            </div>
          )}

          {scrollPosition > numberPosition && (
            <div className="image-wrapper">
              <div className="text-right">
                <h2 className="text-xl font-bold text-white">Yearly Events</h2>
                <h3 className="text-3xl font-bold text-white">
                  {getIncrementalNumber(890)}
                </h3>
              </div>
              <img src={cameraImage} alt="Events" className="image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
   
};

export default IncrementalImages;
