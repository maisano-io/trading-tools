import React, { useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button, View } from "@aws-amplify/ui-react";
import SideBar from "./SideBar"; // Importing your custom Sidebar component
import logo from "./logo.svg";
import Switch from "react-switch"; // Importing the switch component
import "@aws-amplify/ui-react/styles.css";

function App({ signOut }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View className="App" style={{
      backgroundColor: isDarkMode ? '#222' : '#f7f7f7', // Dark and light mode backgrounds
      color: isDarkMode ? '#fff' : '#333', // Dark and light mode text colors
      height: '100vh', // Set the height of the app to fill the viewport
      overflow: 'hidden', // Prevent content overflow
      position: 'relative', // Position relative for the sliding effect
    }}>
      <View style={{
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Button onClick={toggleSidebar} style={{
          backgroundColor: 'transparent', // Transparent background for the button
          border: 'none', // Remove border
          marginLeft: isSidebarOpen ? '300px' : '0', // Slide to the right based on sidebar state
          transition: 'margin-left 0.3s ease', // Smooth transition effect
        }}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              width: '20px',
              height: '20px',
              verticalAlign: 'middle',
              color: isDarkMode ? '#fff' : '#333', // White color for the menu button in dark mode
            }}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
        <Switch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          onColor="#86d3ff"
          offColor="#f0f0f0"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </View>
      <SideBar isSidebarOpen={isSidebarOpen} />
    </View>
  );
}

export default withAuthenticator(App);
