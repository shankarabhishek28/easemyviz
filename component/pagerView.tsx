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
  return (
    <Box height={178} width='100%' backgroundColor='white' borderRadius={12} overflow='hidden'>

    <PagerView style={styles.viewPager} initialPage={0} scrollEnabled>
        <View style={[styles.page, { backgroundColor: 'red', borderRadius:12 }]} key="1">
            <Image width={367} height={178} alt='university image' source={require('../assets/images/topUni1.png')} />
            
        </View>
        <View style={[styles.page, { backgroundColor: 'white', borderRadius:12 }]} key="2">
            <Image width={367} height={178} alt='university image' source={require('../assets/images/topUni1.png')} />
            
        </View>
        <View style={[styles.page, { backgroundColor: 'white', borderRadius:12 }]} key="3">
            <Image width={367} height={178} alt='university image' source={require('../assets/images/topUni1.png')} />
            
        </View>
    </PagerView>
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
});
export default PagerViewComp