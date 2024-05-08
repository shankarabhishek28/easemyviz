import { View,Text, Box, Button, Pressable } from '@gluestack-ui/themed'
import React from 'react'
import CustomAuthInput from '../custom/CustomAuthInput'
import { useForm } from 'react-hook-form';
import { Colors } from '../../styles/Colors';
import { router } from 'expo-router';


const ForgotPasswordForm = () => {


    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
    })

    return (
        <Pressable onPress={()=>{}} flex={1} bg={Colors.background} borderTopLeftRadius={20} borderTopRightRadius={20} paddingHorizontal={20} width={"100%"} height={'100%'} paddingVertical={20}>
            <Box flex={1} >

                <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', fontWeight: '700' }}>Forget Password ?</Text>
                <Text style={{ marginTop: 6.2, color: '#9EA1AE', fontSize: 12 }}>Enter your registered email address to receive a secure OTP for resetting your password.</Text>
                <Box mt={20} >
                    <Text color='#090D20' fontSize={18} fontFamily='Poppins-Regular' fontWeight='700' marginBottom={24}>Email Address</Text>

                    <CustomAuthInput

                        control={control}
                        errors={{}}
                        keyboardType='default'
                        label='Email'
                        name='emai'
                        placeholder='Enter your email'
                        type='text'
                    />

                </Box>
            </Box>
            <Button $active-opacity={0.7} bg={Colors.primary} onPress={()=>{router.replace('/verificationPage')}} alignSelf={'center'} height={52} width={'80%'} borderRadius={28}><Text color='white'>Send OTP</Text></Button>
        </Pressable>
    )
}

export default ForgotPasswordForm