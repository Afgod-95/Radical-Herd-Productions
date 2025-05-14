import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { navCol } from '../../utils/constant/Colors';
import { useMediaQuery } from 'react-responsive';

export default function CustomDrawer({ open, setOpen }) {
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sectionIds = ['home', 'portfolio', 'about', 'request-a-quote'];

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

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollToID = (id) => {
        if (typeof window !== 'undefined') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
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
                {['home', 'portfolio', 'about', 'request-a-quote'].map((id) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={`links ${activeSection === id ? 'active-link' : ''}`}
                        onClick={() => scrollToID(id)}
                    >
                        <p style={{ fontFamily: 'Roboto' }}>{id.replace(/-/g, ' ').toUpperCase()}</p>
                    </a>
                ))}
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
