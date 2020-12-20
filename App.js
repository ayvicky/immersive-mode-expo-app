import React, { useEffect } from 'react';
import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import CustomWebView from './src/components/CustomWebView';

// import { NavigationControlsAndroid } from 'expo';
export default function App() {
  useEffect(() => {
    // Update the document title using the browser API
  });
  return (
    <View style={{
      flex: 1,
    }}>
      <StatusBar hidden />
      <CustomWebView />
    </View>
  );
}
