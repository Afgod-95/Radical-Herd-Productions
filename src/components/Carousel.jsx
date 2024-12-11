import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import { videoData } from "../videos/videos";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { navCol } from "../constant/Colors";

export default function SimpleSlider() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered video by index
  const [isInView, setIsInView] = useState(false); // Track if the slider is in the viewport
  const sliderRef = useRef(null); // Reference to the slider element

  const videoSource = (video) => {
    window.open(video, "_blank"); // Opens the video in a new tab
  };

  const extractVideoId = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&"'>]+)/);
    return match ? match[1] : null;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Update state based on visibility
      },
      { threshold: 0.5 } // Trigger when 50% of the slider is in view
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoPlay: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const iframeStyle = {
    margin: "0 10px",
    cursor: "pointer",
    border: "none",
  };

  return (
    <div style={{ width: isMobile ? "90%" : "100%", margin: "auto" }}>
      <div ref={sliderRef}>
        {/* Show a message when the slider is in view */}
        {isInView && (
          <motion.div
            className="video-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 20,
              padding: "10px 20px",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "white",
              fontSize: "1.5rem",
              borderRadius: "5px",
            }}
          >
            Click to view videos
          </motion.div>
        )}

        <Slider {...settings}>
          {videoData.map((video, index) => (
            <div
              key={index}
              style={{ display: "inline-block", position: "relative" }}
              onMouseEnter={() => setHoveredIndex(index)} // Set hover index
              onMouseLeave={() => setHoveredIndex(null)} // Reset hover index
            >
              <iframe
                width="350"
                height="200"
                src={`${video.src}?mute=1&controls=0&autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&iv_load_policy=3&playlist=${extractVideoId(video.src)}`}
                title={`Video ${index + 1}`}
                style={iframeStyle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              {/* Overlay with "Click to watch video" */}
              <motion.div
                className="video-button"
                initial={{ opacity: 0, y: "100%" }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? "0%" : "100%",
                }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                }}
                style={{
                  position: "absolute",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: ".5rem",

                  zIndex: 10,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  textAlign: "center",
                  fontSize: "1.2rem",
                  cursor: "pointer",

                  pointerEvents: hoveredIndex === index ? "auto" : "none", // Disable interaction when not visible
                }}
                onClick={() =>
                  videoSource(
                    "https://www.youtube.com/@radicalherdproductions2489/videos"
                  )
                }
              >
                
                  <FaYoutube size={50} color={navCol} />
                  <p style={{ margin: 0 }}>Watch all videos</p>
               
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
