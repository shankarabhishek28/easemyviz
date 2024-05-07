import { Dimensions, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Shadow } from 'react-native-shadow-2'
import { useForm } from 'react-hook-form';
import { Link, router } from 'expo-router';
import { Text, View, Checkbox, CheckboxIndicator, ScrollView, CheckboxIcon, Box, CheckboxGroup, CheckboxLabel, CheckIcon, HStack, Button } from '@gluestack-ui/themed';
import ForgetPassword from '../../app/(auth)/forgetPassword';
import CustomAuthInput from '../../component/custom/CustomAuthInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../styles/Colors';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { signInWIthEmail } from '../../store/slice/authSlice';



const Register = () => {
  const [values, setValues] = useState(["Illustration"])
  const handleRegister = () => {
    Keyboard.dismiss();
    router.push('/(auth)/verificationPage'); // Navigate to the forget password screen
  };



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


  const onPressRegister = () => {
    dispatch(signInWIthEmail("user"));
    router.push('/(app)/(tabs)/')
  }




  return (






    <ScrollView flex={1} showsHorizontalScrollIndicator={false} width='100%' height='70%' backgroundColor='white' marginTop='10%' borderTopRightRadius={20} borderTopLeftRadius={20} padding={24} >
      <Box display='flex' height={500} width='100%' flexDirection='column' gap={24}>
        <Box>
          <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', fontWeight: '700' }}>Create Your Account</Text>
          <Text style={{ marginTop: 6.2, color: '#9EA1AE', fontSize: 12 }}>Make sure your account stays secure</Text>
        </Box>

        <Box gap={20}>

          <View>
            <Text color='#090D20' fontSize={14} fontFamily='Poppins-Regular' fontWeight='700' marginBottom={4}>Username</Text>
            <CustomAuthInput
              control={control}
              errors={{}}
              keyboardType='default'
              label='name'
              name='name'
              placeholder='Enter your name'
              type='text'
            />
          </View>
          <View>
            <Text color='#090D20' fontSize={14} fontFamily='Poppins-Regular' fontWeight='700' marginBottom={4} marginTop={8}>Email Address</Text>
            <CustomAuthInput
              control={control}
              errors={{}}
              keyboardType='default'
              label='Email'
              name='email'
              placeholder='Enter your email'
              type='text'
            />
          </View>
          <View>
            <Text color='#090D20' fontSize={14} fontFamily='Poppins-Regular' fontWeight='700' marginTop={8}>Password</Text>
            <CustomAuthInput errors={{}} keyboardType='default' type='password' label={'Password'} placeholder={'Enter your password'} control={control} name={'password'} />

          </View>

        </Box>
        <Button onPress={onPressRegister} bg={Colors.primary} alignSelf='center' height={52} width={335} borderRadius={28} mt='6%'><Text color='white'>Register</Text></Button>

        <Text alignSelf='center' textDecorationLine='underline' fontSize={12} fontFamily='Poppins-Regular' color='#25388D'>
          Agree to Terms & conditions
        </Text>

      </Box>
    </ScrollView>



  )
}

export default Register