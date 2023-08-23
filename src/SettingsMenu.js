import React from "react";

const SettingsMenu = ({ isOpen, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: isOpen ? "0" : "-300px",
        right: isOpen ? "0" : "-300px",
        width: "300px",
        height: "300px",
        backgroundColor: "#ffffff",
        transition: "bottom 0.3s ease-in-out, right 0.3s ease-in-out",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        padding: "1rem",
        zIndex: 1000,
      }}
    >
      {/* Settings menu content */}
      <h2>Settings</h2>
      {/* Add your settings options here */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SettingsMenu;
