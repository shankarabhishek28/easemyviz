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


type ItemData = {
    id: string;
    title: string;
    img: any; // Assuming img is a require statement, so it can be of any type
};

const DATA: ItemData[] = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Photography Course',
        img: require('../assets/images/course1.png'),
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        img: require('../assets/images/course1.png'),

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        img: require('../assets/images/course1.png'),

    },
];


type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
    <Pressable gap={16} onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Image width={196} height={113} borderRadius={8} alt='course image' source={item.img} />
        <Box>
            <Text style={[styles.title, { color: textColor, fontWeight: '600' }]}>{item.title}</Text>
            <Text color='#8D989D' fontSize={14} fontWeight='500' fontFamily='Poppins-Regular'>Adelia Stebli, Charlie Puth</Text>
            <Box marginTop={8} flexDirection='row' alignItems='center' gap={10}>
                <FontAwesome5 name="users" size={14} color='#BCC7D1' />
                <Text fontSize={12} color='#BCC7D1'>425 students</Text>

            </Box>
        </Box>



    </Pressable>
);
const CourseList = () => {
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
        <Box>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' paddingLeft={20} paddingRight={20} >
                <Text fontSize={16} fontWeight='700'>Popular Courses</Text>
                <Box flexDirection='row' alignItems='center'>
                    <Button variant='link'><Text fontSize={12} fontWeight='500' color={Colors.primary} >View More</Text></Button>
                    <Icon as={ChevronRightIcon} color={Colors.primary} m="$2" w="$4" h="$4" />
                </Box>
            </Box>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
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
    viewCourseListr: {
        flex: 1,
    },
    CourseList: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});
export default CourseList