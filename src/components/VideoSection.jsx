import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaYoutube } from "react-icons/fa";
import { Skeleton } from '@mui/material'; // Import Skeleton component
import { navCol } from '../constant/Colors';

const VideoSection = ({ bgColor, Video, isMobile }) => {
    const [isHovered, setIsHovered] = useState(false); // State to track hover

    const handleVideoClick = () => {
        if (Video) {
            window.open(Video, '_blank');
        }
    };

    useEffect(() => {
        if (Video) {
            const video = document.querySelector('video');
            if (video) {
                video.oncanplaythrough = () => {
                    console.log("Video loaded and playing");
                };
                video.onerror = () => {
                    console.error("Error loading or playing video");
                };
                video.onended = () => {
                    console.log("Video ended");
                };
                video.onpause = () => {
                    console.log("Video paused");
                };
                video.onplay = () => {
                    console.log("Video started playing");
                };
                video.onseeked = () => {
                    console.log("Video seeked");
                };
                video.ontimeupdate = () => {
                    console.log("Video time updated");
                };
                video.onvolumechange = () => {
                    console.log("Video volume changed");
                };
                video.onwaiting = () => {
                    console.log("Video waiting for data");
                };
                video.load();
                video.play();
            }
        }
    }, [Video]);

    return (
        <motion.div
            style={{
                width: '100%',
                backgroundColor: bgColor,
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            <motion.div
                className='video-container'
                style={{
                    width: isMobile ? "100%" : '80%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    borderBottomLeftRadius: isMobile ? "" : '1rem',
                    borderBottomRightRadius: isMobile ? "" : '1rem',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {Video ? (
                    <video
                        width="100%"
                        height="100%"
                        autoPlay
                        muted
                        loop
                        controls={false}
                        style={{
                            objectFit: "cover",
                        }}
                    >
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <Skeleton 
                        variant="rectangular" 
                        animation="wave" 
                        style={{
                            width: '100%',
                            height: '300px', // Adjust height based on your design
                            borderRadius: '1rem',
                        }} 
                    />
                )}

                {/* Overlay with "Click to watch video" */}
                {Video && (
                    <motion.div
                        className='video-button'
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? '0%' : '100%',
                        }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                        }}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: ".5rem",
                            borderRadius: '5px',
                            zIndex: 10,
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            textAlign: 'center',
                            padding: '1rem',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                        }}
                        onClick={handleVideoClick}
                    >
                        <FaYoutube size={50} color={navCol} />
                        <p>Watch video</p>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default VideoSection;
