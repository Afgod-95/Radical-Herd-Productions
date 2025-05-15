import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { videoData } from "../../utils/videos/videos";
import CustomSkeleton from "./CustomSkeleton";

// Custom arrow components
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "flex",
        position: "absolute",
        left: 0,
        zIndex: 100,
        cursor: "pointer",
        top: "50%",
        transform: "translateY(-50%)"
      }}
    >
      <FaChevronCircleLeft size={24} color="#333" />
    </div>
  )
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "flex",
        position: "absolute",
        right: 0,
        zIndex: 100,
        cursor: "pointer",
        top: "50%",
        transform: "translateY(-50%)"
      }}
    >
      <FaChevronCircleRight size={24} color="#333" />
    </div>
  );
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

NextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

// Custom skeleton component to replace MUI Skeleton


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
    dots: false,
    infinite: false,
    centerPadding: true,
    draggable: true,
    swipe: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTabletOrLaptop ? 2 : 3,
    slidesToScroll: 1,
    arrows: true,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Add custom CSS for the dots and wave animation
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .custom-dots li button:before {
        color: #007bff !important;
        font-size: 10px;
      }
      
      .custom-dots li.slick-active button:before {
        color: #0056b3 !important;
      }
      
      @media (max-width: 768px) {
        .slick-prev, .slick-next {
          display: block !important;
        }
        .slick-prev {
          left: 10px !important;
          z-index: 10;
        }
        .slick-next {
          right: 10px !important;
          z-index: 10;
        }
      }
      
      @keyframes wave {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Function to prevent video clicks
  const preventVideoClick = (e) => {
    // Stop the event from propagating to the video iframe
    e.stopPropagation();
  };

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        padding: isMobile ? "10px 0px" : "40px 0px",
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
                padding: "0 5px",
                boxSizing: "border-box",
                position: "relative",
              }}
            >
              {!loadingVideos[index] && <CustomSkeleton />}
              <div 
                style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}
                onClick={preventVideoClick}
              >
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
                    width: "98%",
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