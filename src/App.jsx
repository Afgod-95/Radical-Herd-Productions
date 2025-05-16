import { useState, useEffect, Suspense } from "react";
import "./App.css";
import NavBar from "./navigation/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ScrollTop from "./components/ScrollTop";
import NotFound from "./pages/NotFound";
import { navCol } from "../utils/constant/Colors";
import Logo from "../src/assets/Radical_Logo.png";
import { motion } from "framer-motion"; 
import { Typography } from "@mui/material";
import SmoothScroll from "../utils/SmoothScroll";

function App() {
  const location = useLocation();

  // Define routes where the NavBar should be visible
  const validRoutes = ["/"];

  // Check if the current location matches a valid route
  const showNavBar = validRoutes.includes(location.pathname);

  // Loading assets and APIs before the component mounts
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate loading time

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Page loading animation component
  const PageLoading = () => {
    return (
      <motion.div
        style={{
          width: "100vw",
          height: "100vh",
          background: navCol,
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="loading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={Logo}
          style={{
            width: "300px",
            objectFit: "contain",

            height: "auto",
          }}
          alt="logo"
          initial={{ y: 0 }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <Typography sx={{ color: "#fff" }}>Please wait while we load the page</Typography>
      </motion.div>
    );
  };

  return (
    <div className="App">
      {/* Show loading screen until `isLoading` is false */}
      {isLoading ? (
        <PageLoading />
      ) : (
        <>
          {/* Show NavBar if current route matches valid routes */}
          {showNavBar && <NavBar />}
          <Suspense fallback = { <PageLoading />}>
          <SmoothScroll />
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {showNavBar && <ScrollTop />}
          </Suspense>
        </>
      )}
    </div>
  );
}

export default App;
