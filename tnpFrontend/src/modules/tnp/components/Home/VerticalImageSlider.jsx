import { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { serverURL } from "../../../../constant/constant";

const VerticalImageSlider = () => {
  const containerRef = useRef(null);
   const [images, setImages] = useState([]);

    useEffect(() => {
    // Fetch images from backend
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${serverURL}/api/allpackages`); // adjust URL as needed
        // res.data is an array of { imageUrl: "..." }
        setImages(res.data.map(pkg => pkg.imageUrl));
      } catch (error) {
        console.error("Failed to fetch package images", error);
      }
    };

    fetchImages();
  }, []);




  useEffect(() => {
    const container = containerRef.current;
    // const totalImages = images.length;
    const scrollSpeed = 0.6; // pixels per frame
    let animationFrame;

    const scroll = () => {
      if (!container) return;

      container.scrollTop += scrollSpeed;

      const scrollHeight = container.scrollHeight;
      const viewHeight = container.clientHeight;

      // If reached end of first list, reset to start
      if (container.scrollTop >= scrollHeight / 2) {
        container.scrollTop = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [images]);

  return (
    <div
      className="h-screen w-[100%] ml-8 mx-auto overflow-y-scroll   relative"
      ref={containerRef}
    >
      <div className=" shadow-white  flex flex-col animate-none">
            {[...images, ...images].map((img, idx) => (
          <div
            key={idx}
            className="h-52 hover:scale-110 hover:shadow-2xl w-[85%] flex justify-center items-center snap-center transition-transform duration-300"
          >
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="h-40 w-[80%] hover:scale-120 object-cover rounded-lg transition-all duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalImageSlider;
