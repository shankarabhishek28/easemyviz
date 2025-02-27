import { Image, TouchableOpacity, Alert } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { useState, useEffect } from 'react';
import CustomAuthInput from '../../component/custom/CustomAuthInput';
import { Link, router } from 'expo-router';
import { useForm } from 'react-hook-form';
import LoginForm from '../../component/auth/LoginForm';
import { Colors } from '../../styles/Colors';
import * as Font from 'expo-font';
import { Text, View, Icon, ArrowLeftIcon,  Avatar, Heading,Button } from '@gluestack-ui/themed';
import OtpInput from 'react-native-animated-otp-input';
import { FontAwesome5 } from '@expo/vector-icons';
import { Pressable } from '@gluestack-ui/themed';



const VerificationPage = () => {






    return (
        <Pressable onPress={()=>{router.push('..')}} backgroundColor='rgba(0,0,0,0.7)' flex={1} position='relative' alignItems='center' flexDirection='column' >
            <View position='absolute' bottom={0} height='75%' width='100%' backgroundColor={Colors.background} borderTopLeftRadius={20} borderTopRightRadius={20} padding={18} >
                <View display='flex' flexDirection='row' alignItems='center' >
                    <Icon as={ArrowLeftIcon} m="$2" w="$8" h="$8" />
                    <Text fontSize={16} fontWeight='700' fontFamily='Poppins-Regular'>Verify Your Account</Text>
                </View>
                <View display='flex'  flexDirection='column' alignItems='center' justifyContent='center' top={42}>



                    <Avatar size="xl" bgColor="#F3F4F9" borderColor="transparent" borderWidth={0} overflow='hidden'>
                        <FontAwesome5 name="user" size={94} color={Colors.primaryDark} solid />
                    </Avatar>
                    <View alignItems='center' mt={10}>
                        <Heading fontSize={16} fontFamily='Poppins-Regular'>Ronald Richards</Heading>
                        <Text fontSize={12} fontFamily='Poppins-Regular' color='#9EA1AE'>ronaldrichard@mail.com</Text>
                    </View>
                    <View backgroundColor='#FFF5DD' width={335} height={70} borderRadius={24} padding={16} top={20}>
                        <Text fontSize={12} color='#F0B212'>We have sent you 6 digits verification code to your email. Please kindly check</Text>

                    </View>


                </View>
                <View alignSelf='center' mt={72} >
                    <OtpInput
                        otpCount={5}
                        autoFocus={false}
                        onCodeFilled={(code: number) => {
                            Alert.alert('Notification', `OTP is ${code}`);
                        }}
                        onCodeChanged={(codes: number) => {
                            console.log({ codes });
                        }}
                    />
                </View>



                <Button mt={20} $active-opacity={0.7} bg={Colors.primary} onPress={()=>{router.replace('..')}} alignSelf={'center'} height={52} width={'80%'} borderRadius={28}><Text color='white'>Verify</Text></Button>

            </View>





        </Pressable>
    );
};

export default VerificationPage;
