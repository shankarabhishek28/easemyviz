import React from 'react'
import { View, Text, Box, Icon, EditIcon, ScrollView, Avatar, AvatarFallbackText, AvatarImage, Pressable, GlobeIcon, ChevronRightIcon, PhoneIcon, SettingsIcon, CloseCircleIcon } from '@gluestack-ui/themed'
import { Image, Dimensions } from 'react-native';
import { Colors } from '../../styles/Colors';
import { router } from 'expo-router';
import { Button } from '@gluestack-ui/themed';

const page = () => {
    return (
        <Pressable onPress={() => { router.push('..') }} style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1, alignItems: 'center', flexDirection: 'column', padding: 12 }}>
            <View style={{ position: 'absolute', bottom: '2%', height: '55%', width: '95%', backgroundColor: Colors.background, borderRadius: 20, alignItems: 'center', justifyContent: 'center', padding: 12, gap: 20 }}>
                <Image style={{ height: 170, width: 300 }} source={require('../../assets/images/del.png')} />
                <Text textAlign='center' fontFamily='Poppins-Bold' fontSize={18}>Are you sure you want to delete your account?</Text>
                
                    <Button onPress={() => { router.push('..') }} alignItems='center' borderRadius={10} padding={8} height={50} width='90%'><Text alignSelf='center' fontFamily='Poppins-Regular' color='white' fontSize={16}>No, Dont delete my acount</Text></Button>
                    <Button alignItems='center' backgroundColor='transparent' borderRadius={10} padding={8} height={50} width='90%'><Text alignSelf='center' fontFamily='Poppins-Regular' color='red' textDecorationLine='underline' fontSize={16}>Yes! delete my acount</Text></Button>

                    {/* <Button alignItems='center' onPress={() => { router.push('..') }} borderRadius={10} padding={8} height={50} width='90%' borderWidth={1} backgroundColor='transparent'><Text fontSize={16} fontFamily='Poppins-Regular'>Yes, Delete my account</Text></Button> */}






            </View>
        </Pressable>
    )
}

export default page