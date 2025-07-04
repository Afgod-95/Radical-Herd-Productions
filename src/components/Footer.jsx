
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { subColor } from '../../utils/constant/Colors';
import { useMediaQuery } from 'react-responsive';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";


const variants = {
    section3: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    },
};


const Footer = () => {


    const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // All mobile devices
    const isSmallMob = useMediaQuery({ query: '(max-width: 568px)' }); // smaller mobile devices
    const date = new Date()

    return (
        <>
            < motion.div
                id="request-a-quote"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    gap: '2rem',
                    height: '100%',
                    marginTop: "2rem",
                    width: isMobile ? "90%" : '80%',
                    paddingBottom: "5rem",
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
                            fontSize: isSmallMob ? "30px" : isMobile ? "80px" : "200px",
                            marginBottom: isMobile ? "10px" : "2rem",
                            textAlign: 'center',
                            fontFamily: "Roboto"
                        }}
                    >Let&apos;s Talk</h1>
                    {/*---------------EMAIL AND PHONE-------------*/}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : "",
                            justifyContent: 'space-between',
                            gap: isMobile ? "1rem" : "",
                            alignItems: "flex-start",
                        }}
                    >
                        <div style={{ color: "#fff", display: "flex", flexDirection: "column", gap: "1.5rem"}}>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontFamily: "Roboto" }}>
                                <MdOutlineMail size={isMobile ? 20 : 30} className="info" />
                                <div style={{ display: "flex", gap: ".2rem", flexDirection: "column" }}>
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
                                        prince.baah-duodu@naaafrica.com
                                    </a>
                                </div>

                            </div>


                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <FaPhoneSquareAlt size={isMobile ? 20 : 30} className="info" />
                                <div style={{ display: "flex", gap: ".2rem", flexDirection: "column" }}>
                                    <a
                                        href="tel:+233302961016"
                                        className="info"
                                        style={{
                                            fontWeight: "bold",
                                            color: "inherit", // Ensures the text inherits the color from the parent
                                            textDecoration: "none", // Removes underline if you don't want it
                                        }}
                                    >
                                        +233 302 961 016 
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
                                </div>

                            </div>
                        </div>

                        <div style={{  color: "#fff" }}>
                            <h3 style={{ color: "#fff", marginBottom: ".5rem", fontSize: isMobile ? "15px" : "", fontFamily: "Roboto" }}>Follow Radical Herd </h3>
                            <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>

                                <Link to="https://www.instagram.com/radicalherdproductions/?hl=en" target='blank' className='info' style={{ fontWeight: 'bold' }}>
                                    <FaInstagram size={isMobile ? 24 : 30} />
                                </Link>
                                <Link  to = 'https://www.linkedin.com/company/now-available-africa/'
                                    target='blank' className='info' style={{ fontWeight: 'bold' }}
                                >
                                    <FaLinkedin size={isMobile ? 24 : 30} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================COPYRIGHT==================== */}
                <motion.div>
                    <p style={{ color: subColor, textAlign: "center", fontSize: isMobile ? "14px" : "15px", fontFamily: "Roboto" }}> © {date.getFullYear()} Radical Herd Productions. All rights reserved.</p>
                </motion.div>
            </motion.div >
        </>


    )
}

export default Footer
