import React, { useEffect, useState } from 'react'
import { Colors } from '../styles/Colors'
import { Avatar, Box, Text, View, AvatarFallbackText, AvatarImage, InputIcon, Input, Icon, SearchIcon, InputSlot, InputField, Button, Image, Pressable, ChevronRightIcon, ScrollView } from '@gluestack-ui/themed'
import { Dimensions } from 'react-native'
import { Link } from 'expo-router'

interface University {
  id: number;
  title: string;
  img: NodeRequire;
  locationTag: string;
}

const PopularUniversity = () => {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    const calculatedContainerWidth = (screenWidth / 100) * 100; // Adjust 100 with your desired percentage
    setContainerWidth(calculatedContainerWidth);
  }, [screenWidth]);

  const Universities: University[] = [
    {
      id: 1,
      title: 'Photography Course',
      img: require('../assets/images/popu1.png'),
      locationTag: 'USA',
    },
    {
      id: 2,
      title: 'Photography Course',
      img: require('../assets/images/popu3.png'),
      locationTag: 'USA',
    },
    {
      id: 3,
      title: 'Photography Course',
      img: require('../assets/images/popu3.png'),
      locationTag: 'USA',
    },
    {
      id: 4,
      title: 'Photography Course',
      img: require('../assets/images/popu2.png'),
      locationTag: 'USA',
    },
  ];
  return (
    <View gap={24}>
      <Box flexDirection='row' alignItems='center' justifyContent='space-between'>
      <Text fontSize={16} fontWeight='700'>Popular Universities</Text>
      <Box flexDirection='row' alignItems='center'>
        <Link href='/(app)/popular-university'  ><Text fontSize={12} fontWeight='500' color={Colors.primary} >View More</Text></Link>
        <Icon as={ChevronRightIcon} color={Colors.primary} w="$4" h="$4" />
      </Box>
      </Box>

      <Box height={366} width={356} gap={20} padding={16} borderRadius={12} backgroundColor={Colors.primary}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {Universities.slice(0, 2).map((item) => (
            <Box key={item.id} height={156} borderRadius={8} width={156} backgroundColor='$white' gap={6} padding={8}>
              <Image
                width={containerWidth}
                height={100}
                borderRadius={8}
                alt='unioversity Image'
                source={item.img}
              />
              <Text fontWeight='600' fontSize={14}>{item.title}</Text>
            </Box>
          ))}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {Universities.slice(2, 4).map((item) => (
            <Box key={item.id} height={156} borderRadius={8} width={156} backgroundColor='$white' gap={6} padding={8}>
              <Image
                width={containerWidth}
                height={100}
                borderRadius={8}
                alt='unioversity Image'
                source={item.img}
              />
              <Text fontWeight='600' fontSize={14}>{item.title}</Text>
            </Box>
          ))}
        </View>

      </Box>
    </View>
  )
}

export default PopularUniversity