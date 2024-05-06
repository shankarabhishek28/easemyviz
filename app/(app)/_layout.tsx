import { View, Text, TurboModuleRegistry } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'

const rootLayout = () => {

  const session = true;



  if (!session) {
    return <Redirect href={'/(auth)/onboard'} />
  }



  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="university-details" options={{ headerShown: false, title: 'news details' }} />

      <Stack.Screen name="(tabs)" />

      <Stack.Screen name="popular-courses" options={{ headerShown: true, title: 'Popular Courses' }} />

      <Stack.Screen name="latest-news" options={{ headerShown: true, title: 'Latest News' }} />

      <Stack.Screen name="news-details" options={{ headerShown: true, title: 'Latest News', presentation:'fullScreenModal', animation:'fade_from_bottom' }} />

      <Stack.Screen name="popular-university" options={{
        headerShown: true, title: 'Universities', headerRight: () => (
          <Ionicons
            name="filter" // Replace "icon-name" with the name of your FontAwesome5 icon
            size={24} // Adjust the size of the icon as needed
            // Customize the color of the icon
            border
            style={{ marginRight: 16 }} // Adjust the margin as needed
          />
        ),
      }} />


    </Stack>

  )
}

export default rootLayout