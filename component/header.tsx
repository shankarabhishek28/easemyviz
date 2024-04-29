import React from 'react'
import { Avatar, Box, Text, View, AvatarFallbackText, AvatarImage, InputIcon, Input, Icon, SearchIcon, InputSlot, InputField, Button, Image, Pressable, ChevronRightIcon, ScrollView } from '@gluestack-ui/themed'

const Header = () => {
  return (
    <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
    <Text fontSize={20} fontWeight='700' fontFamily='Poppins-Regular' >Welcome Alex</Text>
    <Avatar>
        <AvatarFallbackText>SS</AvatarFallbackText>
        <AvatarImage
            alt='a man'
            source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            }}
        />
    </Avatar>
</Box>
  )
}

export default Header