import { Image, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import LoginForm from '../../component/auth/LoginForm';
import { Colors } from '../../styles/Colors';
import * as Font from 'expo-font';
import Register from './register';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text, View, Checkbox, CheckboxIndicator, CheckboxIcon, CheckboxGroup, CheckboxLabel, CheckIcon, HStack, Button, Box, ScrollView,  } from '@gluestack-ui/themed';
import CustomAuthInput from '../../component/custom/CustomAuthInput';



const Page = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    // Load the Poppins font asynchronously
    const loadFont = async () => {
      await Font.loadAsync({
        'Poppins-Regular': require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null; // Return null while font is loading
  }

  const handleToggle = () => {
    isLogin ? setIsLogin(isLogin) : setIsLogin(!isLogin)

  };
  const handleToggleForRegister = () => {
    isLogin ? setIsLogin(!isLogin) : setIsLogin(isLogin)

  };

  return (
    <View style={{ backgroundColor: Colors.primary, flex: 1, alignItems: 'center', flexDirection: 'column' }}>
      <StatusBar backgroundColor={'transparent'} translucent barStyle='light-content' />



      <View gap={5} style={{ backgroundColor: Colors.primaryLight, marginTop: 62, alignSelf: 'center', alignItems: 'center', width: 335, height: 183, borderRadius: 24, paddingTop: 24 }}>

        <Text style={{ fontSize: 14, color: '#FFFFFF66', fontFamily: 'Poppins-Regular' }}>Hello, There</Text>
        <Text style={{ fontSize: 24, fontFamily: 'Poppins-Regular', color: Colors.background, fontWeight: "500" }}>Welcome Back</Text>

        <View style={{ alignItems: 'center', backgroundColor: Colors.primaryDark, width: 295, borderRadius: 28 }}>
          <View style={{ flexDirection: 'row', height: 54, width: 288, borderRadius: 10, overflow: 'hidden', alignItems: 'center' }}>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isLogin ? 'white' : Colors.primaryDark, width: 144, height: 46, borderRadius: 28 }} onPress={handleToggle}>
              <Text style={{ color: isLogin ? '#090D20' : '#8D9CE4', fontFamily: 'Poppins-Regular', fontWeight: '700' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isLogin ? Colors.primaryDark : 'white', width: 144, height: 46, borderRadius: 28 }} onPress={handleToggleForRegister}>
              <Text style={{ color: !isLogin ? '#090D20' : '#8D9CE4', fontFamily: 'Poppins-Regular', fontWeight: '700' }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {isLogin ? <LoginForm /> : <Register />}



    </View>
  );
};

export default Page;
