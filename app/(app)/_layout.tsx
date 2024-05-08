import { View, Text, TurboModuleRegistry } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, Stack } from 'expo-router'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { useAnimatedKeyboard } from 'react-native-reanimated'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { restoreSession } from '../../store/slice/authSlice'

const rootLayout = () => {


const  { loading,userToken} = useSelector((state:RootState)=>state.auth)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=>{
    dispatch(restoreSession())
  },[])

  if(loading){
    return null
  }


  if (!userToken) {
    return <Redirect href={'/(auth)/onboard'} />
  }



  return (
    <Stack initialRouteName='(tabs)' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="university-details" options={{ headerShown: false, title: 'news details' }} />

      <Stack.Screen name="(tabs)" />

      <Stack.Screen name="popular-courses" options={{ headerShown: true, title: 'Popular Courses' }} />

      <Stack.Screen name="latest-news" options={{ headerShown: true, title: 'Latest News' }} />

      <Stack.Screen name="news-details" options={{ headerShown: true, title: 'Latest News', presentation:'fullScreenModal', animation:'fade_from_bottom' }} />

      <Stack.Screen name="country-list" options={{ headerShown: true, title: 'Countries', }} />

      <Stack.Screen name="popular-university" options={{
        headerShown: true, title: 'Universities', headerRight: () => (
          <Ionicons
            name="filter" 
            size={24} 
            border
            style={{ marginRight: 16 }} 
          />
        ),
      }} />


    </Stack>

  )
}

export default rootLayout