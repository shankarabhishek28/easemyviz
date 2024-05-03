import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import {
    FlatList,

    StatusBar,
    StyleSheet,


} from 'react-native';
import { Avatar, Box, Text, View, AvatarFallbackText, AvatarImage, InputIcon, Input, Icon, SearchIcon, InputSlot, InputField, Button, Image, Pressable, ChevronRightIcon, ScrollView } from '@gluestack-ui/themed'
import PagerView from 'react-native-pager-view';
import { Colors } from '../styles/Colors';


const PagerViewComp = () => {
    const Slides = [
        {
            id: 1,
            img: require('../assets/images/topUni1.png')
        },
        {
            id: 2,
            img: require('../assets/images/topUni1.png')
        },
        {
            id: 3,
            img: require('../assets/images/topUni1.png')
        },
    ]
    const [currentPage, setCurrentPage] = useState<number>(0);

    return (
        <Box height={178} width='100%' backgroundColor='white' borderRadius={12} overflow='hidden'>

            <PagerView style={styles.viewPager} initialPage={0} scrollEnabled onPageSelected={(event) => setCurrentPage(event.nativeEvent.position)}>
                {Slides.map((item) => {
                    return <View key={item.id} style={[styles.page, { backgroundColor: 'red', borderRadius: 12 }]} >
                        <Image width={367} height={178} alt='university image' source={item.img} />

                    </View>
                })}


            </PagerView>
            <Box width='55%' position='absolute' left={16} top={24} padding={0} ><Text fontWeight='600' fontSize={24} color='white' fontFamily='Poppins-Regular'>Top Universities in USA</Text>
                <Box width='55%' top={0}>
                    <Text fontWeight='400' fontSize={16} color='white' fontFamily='Poppins-Regular'>Register now don't miss it</Text></Box>

            </Box>
            <View style={styles.dotContainer}>
                {Slides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentPage === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
        </Box>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,

    },
    item: {
        elevation: 5,
        marginRight: 16,
        borderRadius: 14,
        height: 228,
        width: 228,
        padding: 16,
        marginVertical: 8,

    },
    title: {

        fontSize: 16,
    },
    viewPager: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
    dotContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: 14,
        right: 0,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'gray',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#FFC72C',
    },
});
export default PagerViewComp