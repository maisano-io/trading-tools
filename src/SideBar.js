import React, { useState } from "react";

const SettingsPage = ({ onSignOut }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Settings</h2>
      <button
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          background: "#333333",
          color: "#ffffff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={onSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

const MainMenu = () => {
  return (
    <ul style={{ listStyle: "none", padding: "1rem", textAlign: "center" }}>
      <li style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>Home</li>
      <li style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>About</li>
      <li style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>Services</li>
      <li style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>Portfolio</li>
      <li style={{ fontSize: "1.2rem" }}>Contact</li>
      <li style={{ marginTop: "1rem", fontSize: "1.2rem", cursor: "pointer" }}>
        Settings
      </li>
    </ul>
  );
};

const SideBar = ({ isSidebarOpen, onSignOut }) => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
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
        borderRadius: "15px", // More rounded edges
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif", // Using Inter font style
      }}
    >
      {/* Sidebar content */}
      {isSidebarOpen && <MainMenu />}

      {/* Show settings page */}
      {showSettings && <SettingsPage onSignOut={onSignOut} />}

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
    </div>
  );
};

export default SideBar;
