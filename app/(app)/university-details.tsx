import React, { useEffect } from 'react';
import { Image, FlatList } from 'react-native';
import { Box, Button, ChevronLeftIcon, Icon, ScrollView, StatusBar, View } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../styles/Colors';
import { Text } from '@gluestack-ui/themed';
import {  AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams, useRouter } from 'expo-router';

interface ImageData {
  img: any; 
}

const Page: React.FC = () => {

  const { country } = useLocalSearchParams()

  const dataAr: ImageData[] = [
    { img: require('../../assets/images/popu2.png') },
    { img: require('../../assets/images/popu3.png') },
    { img: require('../../assets/images/popu-lg-1.png') },
    { img: require('../../assets/images/popu-lg-2.png') },
    { img: require('../../assets/images/popu-lg-1.png') },
    { img: require('../../assets/images/popu1.png') }

  ];

  const { top } = useSafeAreaInsets()

  const expoRouter = useRouter();

  useEffect(() => {
    expoRouter.setParams({ title: country as string })
  }, [])

  const renderItem = ({ item }: { item: ImageData }) => (
    <Image style={{
      width: 54, height: 54, marginRight: 12, borderRadius: 12
    }} source={item.img} />
  );

  return (
    // <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: Colors.background }}>


    //   <Box width='100%' height='100%'>
    //     <Box width='100%' height='35%'>
    //       <Image style={{ width: '100%', height: '100%' }} alt='university Image' source={require('../../assets/images/popu1.png')} />
    //       <Button onPress={() => router.push('..')} position={'absolute'} left={0} right={0} top={top+5} backgroundColor='white' width={30} height={40} borderRadius={50} alignItems='center' justifyContent='center' marginLeft={16}>
    //         <Icon as={ChevronLeftIcon} color='black' w="$6" h="$6" />

    //       </Button>

    //     </Box>
    //     <Box backgroundColor='white' width='100%' height='72%' position='absolute' bottom={0} borderRadius={40} padding={20} gap={24}>
    //      




    //         </Box>

    //       </Box>

    //     </Box>
    //   </Box>

    // </SafeAreaView>
    <View flex={1} bg={Colors.background}>
      <StatusBar backgroundColor={'transparent'} barStyle='light-content' translucent />
      <Box position={'relative'} flex={1.5}>
        <Image style={{ width: '100%', height: '100%' }} alt='university Image' source={require('../../assets/images/popu1.png')} />
        <Button onPress={() => router.push('..')} position={'absolute'} left={0} right={0} top={top + 5} backgroundColor='white' width={30} height={40} borderRadius={50} alignItems='center' justifyContent='center' marginLeft={16}>
          <Icon as={ChevronLeftIcon} color='black' w="$6" h="$6" />
        </Button>
      </Box>
      <Box flex={2.5} position='relative'>
        <ScrollView flex={1} bottom={20} bg={Colors.background} borderTopLeftRadius={10} borderTopRightRadius={10} paddingLeft={20} paddingRight={20} paddingTop={10} >
          <Box paddingTop={12}>
            <FlatList
              data={dataAr}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </Box>

          <Box mt={20} flexDirection='row' justifyContent='space-between'>
            <Text fontSize={24} fontFamily='Poppins-Bold'>University Name</Text>
            <Box backgroundColor='rgba(76, 110, 215, 0.25)' alignItems='center' borderRadius={6} justifyContent='center' padding={8}  >
              <Text fontSize={12} fontFamily='Poppins-Regular' color={Colors.primary} opacity={1}>USA</Text>
            </Box>
          </Box>
          <Box mt={20} gap={8}>
            <Text fontSize={18} fontFamily='Poppins-SemiBold'>Description</Text>
            <Text fontSize={14} fontFamily='Poppins-Regular' textAlign='justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse dolor etiam sed ante donec quis sapien. Malesuada rhoncus nullam eleifend lorem egestas mauris massa massa.</Text>
          </Box>
          <Box mt={20} gap={12}>
            <Text fontSize={18} fontFamily='Poppins-SemiBold'>Information</Text>
            <Box width='85%' gap={16}>
              <Box flexDirection='row' justifyContent='space-between'>
                <Box width='50%' flexDirection='row' alignItems='center' gap={12}>
                  <Feather name="map-pin" size={20} color="black" />
                  <Text fontFamily='Poppins-Regular' fontSize={14}>California</Text>
                </Box>
                <Box width='50%' flexDirection='row' alignItems='center' gap={12}>
                  <AntDesign name="book" size={20} color="black" />
                  <Text fontFamily='Poppins-Regular' fontSize={14}>Ranking(4/20) </Text>
                </Box>
              </Box>
              <Box flexDirection='row' justifyContent='space-between'>
                <Box width='50%' flexDirection='row' alignItems='center' gap={12}>
                  <FontAwesome5 size={20} name='comment' />
                  <Text fontFamily='Poppins-Regular' fontSize={14}>350 reviews</Text>
                </Box>
                <Box width='50%' flexDirection='row' alignItems='center' gap={12}>
                  <Feather name="users" size={20} color="black" />
                  <Text fontFamily='Poppins-Regular' fontSize={14}>45 students</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        

          <Box mt={20} gap={16} mb={60}>
            <Text fontSize={18} fontFamily='Poppins-SemiBold'>Fee Structure</Text>
            <Box flexDirection='row' alignItems='center' justifyContent='space-between'>
              <Text fontSize={18} color={Colors.primary}>$120</Text>
              <Box backgroundColor='rgba(76, 110, 215, 0.25)' alignItems='center' borderRadius={6} justifyContent='center' padding={8} flexDirection='row' gap={8}>
                <Text fontSize={12} color={Colors.primary} opacity={1}>PDF</Text>
                <Feather name="download" size={14} color="black" />
              </Box>
            </Box>
          </Box>

        </ScrollView>

      </Box>
      <Button mb={16} mx={20}   height={50}><Text color='white'>Apply Now</Text></Button>

    </View>
  );
};

export default Page;
