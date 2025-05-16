import { useState } from 'react';
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

    // Convert to YouTube embed link if necessary
    const getEmbedUrl = (url) => {
    if (!url) return null;

    try {
        const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;
        const match = url.match(youtubeRegex);
        const videoId = match?.[1];
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
        }
    } catch (err) {
        console.error("Invalid YouTube URL:", url, err);
    }

    return null;
};


    const embedURL = getEmbedUrl(Video);

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
                    minHeight: isMobile ? '200px' : '300px',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {embedURL ? (
                    <iframe
                        src={embedURL}
                        width="100%"
                        height={isMobile ? "300px" : "500px"}
                        allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            border: 'none',
                            borderRadius: '1rem',
                            pointerEvents: 'none'
                        }}
                    />
                ) : (
                    <CustomSkeleton height={500} />
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
