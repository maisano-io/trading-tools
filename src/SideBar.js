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
  const menuOptions = [
    { text: "Tool 1", link: "#" },
    { text: "Tool 2", link: "#" },
    { text: "Tool 3", link: "#" },
    { text: "Tool 4", link: "#" },
    { text: "Tool 5", link: "#" },
  ];

  return (
    <ul
      style={{
        listStyle: "none",
        padding: "1rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {menuOptions.map((option, index) => (
        <li
          key={index}
          style={{
            marginBottom: "1rem",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          <a
            href={option.link}
            style={{
              textDecoration: "none",
              color: "#333333",
              borderRadius: "5px",
              padding: "0.5rem 1rem",
              border: "1px solid #333333",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            {option.text}
          </a>
        </li>
      ))}
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
        bottom: 0,
        left: isSidebarOpen ? 0 : "-300px",
        width: "300px",
        height: "100%",
        backgroundColor: "#f5f5f5",
        transition: "left 0.3s ease-in-out",
        boxShadow: "2px 0 10px rgba(0, 0, 0, 0.2)",
        color: "#333333",
        borderRadius: "0 0 15px 15px", // Rounded bottom corners
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {isSidebarOpen && <MainMenu />}

      <div
        style={{
          position: "absolute",
          bottom: showSettings ? "-300px" : "20px",
          right: "20px",
          left: "20px", // Add padding on the left side
          width: "260px", // Adjust the width accordingly
          background: "#ffffff",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          padding: "1rem",
          borderRadius: "15px",
          transform: showSettings ? "translateY(100%)" : "translateY(0)",
          transition: "transform 0.3s ease-in-out, bottom 0.3s ease-in-out",
        }}
      >
        <SettingsPage onSignOut={onSignOut} />
      </div>

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
