import { View, Text } from 'react-native'
import React from 'react'
import { Image } from '@gluestack-ui/themed'
import { Box } from '@gluestack-ui/themed'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../styles/Colors'

const page = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: Colors.background }}>
    <Box width='100%'>
        <Image alt='university Image' source={require('../../assets/images/popu1.png')} />
      </Box>
    </SafeAreaView>
  )
}

export default page