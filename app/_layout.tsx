import { Slot } from 'expo-router'
import { useState, useEffect } from 'react'
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import * as Font from 'expo-font';
const appLayout = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Load the Poppins font asynchronously
    const loadFont = async () => {
      await Font.loadAsync({
        'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null; // Return null while font is loading
  }

  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <Slot />
      </GluestackUIProvider>
    </SafeAreaProvider>

  )
}

export default appLayout