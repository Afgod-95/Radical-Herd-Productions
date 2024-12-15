import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import { videoData } from "../videos/videos";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { Skeleton } from "@mui/material";
import { navCol } from "../constant/Colors";

export default function SimpleSlider() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTabletOrLaptop = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1440px)" });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loadingVideos, setLoadingVideos] = useState(Array(videoData.length).fill(false));
  const sliderRef = useRef(null);

  const extractVideoId = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&"'>]+)/);
    return match ? match[1] : null;
  };

  const handleVideoLoad = (index) => {
    setLoadingVideos((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTabletOrLaptop ? 2 : 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: isMobile ? "95%" : "100%", margin: "auto", padding: "20px 0" }}>
      <div ref={sliderRef}>
        <Slider {...settings}>
          {videoData.map((video, index) => (
            <div
              key={index}
              style={{
                padding: "10px", // Add padding to create space between slides
                boxSizing: "border-box",
                position: "relative",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {!loadingVideos[index] && (
                <Skeleton animation="wave" variant="rectangular" width="100%" height="200" />
              )}
              <iframe
                width="100%" // Ensure iframe takes full width of the container
                height="200"
                src={`${video.src}?mute=1&controls=0&autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&iv_load_policy=3&playlist=${extractVideoId(
                  video.src
                )}`}
                title={`Video ${index + 1}`}
                frameBorder="0"
                style={{
                  border: "none",
                  padding: "15px",
                }}
                onLoad={() => handleVideoLoad(index)}
                allowFullScreen
              ></iframe>

              <motion.div
                className="video-button"
                initial={{ opacity: 0, y: "100%" }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? "0%" : "100%",
                }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  pointerEvents: hoveredIndex === index ? "auto" : "none",
                }}
                onClick={() => window.open(video.src, "_blank")}
              >
                <FaYoutube size={50} color={navCol} />
                <p style={{ margin: 0 }}>Watch Video</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
