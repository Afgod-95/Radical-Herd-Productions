import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React__default, { useState, useEffect, useRef, Suspense } from "react";
import { renderToString } from "react-dom/server";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { B as Box, D as Drawer, T as Typography } from "./assets/vendor_mui-BhLrJi9B.js";
import { Link, useLocation, Routes, Route } from "react-router-dom";
import Slider from "react-slick";
import { FaPhoneSquareAlt, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin, FaArrowUp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import "clsx";
import "./assets/vendor-C0D6Eyxk.js";
import "hoist-non-react-statics";
import "@babel/runtime/helpers/extends";
import "@babel/runtime/helpers/esm/extends";
import "stylis";
import "react-transition-group";
import "react-dom";
const Logo = "/assets/Radical_Logo-FDvDmsXj.png";
const Pattern = "/assets/pattern-GdPzRLv0.png";
const navCol = "#D72328";
const bgColor = "#151516";
const txtColor = "#FFFFFF";
const subColor = "#5F6364";
function CustomDrawer({ open, setOpen }) {
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const sectionIds = ["home", "portfolio", "about", "request-a-quote"];
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 150;
        for (let id of sectionIds) {
          const section = document.getElementById(id);
          if (section) {
            const offsetTop = section.offsetTop;
            const offsetHeight = section.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(id);
              break;
            }
          }
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  const scrollToID = (id) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const isSmallMob = useMediaQuery({ query: "(max-width: 568px)" });
  const DrawerList = /* @__PURE__ */ jsx(
    Box,
    {
      sx: {
        width: "100%",
        height: "100%",
        backgroundColor: navCol,
        color: "#fff",
        overflow: "hidden"
      },
      role: "presentation",
      onClick: toggleDrawer(false),
      children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "flex-start",
            padding: "20px",
            marginTop: "10%"
          },
          children: ["home", "portfolio", "about", "request-a-quote"].map((id) => /* @__PURE__ */ jsx(
            "a",
            {
              href: `#${id}`,
              className: `links ${activeSection === id ? "active-link" : ""}`,
              onClick: () => scrollToID(id),
              children: /* @__PURE__ */ jsx("p", { style: { fontFamily: "Roboto" }, children: id.replace(/-/g, " ").toUpperCase() })
            },
            id
          ))
        }
      )
    }
  );
  return /* @__PURE__ */ jsx(
    Drawer,
    {
      anchor: "right",
      open,
      onClose: toggleDrawer(false),
      PaperProps: {
        sx: {
          width: isSmallMob ? "65%" : "55%"
        }
      },
      children: DrawerList
    }
  );
}
CustomDrawer.propTypes = {
  open: PropTypes.boolean,
  setOpen: PropTypes.boolean
};
const BackDropImage = () => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: Pattern,
      style: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0%",
        right: "0%",
        opacity: 0.05,
        zIndex: "-1"
      }
    }
  );
};
const NavBar = ({ children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTabletOrLaptop = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1440px)" });
  const [isToggled, setIsToggled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleShadow = () => {
        const nav = document.querySelector("nav");
        if (nav) {
          if (window.scrollY > 100) {
            nav.style.boxShadow = "0px 2px 10px rgba(0,0,0,0.2)";
          } else {
            nav.style.boxShadow = "none";
          }
        }
      };
      window.addEventListener("scroll", handleShadow);
      return () => window.removeEventListener("scroll", handleShadow);
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const sectionIds = ["home", "portfolio", "about", "request-a-quote"];
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 150;
        for (let id of sectionIds) {
          const section = document.getElementById(id);
          if (section) {
            const offsetTop = section.offsetTop;
            const offsetHeight = section.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(id);
              break;
            }
          }
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  const toggleDrawer = () => setIsToggled(!isToggled);
  const scrollToID = (id) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "nav",
      {
        style: {
          backgroundColor: navCol,
          color: "#fff",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
          boxSizing: "border-box",
          width: "100%",
          height: isMobile ? 60 : 120
        },
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "space-between",
                justifyItems: "center",
                width: isMobile ? "90%" : "80%",
                height: isMobile ? 60 : 120,
                margin: "auto"
              },
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    onClick: () => {
                      if (typeof window !== "undefined") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    },
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    },
                    children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: Logo,
                        alt: "Radical Herd Logo",
                        style: {
                          width: isMobile ? 50 : 100,
                          height: isMobile ? 50 : 100,
                          cursor: "pointer"
                        }
                      }
                    )
                  }
                ),
                isMobile ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
                  "div",
                  {
                    onClick: toggleDrawer,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                      gap: ".5rem",
                      cursor: "pointer"
                    },
                    children: [
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          style: {
                            width: "30px",
                            height: "3px",
                            background: "#fff",
                            borderRadius: "2px"
                          },
                          animate: {
                            rotate: isToggled ? 45 : 0,
                            y: isToggled ? 5 : 0
                          },
                          transition: { duration: 0.3 }
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          style: {
                            width: "30px",
                            height: "3px",
                            background: "#fff",
                            borderRadius: "2px"
                          },
                          animate: {
                            rotate: isToggled ? -45 : 0,
                            y: isToggled ? -5 : 0
                          },
                          transition: { duration: 0.3 }
                        }
                      ),
                      /* @__PURE__ */ jsx(BackDropImage, {})
                    ]
                  }
                ) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "right",
                        gap: isTabletOrLaptop ? "1.8rem" : "3rem",
                        width: isTabletOrLaptop ? "80%" : "50%",
                        alignItems: "center",
                        color: "white",
                        textTransform: "uppercase"
                      },
                      children: ["home", "portfolio", "about", "request-a-quote"].map((id) => /* @__PURE__ */ jsx(
                        "a",
                        {
                          href: `#${id}`,
                          className: `links ${activeSection === id ? "active-link" : ""}`,
                          onClick: () => scrollToID(id),
                          children: /* @__PURE__ */ jsx("p", { style: { fontFamily: "Roboto" }, children: id.replace(/-/g, " ") })
                        },
                        id
                      ))
                    }
                  ),
                  /* @__PURE__ */ jsx(BackDropImage, {})
                ] })
              ]
            }
          ),
          isMobile && /* @__PURE__ */ jsx(CustomDrawer, { open: isToggled, setOpen: setIsToggled })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { children })
  ] });
};
NavBar.propTypes = {
  children: PropTypes.node.isRequired
};
const videoData = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/mNXn_xkjHDY",
    url: "https://www.youtube.com/mNXn_xkjHDY"
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/U6-0s2ppNrw",
    url: "https://www.youtube.com/U6-0s2ppNrw"
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/UVXtlOSQUCI",
    url: "https://www.youtube.com/UVXtlOSQUCI"
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/uK68ex-oLwA",
    url: "https://www.youtube.com/uK68ex-oLwA"
  },
  {
    id: 5,
    src: "https://www.youtube.com/embed/v7CcGfdOYWk",
    url: "https://www.youtube.com/v7CcGfdOYWk"
  },
  {
    id: 6,
    src: "https://www.youtube.com/embed/7il_uAA7gmY",
    url: "https://www.youtube.com/7il_uAA7gmY"
  },
  {
    id: 7,
    src: "https://www.youtube.com/embed/tSsX1TK7Nk0",
    url: "https://www.youtube.com/tSsX1TK7Nk0"
  },
  {
    id: 8,
    src: "https://www.youtube.com/embed/ocPpwShuhig",
    url: "https://www.youtube.com/ocPpwShuhig"
  },
  {
    id: 9,
    src: "https://www.youtube.com/embed/MUi-X8kllLY",
    url: "https://www.youtube.com/MUi-X8kllLY"
  }
];
const CustomSkeleton = ({ height }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        width: "100%",
        height: height | "200px",
        backgroundColor: "#0000",
        position: "relative",
        overflow: "hidden",
        marginBottom: "10px",
        borderRadius: "20px"
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(90deg, transparent, rgba(47, 46, 46, 0.4), transparent)",
            animation: "wave 1.5s infinite"
          }
        }
      )
    }
  );
};
CustomSkeleton.propTypes = {
  height: PropTypes.number
};
({
  className: PropTypes.string,
  onClick: PropTypes.func
});
({
  className: PropTypes.string,
  onClick: PropTypes.func
});
function SimpleSlider() {
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
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  useEffect(() => {
    const style = document.createElement("style");
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
  const preventVideoClick = (e) => {
    e.stopPropagation();
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        width: "100%",
        margin: "0 auto",
        padding: isMobile ? "10px 0px" : "40px 0px",
        boxSizing: "border-box",
        position: "relative"
      },
      children: /* @__PURE__ */ jsx("div", { ref: sliderRef, children: /* @__PURE__ */ jsx(Slider, { ...settings, children: videoData.map((video, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            padding: "0 5px",
            boxSizing: "border-box",
            position: "relative"
          },
          children: [
            !loadingVideos[index] && /* @__PURE__ */ jsx(CustomSkeleton, {}),
            /* @__PURE__ */ jsx(
              "div",
              {
                style: { position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" },
                onClick: preventVideoClick,
                children: /* @__PURE__ */ jsx(
                  "iframe",
                  {
                    src: `${video.src}?mute=1&controls=0&autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&iv_load_policy=3&playlist=${extractVideoId(video.src)}`,
                    title: `Video ${index + 1}`,
                    frameBorder: "0",
                    allowFullScreen: true,
                    onLoad: () => handleVideoLoad(index),
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "98%",
                      height: "100%",
                      border: "none"
                    }
                  }
                )
              }
            )
          ]
        },
        index
      )) }) })
    }
  );
}
const Client_Logos = "/assets/client_logos-XWUTPngN.png";
const variants$1 = {
  section3: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }
};
const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isSmallMob = useMediaQuery({ query: "(max-width: 568px)" });
  const date = /* @__PURE__ */ new Date();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      id: "request-a-quote",
      style: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        gap: "2rem",
        height: "100%",
        marginTop: "2rem",
        width: isMobile ? "90%" : "80%",
        paddingBottom: "5rem"
      },
      variants: variants$1.section3,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: false, amount: 0.5 },
      children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "h1",
            {
              className: "big-txt",
              style: {
                color: subColor,
                fontSize: isSmallMob ? "30px" : isMobile ? "80px" : "200px",
                marginBottom: isMobile ? "10px" : "2rem",
                textAlign: "center",
                fontFamily: "Roboto"
              },
              children: "Let's Talk"
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: isMobile ? "column" : "",
                justifyContent: "space-between",
                gap: isMobile ? "1rem" : "",
                alignItems: "flex-start"
              },
              children: [
                /* @__PURE__ */ jsxs("div", { style: { color: "#fff", display: "flex", flexDirection: "column", gap: "1.5rem" }, children: [
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "1rem", fontFamily: "Roboto" }, children: [
                    /* @__PURE__ */ jsx(MdOutlineMail, { size: isMobile ? 20 : 30, className: "info" }),
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: ".2rem", flexDirection: "column" }, children: [
                      /* @__PURE__ */ jsx(
                        "a",
                        {
                          href: "mailto:info@naaafrica.com",
                          className: "info",
                          style: {
                            fontWeight: "bold",
                            color: "inherit",
                            // Ensures the text inherits the color from the parent
                            textDecoration: "none"
                            // Removes underline if you don't want it
                          },
                          children: "info@naaafrica.com"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "a",
                        {
                          href: "mailto:prince.baah-duodu@naaafrica.com",
                          className: "info",
                          style: {
                            fontWeight: "bold",
                            color: "inherit",
                            // Ensures the text inherits the color from the parent
                            textDecoration: "none"
                            // Removes underline if you don't want it
                          },
                          children: "prince.baah-duodu@naaafrica.com"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "1rem" }, children: [
                    /* @__PURE__ */ jsx(FaPhoneSquareAlt, { size: isMobile ? 20 : 30, className: "info" }),
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: ".2rem", flexDirection: "column" }, children: [
                      /* @__PURE__ */ jsx(
                        "a",
                        {
                          href: "tel:+233302961016",
                          className: "info",
                          style: {
                            fontWeight: "bold",
                            color: "inherit",
                            // Ensures the text inherits the color from the parent
                            textDecoration: "none"
                            // Removes underline if you don't want it
                          },
                          children: "+233 302 961 016"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "a",
                        {
                          href: "tel:+233531014722",
                          className: "info",
                          style: {
                            fontWeight: "bold",
                            color: "inherit",
                            // Ensures the text inherits the color from the parent
                            textDecoration: "none"
                            // Removes underline if you don't want it
                          },
                          children: "+233 531 014 722"
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { style: { color: "#fff" }, children: [
                  /* @__PURE__ */ jsx("h3", { style: { color: "#fff", marginBottom: ".5rem", fontSize: isMobile ? "15px" : "", fontFamily: "Roboto" }, children: "Follow Radical Herd " }),
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: ".5rem", alignItems: "center" }, children: [
                    /* @__PURE__ */ jsx(Link, { to: "https://www.instagram.com/radicalherdproductions/?hl=en", target: "blank", className: "info", style: { fontWeight: "bold" }, children: /* @__PURE__ */ jsx(FaInstagram, { size: isMobile ? 24 : 30 }) }),
                    /* @__PURE__ */ jsx(
                      Link,
                      {
                        to: "https://www.linkedin.com/company/now-available-africa/",
                        target: "blank",
                        className: "info",
                        style: { fontWeight: "bold" },
                        children: /* @__PURE__ */ jsx(FaLinkedin, { size: isMobile ? 24 : 30 })
                      }
                    )
                  ] })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(motion.div, { children: /* @__PURE__ */ jsxs("p", { style: { color: subColor, textAlign: "center", fontSize: isMobile ? "14px" : "15px", fontFamily: "Roboto" }, children: [
          " © ",
          date.getFullYear(),
          " Radical Herd Productions. All rights reserved."
        ] }) })
      ]
    }
  ) });
};
const VideoSection = ({ Video, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleVideoClick = () => {
    if (Video) {
      window.open(Video, "_blank");
    }
  };
  const getEmbedUrl = (url) => {
    if (!url) return null;
    try {
      const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;
      const match = url.match(youtubeRegex);
      const videoId = match == null ? void 0 : match[1];
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;
      }
    } catch (err) {
      console.error("Invalid YouTube URL:", url, err);
    }
    return null;
  };
  const embedURL = getEmbedUrl(Video);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      style: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      },
      children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "video-container",
          style: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            minHeight: isMobile ? "200px" : "300px"
          },
          onMouseEnter: () => setIsHovered(true),
          onMouseLeave: () => setIsHovered(false),
          children: [
            embedURL ? /* @__PURE__ */ jsx(
              "iframe",
              {
                src: embedURL,
                width: "100%",
                height: isMobile ? "300px" : "600px",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
                allowFullScreen: true,
                style: {
                  border: "none",
                  pointerEvents: "none"
                }
              }
            ) : /* @__PURE__ */ jsx(CustomSkeleton, { height: 500 }),
            Video && /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "video-button",
                initial: { opacity: 0, y: "100%" },
                animate: {
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? "0%" : "100%"
                },
                exit: { opacity: 0, y: "-100%" },
                transition: { type: "spring", stiffness: 100 },
                style: {
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: ".5rem",
                  zIndex: 10,
                  height: "100%",
                  width: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  textAlign: "center",
                  padding: "1rem",
                  fontSize: "1.2rem",
                  cursor: "pointer"
                },
                onClick: handleVideoClick,
                children: [
                  /* @__PURE__ */ jsx(FaYoutube, { size: 50, color: navCol }),
                  /* @__PURE__ */ jsx("p", { children: "Watch video" })
                ]
              }
            )
          ]
        }
      )
    }
  );
};
VideoSection.propTypes = {
  Video: PropTypes.string,
  isMobile: PropTypes.bool.isRequired
};
const variants = {
  section1: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  },
  section2: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  },
  section3: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }
};
const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isSmallMob = useMediaQuery({ query: "(max-width: 568px)" });
  const isTabletOrLaptop = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1440px)" });
  return /* @__PURE__ */ jsxs("div", { style: { backgroundColor: navCol }, children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        id: "home",
        style: {
          width: isMobile ? "100%" : "80%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: isSmallMob ? "20%" : "15%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
          paddingBottom: "10%"
        },
        className: "home-cont",
        children: [
          /* @__PURE__ */ jsxs(
            motion.h1,
            {
              className: "big-txt",
              style: {
                fontSize: isMobile ? "40px" : isTabletOrLaptop ? "90px" : "110px",
                color: txtColor,
                lineHeight: isMobile ? "50px" : isTabletOrLaptop ? "100px" : "130px",
                textTransform: "uppercase",
                textAlign: "center"
              },
              children: [
                "Lights, Camera, Sound",
                " ",
                /* @__PURE__ */ jsx("span", { className: "big-txt", style: { fontSize: isMobile ? "30px" : "50px" }, children: "and" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.h1,
            {
              className: "big-txt",
              variants: {
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.5 }
                }
              },
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: false, amount: 0.8 },
              style: {
                fontSize: isMobile ? "50px" : isTabletOrLaptop ? "90px" : "100px",
                lineHeight: isMobile ? "50px" : isTabletOrLaptop ? "100px" : "130px",
                color: txtColor,
                textTransform: "uppercase",
                textAlign: "center"
              },
              children: "a whole lot of action"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        style: {
          width: "100%",
          backgroundColor: bgColor,
          margin: "0rem auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ jsx(VideoSection, { Video: "https://youtu.be/11DYPkjjPHo", isMobile }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              id: "portfolio",
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                marginTop: "2rem",
                width: isMobile ? "90%" : "80%",
                paddingBottom: "2rem"
              },
              variants: variants.section3,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: false, amount: 0.5 },
              children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h1", { style: { textAlign: "center", color: subColor, fontFamily: "Roboto" }, children: "Portfolio" }),
                /* @__PURE__ */ jsx(SimpleSlider, {}),
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", padding: isMobile ? ".5rem" : "2rem", marginTop: isMobile ? 20 : 10 }, children: [
                  /* @__PURE__ */ jsxs("h1", { style: { fontFamily: "Roboto", width: isMobile ? "100%" : "45%", textAlign: isMobile ? "left" : "", fontSize: isMobile ? "20px" : "", color: navCol, marginBottom: isMobile ? "10px" : "" }, children: [
                    "Digital Advertising in Ghana ",
                    /* @__PURE__ */ jsx("span", { style: { fontWeight: "normal" }, children: "(A fast evolving parts)" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { style: { width: isMobile ? "100%" : "50%", display: "flex", flexDirection: "column", gap: "1rem" }, children: [
                    /* @__PURE__ */ jsx("p", { style: { color: "#fff", lineHeight: "30px", textAlign: "-webkit-match-parent", fontFamily: "Roboto" }, children: "Last week, Now Available Africa and Radical Herd Productions launched our much-awaited documentary - DIGITAL ADVERTISING IN GHANA: A story of fast-evolving parts, at the Black Stars International Film Festival." }),
                    /* @__PURE__ */ jsx("p", { style: { color: "#fff", lineHeight: "30px", fontFamily: "Roboto" }, children: "This documentary charts the evolution of digital advertising in Ghana. Working on the documentary reminded us of how far we have come and how far we need to go." }),
                    /* @__PURE__ */ jsx(Link, { to: "https://www.linkedin.com/pulse/digital-advertising-ghana-story-fast-evolving-parts-gu7nf?utm_source=share&utm_medium=member_ios&utm_campaign=share_via", target: "_blank", className: "read_more", children: /* @__PURE__ */ jsx("p", { children: "Read More" }) })
                  ] })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsx("div", { style: { width: "100%", backgroundColor: "#fff" }, children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              id: "about",
              style: {
                display: "flex",
                alignContent: "center",
                flexDirection: "column",
                gap: "2rem",
                margin: "0% auto",
                marginTop: "1rem",
                width: isMobile ? "90%" : "80%"
              },
              variants: variants.section3,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: false, amount: 0.5 },
              children: [
                /* @__PURE__ */ jsx(
                  motion.h1,
                  {
                    variants: {
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, delay: 0.2 }
                      }
                    },
                    style: { textAlign: "center", color: subColor, fontFamily: "Roboto" },
                    children: "Our Cast"
                  }
                ),
                /* @__PURE__ */ jsx("img", { src: Client_Logos, alt: "client-logos", style: { marginBottom: "1rem" } })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(Footer, {})
        ]
      }
    )
  ] });
};
const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: isVisible && /* @__PURE__ */ jsx(
    motion.div,
    {
      onClick: scrollToTop,
      initial: { opacity: 0, y: "-100%" },
      animate: { opacity: 1, y: "0%" },
      exit: { opacity: 0, y: "-100%" },
      transition: { type: "spring", stiffness: 100 },
      style: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        gap: "10px",
        zIndex: 1e3,
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: navCol,
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
      },
      children: /* @__PURE__ */ jsx(FaArrowUp, { style: { color: "#fff", fontSize: "16px", alignItems: "center", justifyContent: "center" } })
    }
  ) });
};
const NotFound = () => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: navCol,
      height: "100vh",
      textAlign: "center",
      padding: "20px"
      // Added padding for smaller screens
    },
    content: {
      width: "90%",
      // Adjust width for responsiveness
      maxWidth: "500px",
      padding: "20px",
      background: "white",
      borderRadius: "10px",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
    },
    title: {
      fontSize: "2rem",
      // Default font size
      margin: "0",
      color: "#000",
      wordBreak: "break-word"
      // Prevent text overflow
    },
    message: {
      fontSize: "1.2rem",
      color: "#374151",
      margin: "20px 0"
    },
    link: {
      display: "inline-block",
      padding: "10px 20px",
      fontSize: "1rem",
      backgroundColor: navCol,
      color: "white",
      borderRadius: "5px",
      textDecoration: "none",
      transition: "background-color 0.3s ease"
    }
  };
  const responsiveStyles = {
    "@media (max-width: 768px)": {
      title: {
        fontSize: "1rem"
      },
      message: {
        fontSize: "1rem"
      },
      link: {
        padding: "8px 16px",
        fontSize: "0.9rem"
      }
    }
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      style: styles.container,
      children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { y: "-100vh", opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 12,
            bounce: 0.5
          },
          style: { ...styles.content, ...responsiveStyles },
          children: [
            /* @__PURE__ */ jsx(
              motion.h1,
              {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: {
                  type: "spring",
                  stiffness: 150,
                  damping: 12
                },
                style: { ...styles.title, ...responsiveStyles.title },
                children: "404 || This page can’t be reached"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.3
                },
                style: { ...styles.message, ...responsiveStyles.message },
                children: "Check whether there's a typo."
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { scale: 0.8, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.6
                },
                children: /* @__PURE__ */ jsx(Link, { to: "/", style: { ...styles.link, ...responsiveStyles.link }, children: "Go Back Home" })
              }
            )
          ]
        }
      )
    }
  );
};
function useSmoothScroll() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const scrollToID = (id) => {
      const element = document.getElementById(id);
      if (!element) return;
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const headerOffset = 60;
      const offsetPosition = absoluteElementTop - headerOffset;
      const duration = 800;
      let startTime = null;
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      }
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);
        window.scrollTo(0, startPosition + distance * easeProgress);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      requestAnimationFrame(animation);
    };
    const handleLinkClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.substring(1);
      scrollToID(id);
      if (history.pushState) {
        history.pushState(null, null, href);
      } else {
        location.hash = href;
      }
    };
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);
}
const SmoothScroll = () => {
  useSmoothScroll();
  return null;
};
function App() {
  const location2 = useLocation();
  const validRoutes = ["/"];
  const showNavBar = validRoutes.includes(location2.pathname);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3e3);
    return () => clearTimeout(timer);
  }, []);
  const PageLoading = () => {
    return /* @__PURE__ */ jsxs(
      motion.div,
      {
        style: {
          width: "100vw",
          height: "100vh",
          background: navCol,
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        className: "loading",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsx(
            motion.img,
            {
              src: Logo,
              style: {
                width: "300px",
                objectFit: "contain",
                height: "auto"
              },
              alt: "logo",
              initial: { y: 0 },
              animate: {
                y: [0, -20, 0]
              },
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "loop"
              }
            }
          ),
          /* @__PURE__ */ jsx(Typography, { sx: { color: "#fff" }, children: "Please wait while we load the page" })
        ]
      }
    );
  };
  return /* @__PURE__ */ jsx("div", { className: "App", children: isLoading ? /* @__PURE__ */ jsx(PageLoading, {}) : /* @__PURE__ */ jsxs(Fragment, { children: [
    showNavBar && /* @__PURE__ */ jsx(NavBar, {}),
    /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx(PageLoading, {}), children: [
      /* @__PURE__ */ jsx(SmoothScroll, {}),
      /* @__PURE__ */ jsxs(Routes, { children: [
        /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(Home, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
      ] }),
      showNavBar && /* @__PURE__ */ jsx(ScrollTop, {})
    ] })
  ] }) });
}
function render(url, context) {
  return renderToString(
    /* @__PURE__ */ jsx(React__default.StrictMode, { children: /* @__PURE__ */ jsx(App, { url, serverContext: context }) })
  );
}
function preloadData(url) {
  return Promise.resolve({});
}
export {
  preloadData,
  render
};
