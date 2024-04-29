import { Dimensions, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Shadow } from 'react-native-shadow-2'
import { useForm } from 'react-hook-form';
import { Link, router } from 'expo-router';
import { Text, View, Checkbox, CheckboxIndicator, CheckboxIcon, CheckboxGroup, CheckboxLabel, CheckIcon, HStack, Button } from '@gluestack-ui/themed';
import ForgetPassword from '../../app/(auth)/forgetPassword';
import CustomAuthInput from '../../component/custom/CustomAuthInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Register = () => {
  const [values, setValues] = useState(["Illustration"])
  const handleRegister = () => {
    Keyboard.dismiss();
    router.push('/(auth)/verificationPage'); // Navigate to the forget password screen
  };


  // const loginScheme: ZodType<LoginSchema> = z.object({
  //     email_phone: z.string()
  //         .min(1, { message: 'Email or phone number is required' })
  //         .refine(value => {
  //             // Ensure the value is either an email or a 10-digit number
  //             return /^\d+$/.test(value) || /\S+@\S+\.\S+/.test(value);
  //         }, { message: 'Invalid email or phone number' }),
  //     password: z.string().min(1, { message: "Password is required" }).min(6, { message: "password is too short" }).max(14, { message: "password is too long" }),
  // })

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




  // {{  alignSelf: 'center', width: '100%', bottom: 0, height: '60%', backgroundColor: 'white', borderTopRightRadius: 20, borderTopLeftRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}

  return (




    <View style={{ position: 'absolute', height:'65%', bottom: 0, width: '100%', backgroundColor: 'white', borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingHorizontal: 20 }}>


      <View style={{ marginTop: 24 }}>

        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', fontWeight: '700' }}>Create Your Account</Text>
        <Text style={{ marginTop: 6.2, color: '#9EA1AE', fontSize: 12 }}>Make sure your account stays secure</Text>
        <View style={{ marginTop: 32 }}>
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
          <View marginTop={16} display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
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
                  <CheckboxLabel fontSize={12}>I agree with the terms and conditions by creating
                    an account</CheckboxLabel>
                </Checkbox>

              </HStack>
            </CheckboxGroup>

          </View>


          <Button alignSelf='center' mb={0} marginTop={75} height={52} width={335} borderRadius={28} onPress={handleRegister}><Text color='white'>Create Account</Text></Button>


        </View>

      </View>
    </View>



  )
}

export default Register