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
import { useState } from "react"; 
import { Menu, MenuItem } from '@aws-amplify/ui-react';
import { SideBar } from './ui-components';

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
      <View style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
      <div style={{
        position: 'fixed',
        top: 0,
        left: isSidebarOpen ? 0 : '-300px', 
        width: '300px',
        height: '100%',
        backgroundColor: '#f0f0f0',
        transition: 'left 0.3s ease-in-out',
        boxShadow: '2px 0 10px rgba(0, 0, 0, 0.2)',
      }}>
        {/* Sidebar content */}
        {isSidebarOpen && (
          <ul style={{ listStyle: 'none', padding: '1rem' }}>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
            <li>Option 5</li>
          </ul>
        )}
      </div>
    </View>
  );
}

export default withAuthenticator(App);
