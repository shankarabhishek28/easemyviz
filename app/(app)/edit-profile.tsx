import React from 'react'
import { View, Text, Box, Icon, EditIcon, ScrollView, Avatar, AvatarFallbackText, AvatarImage, Pressable, GlobeIcon, ChevronRightIcon, PhoneIcon, SettingsIcon, CloseCircleIcon } from '@gluestack-ui/themed'
import { Image, Dimensions } from 'react-native';
import { Colors } from '../../styles/Colors';
import { router } from 'expo-router';
import { Button } from '@gluestack-ui/themed';
import EditProfile from '../../component/EditProfile';

const page = () => {
  return (
    <EditProfile />

  )
}

export default page