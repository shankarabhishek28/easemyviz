import React from 'react'
import { View, Text, Box, Icon, EditIcon, ScrollView, Avatar, AvatarFallbackText, AvatarImage, Pressable, GlobeIcon, ChevronRightIcon, PhoneIcon, SettingsIcon, CloseCircleIcon } from '@gluestack-ui/themed'
import { Image, Dimensions } from 'react-native';
import { Colors } from '../../styles/Colors';
import { router } from 'expo-router';
import { Button } from '@gluestack-ui/themed';

const page = () => {
  return (
    <Pressable onPress={()=>{router.push('..')}} style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1,  alignItems: 'center', flexDirection: 'column' }}>
    <View style={{ position: 'absolute', bottom: 0, height: '75%', width: '95%', backgroundColor: Colors.background ,borderRadius:20,alignItems:'center', justifyContent:'center', padding:12,gap:20}}>
        <Image style={{height:132, width:132}} source={require('../../assets/images/logout-header.png')} />
        <Text textAlign='center' fontFamily='Poppins-Bold' fontSize={24}>Are you sure you want to Logout?</Text>
        <Text textAlign='center' fontFamily='Poppins-Regular'>You can log back in to your account to browse all the job openings available, are you sure you want to logout?</Text>
        <Box  justifyContent='space-between' gap={24} alignItems='center' width='100%'>
        <Button borderRadius={10} padding={8} height={50} width='100%'><Text fontFamily='Poppins-Regular' color='white'>Logout</Text></Button>

            <Button onPress={()=>{router.push('..')}} width='100%' borderRadius={10} padding={8} height={50}  borderWidth={1} backgroundColor='transparent'><Text fontFamily='Poppins-Regular'>Cancel</Text></Button>
        </Box>



            
        

    </View>
</Pressable>
  )
}

export default page