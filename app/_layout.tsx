import { Slot } from 'expo-router'
import { useState, useEffect } from 'react'
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import {  SafeAreaProvider } from 'react-native-safe-area-context'
import * as Font from 'expo-font';
import { Provider } from 'react-redux'
import { store } from '../store'
const appLayout = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Load the Poppins font asynchronously
    const loadFont = async () => {
      await Font.loadAsync({
        'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
        'Poppins-ExtraBold': require('../assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null; // Return null while font is loading
  }

  return (
    <Provider store={store}>

    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <Slot />
      </GluestackUIProvider>
    </SafeAreaProvider>
    </Provider>

  )
}

export default appLayout