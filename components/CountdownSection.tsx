// CountdownSection.tsx
import {CountdownTimes} from "./Countdown"; // Adjust this path if needed

const CountdownSection = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/skyscrapers-sunset.jpg')", // ← correct path from public/
        opacity:"1",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Blur Fade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "400px",
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.52), rgba(255, 255, 255, 0))",
          zIndex:1,
        }}
      />

      {/* Bottom Blur Fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "400px",
          background: "linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0))",
          zIndex: 1,
        }}
      />

      {/* Countdown Centered */}
      <div
        style={{
          zIndex: 2,
          textAlign: "center",
          width: "100%",
        }}
      >
        <CountdownTimes />
      </div>
    </div>
  );
};

export default CountdownSection;
