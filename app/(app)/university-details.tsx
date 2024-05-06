import React from 'react';
import { Image, FlatList } from 'react-native';
import { Box, Button } from '@gluestack-ui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../styles/Colors';
import { Text } from '@gluestack-ui/themed';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

interface ImageData {
  img: any; // You might replace 'any' with a more specific type depending on what type of data 'require' returns.
}

const Page: React.FC = () => {
  const dataAr: ImageData[] = [
    { img: require('../../assets/images/popu2.png') },
    { img: require('../../assets/images/popu3.png') },
    { img: require('../../assets/images/popu-lg-1.png') },
    { img: require('../../assets/images/popu-lg-2.png') },
    { img: require('../../assets/images/popu-lg-1.png') },
    { img: require('../../assets/images/popu1.png') }

  ];

  const renderItem = ({ item }: { item: ImageData }) => (
    <Image style={{
      width: 54, height: 54, marginRight: 12, borderRadius: 12
    }} source={item.img} />
  );

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: Colors.background }}>
      <Box width='100%' height='100%'>
        <Box width='100%' height='35%'>
          <Image style={{ width: '100%', height: '100%' }} alt='university Image' source={require('../../assets/images/popu1.png')} />
        </Box>
        <Box backgroundColor='white' width='100%' height='72%' position='absolute' bottom={0} borderRadius={40} padding={20} gap={24}>
          <Box paddingTop={12}>
            <FlatList
              data={dataAr}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </Box>
          <Box flexDirection='row' justifyContent='space-between'>
            <Text fontSize={24} fontWeight='700'>University Name</Text>
            <Box backgroundColor='rgba(76, 110, 215, 0.25)' alignItems='center' borderRadius={6} justifyContent='center' padding={8}  >
              <Text fontSize={12} color={Colors.primary} opacity={1}>USA</Text>
            </Box>

          </Box>
          <Box gap={12}>
            <Text fontSize={18} fontWeight='600'>Description</Text>
            <Text fontSize={14} fontWeight='400' textAlign='justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse dolor etiam sed ante donec quis sapien. Malesuada rhoncus nullam eleifend lorem egestas mauris massa massa.</Text>
          </Box>
          <Box gap={12}>
            <Text fontSize={18} fontWeight='600'>Information</Text>
            <Box width='85%' gap={16}>
              <Box flexDirection='row' justifyContent='space-between'>
                <Box width='50%' flexDirection='row' alignItems='center' gap={12}>
                  <Feather name="map-pin" size={20} color="black" />
                  <Text>California</Text>

                </Box>
                <Box width='50%' flexDirection='row' alignItems='center' gap={12}>
                  <AntDesign name="book" size={20} color="black" />
                  <Text>Ranking(4/20) </Text>

                </Box>

              </Box>
              <Box flexDirection='row' justifyContent='space-between'>
                <Box width='50%' flexDirection='row' alignItems='center' gap={12}>
                  <FontAwesome5 size={20} name='comment' />
                  <Text>350 reviews</Text>

                </Box>
                <Box width='50%' flexDirection='row' alignItems='center' gap={12}>
                  <Feather name="users" size={20} color="black" />
                  <Text>45 students</Text>

                </Box>

              </Box>



            </Box>

          </Box>
          <Box>
            <Text fontSize={18} fontWeight='600'>Fee Structure</Text>
            <Box flexDirection='row' alignItems='center' justifyContent='space-between'>
              <Text fontSize={18} color={Colors.primary}>$120</Text>
              <Box backgroundColor='rgba(76, 110, 215, 0.25)' alignItems='center' borderRadius={6} justifyContent='center' padding={8} flexDirection='row' gap={8}>
                <Text fontSize={12} color={Colors.primary} opacity={1}>PDF</Text>
                <Feather name="download" size={14} color="black" />
              </Box>
            </Box>
          </Box>
          <Button height={60}><Text color='white'>Apply Now</Text></Button>

        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Page;
