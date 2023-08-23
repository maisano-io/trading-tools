import React, { useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button, View } from "@aws-amplify/ui-react";
import SideBar from "./SideBar"; // Importing your custom Sidebar component
import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";

function App({ signOut }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
  <View className="App">
    <View style={{ padding: '1rem' }}>
      <Button onClick={toggleSidebar} style={{
        marginLeft: isSidebarOpen ? '300px' : '0', // Slide to the right based on sidebar state
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
          }}
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </Button>
    </View>
    <SideBar isSidebarOpen={isSidebarOpen} />
  </View>
);
}

export default withAuthenticator(App);
