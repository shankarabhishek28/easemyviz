import React from 'react'
import { Stack } from 'expo-router'

const authLayout = () => {

  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name='onboard' />
      <Stack.Screen name='login' />
      <Stack.Screen name='register' />
      <Stack.Screen name='forgetPassword' options={{presentation:'transparentModal',animation:'fade_from_bottom'}} />
      <Stack.Screen name='verificationPage' options={{presentation:'transparentModal',animation:'fade'}}/>

    </Stack>
  )
}

export default authLayout