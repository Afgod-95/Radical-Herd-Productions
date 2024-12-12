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
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sliderRef = useRef(null);
  const [loadingVideos, setLoadingVideos] = useState(
    Array(videoData.length).fill(false)
  );

  const videoSource = (video) => {
    window.open(video, "_blank");
  };

  const extractVideoId = (url) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&"'>]+)/
    );
    return match ? match[1] : null;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
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

  return (
    <div style={{ width: isMobile ? "90%" : "100%", margin: "auto" }}>
      <div ref={sliderRef}>
        <Slider {...settings}>
          {videoData.map((video, index) => (
            <div
              key={index}
              style={{ display: "inline-block", position: "relative" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {loadingVideos[index] ? (
                <Skeleton
                  variant="rectangular"
                  width={isMobile ? "90%" : 350}
                  height={200}
                  animation="wave"
                  style={{ margin: "0 10px" }}
                />
              ) : (
                <iframe
                  width={isMobile ? "90%" : "350"}
                  height="200"
                  src={`${video.src}?mute=1&controls=0&autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&iv_load_policy=3&playlist=${extractVideoId(
                    video.src
                  )}`}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  style={{
                    margin: "0 10px",
                    cursor: "pointer",
                    border: "none",
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  onLoad={() => handleVideoLoad(index)}
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              )}
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
                onClick={() => videoSource(video.src)}
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
