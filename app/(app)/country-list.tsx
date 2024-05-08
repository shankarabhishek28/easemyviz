import React from 'react'
import { FlatList } from 'react-native'
import {View, Text, Box, Divider, HStack,Image,Pressable } from '@gluestack-ui/themed'

import {router} from 'expo-router'

const page = () => {

  const data = [
    {
      id:1,
      name:"Germany",
      img:require('../../assets/images/germany.png')
    },
    {
      id:2,
      name:"usa",
      img:require('../../assets/images/usa.png')
    },
    {
      id:3,
      name:"United Kingdom",
      img:require('../../assets/images/Aus.png')
    },
    {
      id:4,
      name:"Canada",
      img:require('../../assets/images/canada.png')
    },
  ]

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <FlatList data={data} keyExtractor={(_,index)=>index.toString()} renderItem={({item})=>(
        <Pressable onPress={()=>router.push({pathname:'/popular-university',params:{country:item.name}})} $active-bg='$secondary300' justifyContent='center' gap={5}  >
          <HStack gap={10} alignItems='center' px={10} py={20} >
            <Image alt="country" source={item.img} style={{width:40,height:40}} />
            <Text fontSize={'$lg'} bold>{item.name}</Text>
          </HStack>
          <Divider />
        </Pressable>
      )} />
    </View>
  )
}

export default page