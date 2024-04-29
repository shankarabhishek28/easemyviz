import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'

const rootLayout = () => {

  const session = false;


 
  if(!session){
      return <Redirect href={'/(auth)/onboard'} />
  }



  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}

export default rootLayout