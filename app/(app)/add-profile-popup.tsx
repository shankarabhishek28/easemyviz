import React from 'react'
import { View, Text, Box, Icon, EditIcon, ScrollView, Avatar, AvatarFallbackText, AvatarImage, Pressable, GlobeIcon, ChevronRightIcon, PhoneIcon, SettingsIcon, CloseCircleIcon } from '@gluestack-ui/themed'
import { Image, Dimensions } from 'react-native';
import { Colors } from '../../styles/Colors';
import { router } from 'expo-router';
import { Button } from '@gluestack-ui/themed';

const page = () => {
  return (
    <Pressable onPress={()=>{router.push('..')}} style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1,  alignItems: 'center', flexDirection: 'column' }}>
    <View style={{ position: 'absolute', bottom: '40%', height: '25%', width: '80%', backgroundColor: Colors.background ,borderRadius:20,alignItems:'center', justifyContent:'center', padding:12,gap:20}}>
        <Text textAlign='center' fontFamily='Poppins-Bold' fontSize={18}>Do you want to change you profile photo?</Text>
        <Box flexDirection='row' justifyContent='space-between' gap={24}>
            <Button onPress={()=>{router.push('..')}} borderRadius={10} padding={8} height={50} width={102} borderWidth={1} backgroundColor='transparent'><Text fontFamily='Poppins-Regular'>Cancel</Text></Button>
            <Button borderRadius={10} padding={8} height={50} width={102}><Text fontFamily='Poppins-Regular' color='white'>Import</Text></Button>
        </Box>



            
        

    </View>
</Pressable>
  )
}

export default page