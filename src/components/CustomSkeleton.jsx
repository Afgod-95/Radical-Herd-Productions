import PropTypes from 'prop-types'
const CustomSkeleton = ({ height }) => {
  return (
    <div
      style={{
        width: "100%",
        height: height | "200px",
        backgroundColor: "#0000",
        position: "relative",
        overflow: "hidden",
        marginBottom: "10px",
        borderRadius: "20px"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(90deg, transparent, rgba(47, 46, 46, 0.4), transparent)",
          animation: "wave 1.5s infinite",
        }}
      />
    </div>
  );
};
CustomSkeleton.propTypes = {
  height: PropTypes.number
};
export default CustomSkeleton