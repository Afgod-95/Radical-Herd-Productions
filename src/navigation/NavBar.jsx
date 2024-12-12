import React, { useState } from 'react'
import Logo from '../assets/Radical_Logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { navCol } from '../constant/Colors';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import CustomDrawer from '../components/CustomDrawer';

const NavBar = ({ children }) => {
    //add shadow bottom to navbar when scroll height is greater than 
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.querySelector('nav').style.boxShadow = '0px 2px 10px rgba(0,0,0,0.2)';
        } else {
            document.querySelector('nav').style.boxShadow = 'none';
        }
    });

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // All mobile devices

    const [isToggled, setIsToggled] = useState(false);

    const navigate = useNavigate();

    //handle drawer toggle 
    const toggleDrawer = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div>
            <nav
                style={{
                    backgroundColor: navCol,
                    color: '#fff',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 100,
                    boxSizing: 'border-box',
                    width: "100%",
                    height: isMobile ? 60 : 120
                }}

            >

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    justifyItems: 'center',
                    width: isMobile ? "90%" : "80%",
                    height: isMobile ? 60 : 120,
                    margin: 'auto',
                }}>

                    {/* ================LOGO=========================== */}
                    <div
                        onClick={() => {
                          navigate('/')
                        }}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <img src={Logo} alt="Radical Herd Logo"
                            style={{
                                width: isMobile ? 40 : 100,
                                height: isMobile ? 40 : 100,
                                cursor: 'pointer'
                            }}
                        />
                    </div>

                    {/* ================NAV LINKS==================== */}

                    {/* Mobile Menu */}
                    {isMobile ? (
                        <div
                            onClick={toggleDrawer}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignContent: "center",
                                gap: ".5rem",
                                cursor: "pointer",
                            }}
                        >
                            <motion.div
                                style={{
                                    width: "30px",
                                    height: "3px",
                                    background: "#fff",
                                    borderRadius: "2px",
                                    originX: "center",
                                    originY: "center",
                                }}
                                animate={{
                                    rotate: isToggled ? 45 : 0,
                                    y: isToggled ? 5 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            ></motion.div>
                            <motion.div
                                style={{
                                    width: "30px",
                                    height: "3px",
                                    background: "#fff",
                                    borderRadius: "2px",
                                    originX: "center",
                                    originY: "center",
                                }}
                                animate={{
                                    rotate: isToggled ? -45 : 0,
                                    y: isToggled ? -5 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            ></motion.div>
                        </div>
                    ) : (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'right',
                            gap: '3rem',
                            width: "50%",
                            alignItems: 'center',
                            color: "white",
                            textTransform: "uppercase",
                        }}>
                            {/* Mobile Menu */}
                            <NavLink to="/" activeClassName="active" className="links">
                                <p style={{fontFamily: "Roboto" }}>Home</p>
                            </NavLink>



                            <NavLink to="/portfolio" activeClassName="active" className="links">
                                <p style={{fontFamily: "Roboto" }}>Portfolio</p>
                            </NavLink>

                            <NavLink to="/about" activeClassName="active" className="links">
                                <p style={{fontFamily: "Roboto" }}>About</p>
                            </NavLink>

                            

                            <NavLink to="/request-a-quote" activeClassName="active" className="links" id="quote">
                                <p style={{fontFamily: "Roboto" }}>Request a Quote</p>
                            </NavLink>

                        </div>
                    )}
                </div>

                {isMobile && (
                    <CustomDrawer open={isToggled} setOpen={setIsToggled} /> // Pass the correct props
                )}


            </nav>

            <div>{children}</div>
        </div>
    )
}

export default NavBar
