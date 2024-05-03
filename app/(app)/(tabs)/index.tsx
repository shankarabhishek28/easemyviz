import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {
    FlatList,
    StatusBar,
    StyleSheet,
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { Avatar, Box, Text, View, AvatarFallbackText, AvatarImage, InputIcon, Input, Icon, SearchIcon, InputSlot, InputField, Button, Image, Pressable, ChevronRightIcon, ScrollView } from '@gluestack-ui/themed'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import PagerView from 'react-native-pager-view';
import { Colors } from '../../../styles/Colors';
import Header from '../../../component/header';
import PagerViewComp from '../../../component/pagerView';
import CourseList from '../../../component/courseList';
import FlagButtons from '../../../component/flagButtons';
import PopularUniversity from '../../../component/popularUni';
import News from '../../../component/news';




const page = () => {

    return (

        <SafeAreaView>
            <ScrollView>
                <View gap={24} backgroundColor='white'>
                    <Box paddingLeft={20} paddingRight={20} paddingTop={20} gap={20}>
                        <Header />
                        <Box>
                            <Input borderRadius={10}>
                                <InputSlot pl="$3">
                                    <InputIcon as={SearchIcon} />
                                </InputSlot>
                                <InputField placeholder="Search..." />
                            </Input>
                        </Box>
                        <PagerViewComp />

                        <FlagButtons />
                       
                    </Box>
                    <CourseList />

                    
                    <Box gap={24} display='flex' alignItems='center' >
                        <PopularUniversity />
                    </Box>
                    <Box paddingLeft={20} paddingRight={20} paddingTop={20} gap={20}>
                        <News />
                    </Box>





                </View>
            </ScrollView>

        </SafeAreaView>






    )
}

export default page