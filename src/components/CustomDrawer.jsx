import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { NavLink } from 'react-router-dom';
import { navCol } from '../constant/Colors';
import { useMediaQuery } from 'react-responsive';

export default function CustomDrawer({ open, setOpen }) {
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    
    const isSmallMob = useMediaQuery({ query: '(max-width: 568px)' }); // smaller mobile devices

    const DrawerList = (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                backgroundColor: navCol,
                color: '#fff',
                overflow: "hidden"
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <div
                style={{
                    width: "100%",
                    display: 'flex',
                    flexDirection: 'column',
                    gap: "1rem",
                    alignItems: 'flex-start',
                    padding: '20px',
                    marginTop: "10%",
                   

                }}
            >
                <NavLink to="/" activeClassName="active" className="links">
                    <p style={{fontFamily: "Roboto" }}>Home</p>
                </NavLink>

                <NavLink to="/about" activeClassName="active" className="links">
                    <p style={{fontFamily: "Roboto" }}>About</p>
                </NavLink>

                <NavLink to="/portfolio" className="links">
                    <p style={{fontFamily: "Roboto" }}>Portfolio</p>
                </NavLink>

                <NavLink to="/request-a-quote" className="links" id="quote">
                    <p style={{fontFamily: "Roboto" }}>Request a Quote</p>
                </NavLink>
            </div>
        </Box>
    );

    return (
        <Drawer
            anchor="right" // Open from the right
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
                sx: {
                    width: isSmallMob ? "65%" : "55%"
                },
            }}
        >
            {DrawerList}
        </Drawer>
    );
}
