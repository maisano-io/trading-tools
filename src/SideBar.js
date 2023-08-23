import React, { useState } from "react";
import SettingsMenu from "./SettingsMenu"; // Make sure to adjust the path

const SideBar = ({ isSidebarOpen }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: isSidebarOpen ? 0 : "-300px",
        width: "300px",
        height: "100%",
        backgroundColor: "#f5f5f5", // Lighter color
        transition: "left 0.3s ease-in-out",
        boxShadow: "2px 0 10px rgba(0, 0, 0, 0.2)",
        color: "#333333", // Text color
        borderRadius: "10px", // Rounded edges
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Sidebar content */}
      {isSidebarOpen && (
        <ul style={{ listStyle: "none", padding: "1rem", textAlign: "center" }}>
          <li style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>Home</li>
          <li style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>About</li>
          <li style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>Services</li>
          <li style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>Portfolio</li>
          <li style={{ fontSize: "1.2rem" }}>Contact</li>
        </ul>
      )}

      {/* Settings icon */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
          fontSize: "24px",
          color: "#333333",
        }}
        onClick={toggleSettings}
      >
        ⚙️
      </div>

      {/* Settings menu */}
      <SettingsMenu isOpen={settingsOpen} onClose={toggleSettings} />
    </div>
  );
};

export default SideBar;
