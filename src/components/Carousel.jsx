import { useState, useRef } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import { videoData } from "../../utils/videos/videos";
import { Skeleton } from "@mui/material";


export default function SimpleSlider() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTabletOrLaptop = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1440px)" });
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
    centerPadding: true,
    draggable: true,
    swipe: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: isMobile ? 1 : isTabletOrLaptop ? 2 : 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
        padding: isMobile ? "10px" : "40px 20px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >

      <div ref={sliderRef}>
        <Slider {...settings}>
          {videoData.map((video, index) => (
            <div
              key={index}
              style={{
                padding: "0px", // Add padding to create space between slides
                boxSizing: "border-box",
                position: "relative",
              }}
            >
              {!loadingVideos[index] && (
                <Skeleton animation="wave" variant="rectangular" width="100%" height="200" />
              )}
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                <iframe
                  src={`${video.src}?mute=1&controls=0&autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&iv_load_policy=3&playlist=${extractVideoId(video.src)}`}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allowFullScreen
                  onLoad={() => handleVideoLoad(index)}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: isMobile ? '100%' : '98%',
                    height: "100%",
                    border: "none",
                  }}
                ></iframe>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
