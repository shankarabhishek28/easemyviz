import { } from 'react-native'
import React, { useState } from 'react'
import { Shadow } from 'react-native-shadow-2'
import CustomAuthInput from '../custom/CustomAuthInput'
import { useForm } from 'react-hook-form';
import { Link, router } from 'expo-router';

import { Text, ScrollView, View, Checkbox, CheckboxIndicator, CheckboxIcon, CheckboxGroup, CheckboxLabel, CheckIcon, HStack, Button, Box } from '@gluestack-ui/themed';
import ForgetPassword from '../../app/(auth)/forgetPassword';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signInWIthEmail } from '../../store/slice/authSlice';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { Colors } from '../../styles/Colors';


const LoginForm = () => {
    const [values, setValues] = useState<string[]>([]);
    const [termsAgreed, setTermsAgreed] = useState<string[]>([]);

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


    const dispatch = useDispatch<AppDispatch>()

    const onPressLogin = () => {
        dispatch(signInWIthEmail("user"));
        router.push('/(app)/(tabs)/')
    }



    return (


        <ScrollView flex={1} showsHorizontalScrollIndicator={false} width='100%' height='70%' backgroundColor='white' marginTop='10%' borderTopRightRadius={20} borderTopLeftRadius={20} padding={24} >
            <Box display='flex' height={500} width='100%' flexDirection='column' gap={24}>
                <Box>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', fontWeight: '700' }}>Login to Your Account</Text>
                    <Text style={{ marginTop: 6.2, color: '#9EA1AE', fontSize: 12 }}>Make sure that you already have an account</Text>
                </Box>

                <Box gap={20}>
                    <Box gap={16}>
                        <Text color='#090D20' fontSize={14} fontFamily='Poppins-Regular' fontWeight='700' marginBottom={4}>Email Address</Text>
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
                    <Box gap={16}>
                        <Text color='#090D20' fontSize={14} fontFamily='Poppins-Regular' fontWeight='700' marginTop={8} marginBottom={4}>Password</Text>
                        <CustomAuthInput errors={{}} keyboardType='default' type='password' label={'Password'} placeholder={'Enter your password'} control={control} name={'password'} />

                    </Box>
                    <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                        <CheckboxGroup
                            value={values}
                            onChange={(keys) => {
                                setValues(keys)
                            }}
                        >
                            <HStack space="2xl">
                                <Checkbox aria-label='login' value="StayLoggedIn">
                                    <CheckboxIndicator mr="$2">
                                        <CheckboxIcon fontSize={12} as={CheckIcon} />
                                    </CheckboxIndicator>
                                    <CheckboxLabel fontFamily='Poppins-Regular' fontSize={12}>Stay Logged In</CheckboxLabel>
                                </Checkbox>

                            </HStack>
                        </CheckboxGroup>

                        {/* <Button variant="link" onPress={handleForgetPassword}> */}
                        <Link href={'/(auth)/forgetPassword'} asChild>
                            <Text fontSize={12} fontFamily='Poppins-Regular' color='#25388D'> Forget Password? </Text>
                        </Link>
                        {/* </Button> */}

                    </Box>
                </Box>
                
                <Button bg={Colors.primary} onPress={onPressLogin} alignSelf='center' height={52} width={335} borderRadius={28} mt='6%'><Text color='white'>LogIn</Text></Button>

                <Text alignSelf='center' textDecorationLine='underline' fontSize={12} fontFamily='Poppins-Regular' color='#25388D'>
                    Agree to Terms & conditions
                </Text>

            </Box>
        </ScrollView>




     




    )
}

export default LoginForm
