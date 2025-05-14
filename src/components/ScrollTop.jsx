import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowUp } from "react-icons/fa6";
import { navCol } from '../../utils/constant/Colors';

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    //scroll position of the container
    const handleScroll = () => {
        if (window.scrollY > 30) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {isVisible && (
                <motion.div onClick={scrollToTop}
                    initial={{ opacity: 0, y: '-100%' }}
                    animate={{ opacity: 1, y: '0%' }}
                    exit={{ opacity: 0, y: '-100%' }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        gap: '10px',
                        zIndex: 1000,
                        position: 'fixed',
                        bottom: '30px',
                        right: '30px',
                        background: navCol,
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <FaArrowUp style={{ color: '#fff', fontSize: '16px', alignItems: 'center', justifyContent: 'center' }} />
                </motion.div>
            )}
        </>

    )
}

export default ScrollTop