import { Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { useState, useEffect } from 'react';
import CustomAuthInput from '../../component/custom/CustomAuthInput';
import { Link, router } from 'expo-router';
import { useForm } from 'react-hook-form';

import LoginForm from '../../component/auth/LoginForm';
import { Colors } from '../../styles/Colors';
import * as Font from 'expo-font';
import { Text, View, Button, ScrollView, Box, Pressable } from '@gluestack-ui/themed';
import Register from './register';
import { Shadow } from 'react-native-shadow-2';
import Page from './login';
import ForgotPasswordForm from '../../component/auth/ForgotPasswordForm';



const forgetPassword = () => {






    return (
        <Pressable onPress={()=>{router.push('..')}} style={{ backgroundColor: 'rgba(0,0,0,0.7)', flex: 1, position: 'relative', alignItems: 'center', flexDirection: 'column' }}>
            <View style={{ position: 'absolute', bottom: 0, height: '75%', width: '100%', backgroundColor: Colors.background ,borderRadius:20}}>


                    <ForgotPasswordForm />
                

            </View>
        </Pressable>
    );
};

export default forgetPassword;
