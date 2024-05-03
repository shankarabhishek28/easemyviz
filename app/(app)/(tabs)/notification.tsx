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
import { Avatar, Box, Text, View, AvatarFallbackText, AvatarImage, InputIcon, Input, Icon, SearchIcon, InputSlot, InputField, Button, Image, Pressable, ChevronRightIcon, ScrollView, ArrowLeftIcon } from '@gluestack-ui/themed'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { Colors } from '../../../styles/Colors';



type ItemData = {
  id: string;
  title: string;
  time: string; // Assuming img is a require statement, so it can be of any type
};

const DATA: ItemData[] = [
  {
    id: '1',
    title: 'High School Algebra I: Help and Review',

    time: '1 hour ago'
  },
  {
    id: '2',
    title: 'Metabolic Biochemistry for High School',

    time: '21 Aug 2023'


  },
  {
    id: '3',
    title: 'Bacterial Biology Overview',

    time: '13 Aug 2023'


  },
  {
    id: '4',
    title: 'Photography Course',

    time: '13 Aug 2023'


  },
  {
    id: '5',
    title: 'Photography Course',

    time: '13 Aug 2023'


  },
  {
    id: '6',
    title: 'Photography Course',

    time: '13 Aug 2023'


  },
  {
    id: '7',
    title: 'Photography Course',

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
  <Pressable onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Box height={30} width={30} elevation='$3' backgroundColor='white' padding={8} borderRadius={6}>
      <FontAwesome5 name="bell" size={14} color={Colors.primary} />

    </Box>
    
      <Box width='70%'  >
        <Text style={[styles.title, { color: textColor, fontWeight: '600' }]}>{item.title}</Text>
        <Text color='#8D989D' fontSize={12} fontWeight='500' fontFamily='Poppins-Regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Box>

      <Box  >
        <Text fontSize={12} fontFamily='Poppins-Regular' opacity={0.5} color='black'>{item.time}</Text>

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

    <ScrollView backgroundColor='white' width='100%' >
      <Box marginBottom='24%'>
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
    marginBottom: 34,
    padding: 20,
    gap: 16,
    borderRadius: 14,
    height: 88,
    width: '90%',

  },
  title: {

    fontSize: 14,
  },

});