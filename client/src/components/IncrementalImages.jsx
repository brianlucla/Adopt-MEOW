import React, { useEffect, useState } from "react";
import smileImage from "../assets/images/smile.png";
import likeImage from "../assets/images/like.png";
import groupImage from "../assets/images/group.png";
import cameraImage from "../assets/images/camera.png";

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
      {/* Render the images with incremental numbers */}
      <div className="space-y-4">
        {/* Use conditional rendering to display the incremental numbers */}
        {scrollPosition > numberPosition && (
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">
              Adoption since 2008
            </h2>
            <h3 className="text-3xl font-bold text-white">
              {getIncrementalNumber(14)}+
            </h3>
            <img
              src={smileImage}
              alt="Adoption"
              className="w-32 h-32 mx-auto"
            />
          </div>
        )}

        {scrollPosition > numberPosition && (
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">TONS of LOVE</h2>
            <h3 className="text-3xl font-bold text-white">
              {getIncrementalNumber(1.5)}+
            </h3>
            <img src={likeImage} alt="Love" className="w-32 h-32 mx-auto" />
          </div>
        )}

        {scrollPosition > numberPosition && (
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">Foster Families</h2>
            <h3 className="text-3xl font-bold text-white">
              {getIncrementalNumber(25)}+
            </h3>
            <img
              src={groupImage}
              alt="Families"
              className="w-32 h-32 mx-auto"
            />
          </div>
        )}

        {scrollPosition > numberPosition && (
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">Yearly Events</h2>
            <h3 className="text-3xl font-bold text-white">
              {getIncrementalNumber(890)}
            </h3>
            <img src={cameraImage} alt="Events" className="w-32 h-32 mx-auto" />
          </div>
        )}
      </div>

      {/* Render your text on the left side */}
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          dignissimos. Vitae accusamus sint iusto quas tempora praesentium autem
          id facilis. Voluptates, quos iusto optio a soluta cumque molestias
          fugiat atque.
        </h1>
      </div>
    </div>
  );
};

export default IncrementalImages;
