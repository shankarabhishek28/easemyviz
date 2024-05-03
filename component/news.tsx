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
import { Colors } from '../styles/Colors';
import { router } from 'expo-router';


type ItemData = {
    id: string;
    title: string;
    img: any;
    time:string; // Assuming img is a require statement, so it can be of any type
};

const DATA: ItemData[] = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: require('../assets/images/course1.png'),
        time:'1 hour ago'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: require('../assets/images/course1.png'),
        time:'21 Aug 2023'


    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: require('../assets/images/course1.png'),
        time:'13 Aug 2023'


    },
];


type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
    <Pressable onPress={()=>router.push('/(app)/news-details')} style={[styles.item, { backgroundColor }]}>
        <Image width={139} height={114} borderRadius={8} alt='course image' source={item.img} />
        <Box justifyContent='space-around'>
            <Box>
                <Text fontSize={12}>Lorem</Text>
                <Text style={[styles.title, { color: textColor, fontWeight: '600' }]}>{item.title.length > 11 ? `${item.title.substring(0, 28)}` : item.title}</Text>
                <Text style={[styles.title, { color: textColor, fontWeight: '600' }]}>{item.title.length > 11 ? `${item.title.substring(28, 42)}...` : item.title}</Text>

            </Box>

            <Box flexDirection='row' alignItems='center' gap={0} justifyContent='space-between'>
                <Box flexDirection='row' alignItems='center' gap={8}>
                    <FontAwesome5 name="clock" size={14} color='#BCC7D1' />
                    <Text fontSize={12} fontFamily='Poppins-Regular' opacity={0.5} color='black'>{item.time}</Text>
                </Box>
                <Box flexDirection='row' alignItems='center' gap={8}>
                    <FontAwesome5 name="comment" size={14} color='#BCC7D1' />
                    <Text fontSize={12} fontFamily='Poppins-Regular' opacity={0.5} color='black'>425</Text>
                </Box>


            </Box>
        </Box>



    </Pressable>
);
const News = () => {
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
        <Box gap={16} marginBottom='24%'width='100%'  >
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'   >
                <Text fontSize={16} fontWeight='700'>News</Text>
                <Box flexDirection='row' alignItems='center'>
                    <Button  onPress={()=>router.push('/(app)/latest-news')} variant='link'><Text fontSize={12} fontWeight='500' color={Colors.primary} >See All</Text><Icon as={ChevronRightIcon} color={Colors.primary}  w="$4" h="$4" /></Button>
                    
                </Box>
            </Box>
            <FlatList
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />

        </Box>








    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,

    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 12,
        gap: 16,
        borderRadius: 14,
        height: 114,
        width: '100%',

    },
    title: {

        fontSize: 16,
    },
    viewNewsr: {
        flex: 1,
    },
    text: {
        fontSize: 20,
    },
});
export default News