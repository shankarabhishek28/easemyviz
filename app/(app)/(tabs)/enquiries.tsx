import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link, router } from 'expo-router'
import { useNavigation } from '@react-navigation/native';

import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,


} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { Avatar, Box, Text, View, AvatarFallbackText, AvatarImage, InputIcon, Input, Icon, SearchIcon, InputSlot, InputField, Button, Pressable, ChevronRightIcon, ScrollView, ArrowLeftIcon, Divider } from '@gluestack-ui/themed'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { Colors } from '../../../styles/Colors';
import { useLocalSearchParams } from 'expo-router';



type ItemData = {
  id: string;
  title: string;
  img:string;
  time: string; // Assuming img is a require statement, so it can be of any type
};

const DATA: ItemData[] = [
  {
    id: '1',
    title: 'High School Algebra I',
    img:require('../../../assets/images/mainCourse.png'),
    time: 'Just Now'
  },
  {
    id: '2',
    title: 'Metabolic Biochemistry',
    img:require('../../../assets/images/publicspeaking.jpg'),

    time: '21 Aug 2023'


  },
  {
    id: '3',
    title: 'Bacterial Biology Overview',
    img:require('../../../assets/images/photography-course.jpg'),

    time: '13 Aug 2023'


  },
  {
    id: '4',
    title: 'Photography Course',
    img:require('../../../assets/images/mainCourse.png'),

    time: '13 Aug 2023'


  },
  {
    id: '5',
    title: 'Photography Course',
    img:require('../../../assets/images/mainCourse.png'),

    time: '13 Aug 2023'


  },
  {
    id: '6',
    title: 'Photography Course',
    img:require('../../../assets/images/mainCourse.png'),

    time: '13 Aug 2023'


  },
  {
    id: '7',
    title: 'Photography Course',
    img:require('../../../assets/images/mainCourse.png'),

    time: '13 Aug 2023'


  },
];


type ItemProps = {
  item: ItemData;
  title: string | string[];
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor, title}: ItemProps) => (
  <Pressable onPress={()=>router.push('/(app)/chat-room')} style={[styles.item, { backgroundColor }]}>
    <Box flex={1} height='80%' borderRadius={12}  >
      <Image alt='course Image' borderRadius={12}  style={{height:'100%', width:'100%'}} source={item.img} />

    </Box>
    {title ? 
    <Box flex={2}   >
      <Box flexDirection='row' justifyContent='space-between' paddingRight={12}>
        <Text fontSize={10} fontFamily='Poppins-Medium' color={Colors.primary}>Enquiry {item.id}</Text>

        <Text fontSize={10} fontFamily='Poppins-Regular' color={Colors.primary} >{item.time}</Text>

      </Box>
      <Text style={[styles.title, { color: textColor, fontFamily: 'Poppins-Regular' }]}>You have made an enquiry for <Text fontFamily='Poppins-Bold'>{title}</Text></Text>
      <Text color='#8D989D' fontSize={12} fontWeight='500' fontFamily='Poppins-Regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </Box> : 
    <Box flex={2}  >
      <Box flexDirection='row' justifyContent='space-between' alignItems='center' paddingRight={12}>
        <Text fontSize={10} fontFamily='Poppins-Medium' color={Colors.primary}>Enquiry {item.id}</Text>

        <Text fontSize={10} fontFamily='Poppins-Regular' color={Colors.primary}  >{item.time}</Text>

      </Box>
      <Text style={[styles.title, { color: textColor, fontWeight: '600' }]}>{item.title}</Text>
      <Text color='#8D989D' fontSize={12} fontWeight='500' fontFamily='Poppins-Regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </Box>

    }


  






  </Pressable>
);
const page = () => {
  const navigation = useNavigation();
  const { title,imgSrc } = useLocalSearchParams()
  console.log('title-->', title, imgSrc)
  const [selectedId, setSelectedId] = useState<string>();
  const renderItem = ({ item }: { item: ItemData }) => {


    return (
      <Item

        item={item}
        title={title}
        onPress={() => setSelectedId(item.id)}
        backgroundColor='white'
        textColor='black'
      />
    );
  };

  return (

    <ScrollView backgroundColor='white' width='100%' >
      <Box marginBottom='24%' padding={16} >
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
    
    borderBottomWidth:0.5,
    borderBottomColor:'black',
    flexDirection: 'row',
    alignItems:'center',
    marginBottom: 24,
    padding:8,
    gap: 16,
    borderRadius: 14,
    height: 138,
    width: '100%',

  },
  title: {

    fontSize: 14,
  },

});