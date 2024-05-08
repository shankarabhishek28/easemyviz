import React from 'react'
import { Avatar, Box, Text, View, AvatarFallbackText, AvatarImage, InputIcon, Input, Icon, SearchIcon, InputSlot, InputField, Button, Image, Pressable, ChevronRightIcon, ScrollView } from '@gluestack-ui/themed'
import { router } from 'expo-router'

const Header = () => {
  return (
    <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
      <Text fontSize={20} fontWeight='700' fontFamily='Poppins-Regular' >Welcome Gia</Text>
      <Pressable onPress={()=> router.push('/setting')} >
        <Avatar size='md'>
          <AvatarFallbackText></AvatarFallbackText>
          <AvatarImage
            alt='a man'
            source={{
              uri: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
        </Avatar>
      </Pressable>

    </Box>
  )
}

export default Header