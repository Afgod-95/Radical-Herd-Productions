import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaYoutube } from "react-icons/fa";
import { navCol } from '../../utils/constant/Colors';
import CustomSkeleton from './CustomSkeleton';

const VideoSection = ({ bgColor, Video, isMobile }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleVideoClick = () => {
        if (Video) {
            window.open(Video, '_blank');
        }
    };

    useEffect(() => {
        if (Video) {
            const video = document.querySelector('video');
            if (video) {
                video.oncanplaythrough = () => console.log("Video loaded and playing");
                video.onerror = () => console.error("Error loading or playing video");
                video.onended = () => console.log("Video ended");
                video.onpause = () => console.log("Video paused");
                video.onplay = () => console.log("Video started playing");
                video.onseeked = () => console.log("Video seeked");
                video.ontimeupdate = () => console.log("Video time updated");
                video.onvolumechange = () => console.log("Video volume changed");
                video.onwaiting = () => console.log("Video waiting for data");

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
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    borderBottomLeftRadius: isMobile ? "" : '1rem',
                    borderBottomRightRadius: isMobile ? "" : '1rem',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                    minHeight: isMobile ? '200px' : '300px', // Ensures skeleton has space
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
                            width: '100%',
                            height: isMobile ? '100%' : '500px',
                            borderRadius: '1rem'
                        }}
                    >
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                   <CustomSkeleton height = {500} />
                )}

                {Video && (
                    <motion.div
                        className='video-button'
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? '0%' : '100%',
                        }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ type: 'spring', stiffness: 100 }}
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
                            width: '100%',
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

VideoSection.propTypes = {
    bgColor: PropTypes.string.isRequired,
    Video: PropTypes.string,
    isMobile: PropTypes.bool.isRequired,
};

export default VideoSection;

