import React, { useEffect } from 'react';
import { Image, FlatList } from 'react-native';
import { Box, Button, ChevronLeftIcon, Icon, ScrollView, StatusBar, View } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../styles/Colors';
import { Text } from '@gluestack-ui/themed';
import {  FontAwesome5 } from '@expo/vector-icons';
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
        <ScrollView flex={1} bottom={20} bg={Colors.background} borderTopLeftRadius={10} borderTopRightRadius={10}>
          <Box paddingTop={12}>
            <FlatList
              data={dataAr}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </Box>

          <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ipsa eveniet ut similique libero hic, cum necessitatibus aliquid aut, esse dolorem tempore unde quam voluptas consequatur sequi omnis iusto magnam magni tempora velit id tenetur quas. Voluptatum distinctio soluta est voluptate blanditiis non itaque qui veniam tenetur voluptatem laborum, veritatis possimus error cumque repellendus fuga iure doloremque quo aliquid deleniti assumenda eum aut. Repellendus quia nostrum cumque dolorum reprehenderit odio dolore, labore, voluptatibus amet dolorem eaque suscipit quae quas saepe? Dolorem pariatur impedit similique id distinctio quam, nemo obcaecati eligendi, neque rem reprehenderit sequi eveniet. Facilis illum rerum, tempora ullam nihil ea, aperiam veritatis cum pariatur quidem placeat necessitatibus non fugit voluptatum blanditiis perferendis culpa, recusandae eligendi sed dignissimos doloremque dolores. Blanditiis neque officia, est, rem, numquam quo enim sapiente placeat fuga quaerat iure amet aliquid consectetur exercitationem odit totam provident asperiores veritatis possimus cupiditate reprehenderit voluptates repellendus. Incidunt dicta in sunt adipisci perspiciatis omnis blanditiis saepe harum deleniti quasi sequi repellendus cum officiis, aspernatur voluptatibus eius atque quo repellat accusamus nisi! Modi asperiores ab itaque, iste eligendi dolores quidem aliquam quo eius delectus nulla dolorem? Cum vero minima mollitia veritatis saepe esse, aut itaque illo reprehenderit quasi sit accusantium modi? Illo, numquam nobis? Totam obcaecati quam itaque reiciendis accusamus exercitationem, pariatur amet nulla a sunt quisquam! Animi incidunt adipisci distinctio iure cumque aspernatur. Accusantium repellendus enim architecto repellat aut omnis sunt eius, nam aliquid explicabo ratione doloremque doloribus quas asperiores ab distinctio quibusdam officia rerum modi nesciunt quod deserunt minus culpa sapiente! Error, et! Nisi ut officiis sequi tempora modi, odio a voluptatem repellendus omnis ipsam rerum aperiam dignissimos saepe totam inventore praesentium, et debitis beatae cumque! Nostrum tempore reprehenderit est velit necessitatibus sapiente neque adipisci ex eveniet aut rem odit soluta maxime voluptatum illo repudiandae, voluptatibus perspiciatis. Quo inventore recusandae iusto deserunt. Dignissimos cumque, impedit magnam temporibus eveniet voluptate adipisci aliquam, atque accusantium facilis sunt pariatur doloremque, ex expedita ipsum rem sint consectetur esse id. Distinctio aliquam eligendi consequuntur vel commodi adipisci provident, quaerat ex id eius enim possimus deserunt exercitationem voluptatum soluta! Quisquam distinctio aperiam quod. Vitae consequatur voluptatum fuga voluptatem incidunt tenetur magnam nihil non quam eveniet, distinctio porro eius cum est quasi, labore reiciendis ab, quisquam deleniti eos. Aliquid qui blanditiis saepe quae possimus debitis laboriosam accusamus! Dignissimos, qui pariatur voluptates obcaecati, magni ex a nobis, consequuntur tempore tenetur nemo. Repellat perspiciatis, dolor fugit error rerum ea perferendis, illo recusandae voluptas quaerat, pariatur nulla earum. Officiis ea placeat culpa iusto iste laudantium perspiciatis, dolorem quia esse voluptas adipisci labore numquam mollitia quibusdam laboriosam ducimus autem tempora dolor unde exercitationem? Obcaecati labore nesciunt, facere unde, omnis magni perferendis saepe ut eum asperiores incidunt repellendus fugit error corporis exercitationem quae, animi eius! Totam earum saepe atque tempora numquam quo voluptas incidunt consectetur repellendus sequi impedit, in dolores nostrum, soluta obcaecati. Deleniti ipsa quia est. Quae, ullam sequi minima a fugiat, saepe adipisci corrupti eum nihil officia iste porro, dolorum reprehenderit optio quod deserunt vero? Officia, porro sunt.</Text>

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

        </ScrollView>

      </Box>
      <Button mb={10} mx={10}  height={50}><Text color='white'>Apply Now</Text></Button>

    </View>
  );
};

export default Page;
