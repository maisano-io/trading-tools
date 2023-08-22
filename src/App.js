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

import { Menu, MenuItem } from '@aws-amplify/ui-react';

function App({ signOut }) {
  return (
    <View className="App">
      <View style={{ padding: '1rem' }}>
        <Menu>
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </Menu>
      </View>
      <View style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
    </View>
  );
}

export default withAuthenticator(App);
