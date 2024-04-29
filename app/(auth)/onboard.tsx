import { SafeAreaView, StatusBar, Image, View,   Pressable } from 'react-native'
import { Text} from '@gluestack-ui/themed';

import React, { SetStateAction, useRef, useState } from 'react'
import PagerView from 'react-native-pager-view'
import { router } from 'expo-router'
import { Colors } from '../../styles/Colors'

const data = [
  {
    img: require('../../assets/images/onBoard1.png'),
  },
  {
    img: require('../../assets/images/onBoard2.png'),
  },
  {
    img: require('../../assets/images/onBoard3.png'),
  },
]

const page = () => {

  const ref = useRef<any>()

  const [currindex, setCurrIndex] = useState<SetStateAction<any> | number>()



  const onNext = () => {

    if (currindex == 2) {
      router.push('/(auth)/login')
    } else {
      ref?.current?.setPage(currindex + 1)
    }
  }





  return (

    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ flex: 1, position: 'relative',backgroundColor:Colors.background }}>


        <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />


        <PagerView scrollEnabled={true} ref={ref} style={{ flex: 1 }} onPageSelected={(e) => {
          setCurrIndex(e?.nativeEvent?.position)
        }}
          initialPage={0}
        >

          {data.map((item, index) => {
            return (
              <View key={index}  >
                <Image source={item.img} style={{ width: '100%', height: 450, borderRadius:16 }} resizeMode='cover' />
                {/* <Text position='absolute' alignSelf='center' mt={476} color='#4C6ED7' >Welcome</Text> */}
                <View style={{ marginTop: 66, }} >
                  <Text style={{ textAlign: 'center', fontSize: 16, marginHorizontal: 9 }}  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo fugit sed repudiandae  pariatur facere quod ipsum quam.</Text>
                </View>
              </View>

            )
          }
          )}


        </PagerView>




        <View style={{ position: 'absolute', bottom: 80, width: '100%', alignItems: 'center', gap: 50 }} >
          <View style={{ width: '30%', height: 8, backgroundColor: '#8DA6F4', borderRadius: 20 }}>
            <View style={{ width: currindex === 0 ? '30%' : currindex === 1 ? '60%' : '100%', height: '100%', backgroundColor: '#4C6ED7', borderRadius: 20 }}>

            </View>
          </View>

          <View style={{ width: '100%', alignItems: 'center', gap: 10 }}>

            <Pressable onPress={onNext} style={{ width: '80%', backgroundColor: Colors.primary, alignItems: 'center', height: 55, justifyContent: 'center', borderRadius: 10 }}>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', }}>{currindex!==2?"Next":"Let’s Make a Journey"}</Text>
            </Pressable>
            {currindex !== 2 ?
              <Pressable onPress={()=>{router.push('/login')}}>
                <Text style={{ color: Colors.primary }}>Skip</Text>
              </Pressable> :
              <View>
                <Text style={{ color: '#4C6ED7' }}></Text>
              </View>
            }

          </View>
        </View>



      </View>


    </SafeAreaView >
  )
}

export default page