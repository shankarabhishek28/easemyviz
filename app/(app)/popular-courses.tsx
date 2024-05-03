import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link, router } from 'expo-router'
import { useNavigation } from '@react-navigation/native';

import {
    FlatList,

    StatusBar,
    StyleSheet,


} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { Avatar, Box, Text, View, AvatarFallbackText, AvatarImage, InputIcon, Input, Icon, SearchIcon, InputSlot, InputField, Button, Image, Pressable, ChevronRightIcon, ScrollView,  ArrowLeftIcon } from '@gluestack-ui/themed'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { Colors } from '../../styles/Colors'



type ItemData = {
    id: string;
    title: string;
    img: any;
    time: string; // Assuming img is a require statement, so it can be of any type
};

const DATA: ItemData[] = [
    {
        id: '1',
        title: 'Photography Course',
        img: require('../../assets/images/course1.png'),
        time: '1 hour ago'
    },
    {
        id: '2',
        title: 'Photography Course',
        img: require('../../assets/images/course1.png'),
        time: '21 Aug 2023'


    },
    {
        id: '3',
        title: 'Photography Course',
        img: require('../../assets/images/course1.png'),
        time: '13 Aug 2023'


    },
    {
        id: '4',
        title: 'Photography Course',
        img: require('../../assets/images/course1.png'),
        time: '13 Aug 2023'


    },
    {
        id: '5',
        title: 'Photography Course',
        img: require('../../assets/images/course1.png'),
        time: '13 Aug 2023'


    },
    {
        id: '6',
        title: 'Photography Course',
        img: require('../../assets/images/course1.png'),
        time: '13 Aug 2023'


    },
    {
        id: '7',
        title: 'Photography Course',
        img: require('../../assets/images/course1.png'),
        time: '13 Aug 2023'


    },
];


type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
    <Pressable onPress={()=>router.push('/(app)/course')} style={[styles.item, { backgroundColor }]}>
        <Image width={171} height={114} borderRadius={8} alt='course image' source={item.img} />
        <Box width={154} height={114} gap={4}>
            <Text style={[styles.title, { color: textColor, fontWeight: '600' }]}>{item.title}</Text>
            <Text color='#8D989D' fontSize={10} fontWeight='500' fontFamily='Poppins-Regular'>Adelia Stebli, Charlie Puth</Text>
            <Box flexDirection='row' alignItems='center' gap={10}>
                <FontAwesome5 name="users" size={14} color='#BCC7D1' />
                <Text fontSize={12} fontFamily='Poppins-Regular' opacity={0.5} color='black'>425 students</Text>

            </Box>
            <Button backgroundColor='white' borderWidth={2} borderColor='#E0E0E0'><Text>View Details</Text></Button>

        </Box>




    </Pressable>
);
const page = () => {
    const navigation = useNavigation();

    const [selectedId, setSelectedId] = useState<string>();
    const renderItem = ({ item }: { item: ItemData }) => {


        return (
            <Item

                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor='white'
                textColor='black'
            />
        );
    };

    return (
                
                <ScrollView backgroundColor='white'   width='100%'  padding={24}>
                    <Box  marginBottom='8%'>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled={false}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        extraData={selectedId}
                    />
                    </Box>
                    
                </ScrollView>
        
          
      










    )
}
export default page

const styles = StyleSheet.create({
   
    item: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom:34,
        gap: 16,
        borderRadius: 14,
        height: 114,
        width: '100%',

    },
    title: {

        fontSize: 14,
    },
    viewPopularCourseListr: {
        flex: 1,
    },
    text: {
        fontSize: 20,
    },
});