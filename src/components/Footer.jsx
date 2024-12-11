import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { subColor } from '../constant/Colors';
import { useMediaQuery } from 'react-responsive';

const variants = {
    section3: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    },
};


const Footer = () => {


    const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // All mobile devices
    const isSmallMob = useMediaQuery({ query: '(max-width: 568px)' }); // smaller mobile devices
    return (
        <>
            < motion.div
                id="#portfolio"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    gap: '2rem',
                    marginTop: "2rem",
                    width: isMobile ? "90%" : '80%',
                    paddingBottom: "3rem",
                }
                }
                variants={variants.section3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
            >
                <div>
                    <h1 className='big-txt'
                        style={{
                            color: subColor,
                            fontSize: isSmallMob ? "150px" : isMobile ? "200px" : "800px",
                            marginBottom: isMobile ? "10px" : "-2rem"
                        }}
                    >Let's Talk</h1>
                    {/*---------------EMAIL AND PHONE-------------*/}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : "",
                            justifyContent: 'space-between',
                            gap: isMobile ? "1rem" : "",
                            alignContent: "center",
                        }}
                    >
                        <div style={{ textTransform: "uppercase", color: "#fff",}}>
                            <h3
                                style={{
                                    color: "#fff",
                                    marginBottom: ".5rem",
                                    fontSize: isMobile ? "14px" : "",
                                }}
                            >Email:  
                                <a 
                                    href="mailto:info@naaafrica.com" 
                                    className="info"
                                    style={{
                                        fontWeight: "bold",
                                        color: "inherit", // Ensures the text inherits the color from the parent
                                        textDecoration: "none", // Removes underline if you don't want it
                                    }}
                                >
                                      info@naaafrica.com  
                                </a>  
                                <a 
                                    href="mailto:prince.baah-duodu@naaafrica.com" 
                                    className="info"
                                    style={{
                                        fontWeight: "bold",
                                        color: "inherit", // Ensures the text inherits the color from the parent
                                        textDecoration: "none", // Removes underline if you don't want it
                                    }}
                                >
                                     / prince.baah-duodu@naaafrica.com
                                </a>
                            </h3>
                            <h3 style={{ color: "#fff", fontSize: isMobile ? "14px" : "" }}>
                                Call:
                                <a 
                                    href="tel:+233302961016" 
                                    className="info"
                                    style={{
                                        fontWeight: "bold",
                                        color: "inherit", // Ensures the text inherits the color from the parent
                                        textDecoration: "none", // Removes underline if you don't want it
                                    }}
                                >
                                     +233 302 961 016 / 
                                </a> 
                                  
                                <a 
                                    href="tel:+233531014722" 
                                    className="info"
                                    style={{
                                        fontWeight: "bold",
                                        color: "inherit", // Ensures the text inherits the color from the parent
                                        textDecoration: "none", // Removes underline if you don't want it
                                    }}
                                >
                                     +233 531 014 722
                                </a>  
                            </h3>

                        </div>

                        <div style={{ textTransform: "uppercase", color: "#fff" }}>
                            <h3 style={{ color: "#fff", marginBottom: ".5rem", fontSize: isMobile ? "15px" : "" }}>Follow Radical Herd </h3>
                            <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>

                                <Link to="https://www.instagram.com/radicalherdproductions/?hl=en" target='blank' className='info' style={{ fontWeight: 'bold' }}>
                                    <FaInstagram size={isMobile ? 24 : 30} />
                                </Link>
                                <Link className='info' style={{ fontWeight: 'bold' }}>
                                    <FaLinkedin size={isMobile ? 24 : 30} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================COPYRIGHT==================== */}
                <motion.div>
                    <p style={{ color: subColor, textAlign: "center", fontSize: isMobile ? "14px" : "15px", }}>Radical Herd Productions. © All rights reserved.</p>
                </motion.div>
            </motion.div >
        </>


    )
}

export default Footer
