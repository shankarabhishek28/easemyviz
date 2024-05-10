import React from 'react'
import { View, Text, Box, Icon, EditIcon, ScrollView, Avatar, AvatarFallbackText, AvatarImage, Pressable, GlobeIcon, ChevronRightIcon, PhoneIcon, SettingsIcon, CloseCircleIcon } from '@gluestack-ui/themed'
import { Image, Dimensions } from 'react-native'
import { Colors } from '../../../styles/Colors'
import { router } from 'expo-router'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store'
import { signout } from '../../../store/slice/authSlice'
import { FontAwesome5 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
const page = () => {

    const dispatch = useDispatch<AppDispatch>()

    const onLogoutPress = () => {
        dispatch(signout())
    }
    const screenWidth = Dimensions.get('window').width;

    // Calculate the left position for centering the image
    const leftPosition = screenWidth / 2 - 80;
    return (


        // <ScrollView style={{ backgroundColor: "white", flex: 1 }}>





        // </ScrollView>
        <View flex={1} backgroundColor='#FAFAFA'>
            <Box backgroundColor={Colors.primary} flex={3} alignItems='center' justifyContent='center'>
                {/* <Image alt="statue of liberty" style={{ height: '100%', width: '100%' }} source={require('../../../assets/images/libertyy.jpg')} /> */}
                <Pressable flex={1} alignItems='center' justifyContent='center' mb={46}>
                    <Image alt="statue of liberty" style={{ height: 46, width: 46 }} source={require('../../../assets/images/drop.png')} />
                    <Text fontFamily='Poppins-Medium' color='white' fontSize={22}>Add Profile Picture</Text>
                    <Text textAlign='center' fontSize={12} fontFamily='Poppins-Regular' color='#D7D7D7'>Make your profile noticable by adding profile picture to your account!</Text>
                </Pressable>


            </Box>
            {/* <FontAwesome5 position='absolute' name='edit' size={24}  top={200} right={16} solid /> */}

            <Box flex={4.8} gap={16} mb={28}>
                <Box flexDirection='row'>
                    <Image
                        style={{ position: 'absolute', top: -75, height: 140, width: 140, borderRadius: 100, borderColor: 'white', borderWidth: 4, zIndex: 10, left: 20 }}
                        alt='a man'
                        source={{
                            uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                        }}
                    />
                    <Pressable onPress={() => router.push('/(app)/add-profile-popup')} backgroundColor={Colors.primary} height={48} width={48} padding={8} borderRadius={50} borderWidth={3} borderColor='white' alignItems='center' justifyContent='center' marginTop={18} marginLeft={120} zIndex={12}>
                        <AntDesign name="edit" size={20} color="white" />
                    </Pressable>
                    <Box alignItems='center' zIndex={20} ml={40}>
                        <Text fontFamily='Poppins-Bold' fontSize={24}>Leo Dev</Text>
                        <Text fontSize={14} fontFamily='Poppins-Regular' opacity={0.7}>leodev@gmail.com</Text>
                    </Box>
                </Box>


                <Box position='absolute' backgroundColor='#FAFAFA' width='100%' height={26} borderRadius={12} top={-16}>

                </Box>

                <Pressable elevation={3} borderRadius={12} mr={20} ml={20} backgroundColor='white' flexDirection='row' justifyContent='space-between' padding={16} alignItems='center'>
                    <Box flexDirection='row' gap={14}>
                        <AntDesign name="edit" size={20} color={Colors.primary} />

                        <Text fontFamily='Poppins-SemiBold'>Edit Profile</Text>
                    </Box>
                    <AntDesign name="right" size={16} color='black' />

                </Pressable>
                <Pressable elevation={3} borderRadius={12} mr={20} ml={20} backgroundColor='white' flexDirection='row' justifyContent='space-between' padding={16} alignItems='center'>
                    <Box flexDirection='row' gap={14}>
                        <AntDesign name="customerservice" size={20} color={Colors.primary} />

                        <Text fontFamily='Poppins-SemiBold'>Customer Service</Text>
                    </Box>
                    <AntDesign name="right" size={16} color='black' />

                </Pressable>
                <Pressable elevation={3} borderRadius={12} mr={20} ml={20} backgroundColor='white' flexDirection='row' justifyContent='space-between' padding={16} alignItems='center'>
                    <Box flexDirection='row' gap={14}>
                        <FontAwesome5 name='shield-alt' size={20} color={Colors.primary} />

                        <Text fontFamily='Poppins-SemiBold'>Privacy Policy</Text>
                    </Box>
                    <AntDesign name="right" size={16} color='black' />

                </Pressable>
                <Pressable onPress={()=>router.push('/(app)/logout-popup')} elevation={3} borderRadius={12} mr={20} ml={20} backgroundColor='white' flexDirection='row' justifyContent='space-between' padding={16} alignItems='center'>
                    <Box flexDirection='row' gap={14}>
                        <AntDesign name="logout" size={20} color={Colors.primary} />

                        <Text fontFamily='Poppins-Regular' color={Colors.primary}>Log Out</Text>
                    </Box>
                    <AntDesign name="right" size={16} color='black' />

                </Pressable>


            </Box>
        </View>


    )
}

export default page