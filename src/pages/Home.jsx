import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { navCol, txtColor, bgColor, subColor } from '../constant/Colors.jsx';
import Carousel from '../components/Carousel.jsx';
import Client_Logos from '../assets/client_logos/client_logos.png'
import Footer from '../components/Footer.jsx';
import { useMediaQuery } from 'react-responsive';
import { FaYoutube } from "react-icons/fa";
import Video from "../assets/video/radical-herd.mp4"
import VideoSection from '../components/VideoSection.jsx';


const variants = {
    section1: {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    section2: {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    section3: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    },
};



const Home = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // All mobile devices
    const isSmallMob = useMediaQuery({ query: '(max-width: 568px)' }); // smaller mobile devices
    return (
        <div style={{ backgroundColor: navCol, height: '100vh' }}>
            {/* Section 1 */}
            <motion.div
                style={{
                    width: isMobile ? "100%" : '80%',
                    margin: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '1rem',
                    height: '90vh',
                    lineHeight: "250px"
                }}
                className="home-cont"

            >
                <motion.h1 className='big-txt'
                    style={{
                        fontSize: isMobile ? "100px" : '370px',
                        color: txtColor,
                        lineHeight: isSmallMob ? '100px': isMobile ? '250px' : '250px',
                        textTransform: 'uppercase',
                        textAlign: isMobile ? 'center' : ""
                    }}
                    variants={variants.section1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    Lights, Camera, Sound{' '}
                    <span className = "big-txt" style={{ fontSize: isMobile ? "50px" : '250px' }}>and</span>
                </motion.h1>
                <motion.h1 className='big-txt'
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8, delay: 0.5 }
                        },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    style={{
                        fontSize: isMobile ? "100px" : '450px',
                        lineHeight: isMobile ? "55px" : "",
                       
                        color: txtColor,
                        textTransform: 'uppercase',
                        textAlign: "center"
                    }}
                >
                    a whole action
                </motion.h1>
            </motion.div>

            <motion.div
                style={{
                    width: '100%',
                    backgroundColor: bgColor,
                    margin: '2rem auto',
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}
            >
                <VideoSection Video = { Video } isMobile={isMobile}/>


                {/* Section 3 */}
                <motion.div
                    id="#portfolio"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        marginTop: "2rem",
                        width: isMobile ? "90%" : '80%',
                        paddingBottom: "2rem",
                    }}
                    variants={variants.section3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h1 style={{ textAlign: 'center', color: subColor }}>Portfolio</h1>
                    <Carousel  />

                    <div style={{ display: 'flex', flexDirection: isMobile ? "column" : "row", justifyContent: 'space-between', padding: isMobile ? ".5rem" : "2rem"}}>
                        <h1 style={{ width: isMobile ? "100%" : '45%', textAlign: isMobile ? "center" : "", fontSize: isMobile ? "20px" : "", color: navCol, marginBottom: isMobile ? "10px" : "" }}>
                            Digital Advertising in Ghana <span style={{ fontWeight: 'normal' }}>(A fast evolving parts)</span>
                        </h1>
                        <div style={{ width: isMobile ? "100%" : '50%' }}>
                            <p style={{ color: '#fff', lineHeight: "30px" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, expedita facilis! Rerum, mollitia similique, distinctio expedita repellat at quidem tenetur porro officiis provident cumque iste totam maxime deserunt asperiores voluptate.
                            </p>
                        </div>
                    </div>
                </motion.div>


                {/* Section 4 */}
                <div style={{ width: "100%", backgroundColor: "#fff" }}>
                    <motion.div
                        id="#our-cast"
                        style={{
                            display: 'flex',
                            alignContent: 'center',
                            flexDirection: 'column',
                            gap: '2rem',
                            margin: "0% auto",
                            marginTop: "1rem",
                            width: isMobile ? "90%" : '80%',

                        }}
                        variants={variants.section3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <motion.h1 variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8, delay: 0.2 }
                            },
                        }}
                            style={{ textAlign: 'center', color: subColor }}>Our Cast</motion.h1>
                        <img src={Client_Logos} alt="client-logos" />
                    </motion.div>
                </div>
                <Footer />
            </motion.div>
        </div>
    );
};

export default Home;
