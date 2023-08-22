import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { useState } from "react"; // Import useState
import { Menu, MenuItem } from '@aws-amplify/ui-react';
import { SideBar } from './ui-components'; // Import your SideBar component

function App({ signOut }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to track sidebar open/close

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };

  return (
    <View className="App">
      <View style={{ padding: '1rem' }}>
        <Menu>
          <MenuItem onClick={toggleSidebar}>Toggle Sidebar</MenuItem>
          {/* Other menu items */}
        </Menu>
      </View>
      <View style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
      {/* Conditionally render Sidebar based on state */}
      {isSidebarOpen && <SideBar />}
    </View>
  );
}

export default withAuthenticator(App);
