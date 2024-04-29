import React from 'react'
import { Colors } from '../styles/Colors'
import { Avatar, Box, Text, View, AvatarFallbackText, AvatarImage, InputIcon, Input, Icon, SearchIcon, InputSlot, InputField, Button, Image, Pressable, ChevronRightIcon, ScrollView } from '@gluestack-ui/themed'

const PopularUniversity = () => {
  return (
    <View gap={24}>
      <Text fontSize={16} fontWeight='700'>Popular Universities</Text>
      <Box height={356} width={356} gap={20} padding={16} borderRadius={12} backgroundColor={Colors.primary}>
        <Box display='flex' flexDirection='row' gap={10}>
          <Box height={156} borderRadius={8} width={156} backgroundColor='$white' >

          </Box>
          <Box height={156} borderRadius={8}  width={156} backgroundColor='$white' >

          </Box>

        </Box>

        <Box display='flex' flexDirection='row' gap={10}>
          <Box height={156} borderRadius={8}  width={156} backgroundColor='$white' >

          </Box>
          <Box height={156} borderRadius={8}  width={156} backgroundColor='$white' >

          </Box>
        </Box>



      </Box>
    </View>
  )
}

export default PopularUniversity