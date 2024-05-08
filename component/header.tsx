import React from 'react'
import { Avatar, Box, Text, View, AvatarFallbackText, AvatarImage, InputIcon, Input, Icon, SearchIcon, InputSlot, InputField, Button, Image, Pressable, ChevronRightIcon, ScrollView } from '@gluestack-ui/themed'
import { router } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons'
import { Colors } from '../styles/Colors'

const Header = () => {
  return (
    <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
      <Text fontSize={20}  fontFamily='Poppins-Bold' >Welcome Gia</Text>
      <Box flexDirection='row' alignItems='center'>
      <Pressable  onPress={()=> router.push('/notification')} mr={22}>
      <FontAwesome5 name='bell' size={26}  color={Colors.primary} solid  />
      <Box position='absolute' width={14} borderRadius={50} backgroundColor='red' alignItems='center' right={-3} top={-2}><Text fontSize={10} color='white'>1</Text></Box>

      </Pressable>
      <Pressable onPress={()=> router.push('/setting')} >
        <Avatar size='sm'>
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


    </Box>
  )
}

export default Header