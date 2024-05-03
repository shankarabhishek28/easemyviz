import React, { useState, useEffect } from 'react'
import { View, Text, Box, ScrollView, Button, Avatar, AvatarImage, AvatarFallbackText, Icon, ChevronRightIcon, ChevronLeftIcon } from '@gluestack-ui/themed'
import { Dimensions, Image, StatusBar, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../../styles/Colors';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Timeline from 'react-native-timeline-flatlist';


type DemoData = {
    id: number;
    title: string;
    author: string;
    rating: number;
};
type Data = {
    title: string;
    description: string;

}
const Page: React.FC = () => {
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [containerHeight, setContainerHeight] = useState<number>(0);

    // Demo data array with ratings
    const demoDataArray: DemoData[] = [
        { id: 1, title: 'Photography Course', author: 'Adelia Stebli, Charlie Puth', rating: 4 },



        // Add more data as needed
    ];
    const data = [
        { time: '09:00', title: 'Chapter 1: Camera Basic', description: 'What is DSLR, learn the basic of camera' },
        { time: '10:45', title: 'Chapter 2: Setting', description: 'The best you know your gear, ...' },
        { time: '12:00', title: 'Chapter 3: Light', description: 'Create and set up light source' },
        { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
        { time: '16:30', title: 'Event 5', description: 'Event 5 Description' }
    ]
    const screenWidth = Dimensions.get('window').width;
    const imgHeight = Dimensions.get('window').height * 0.50;
    // useEffect(() => {
    //     setContainerWidth(screenWidth);
    //     setContainerHeight(screenHeight)
    // }, []);

    const { top } = useSafeAreaInsets()

    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: Colors.background }}>
            <StatusBar backgroundColor={'transparent'} barStyle="light-content" />
            <ScrollView flex={1}>
                <View position='relative' h={imgHeight} width='100%'   >
                    {/* <Image width={containerWidth} height={containerHeight} }  alt='course Image' source={require('../../assets/images/mainCourse.png')} /> */}
                    <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/images/mainCourse.png')} />
                    <Button onPress={() => router.push('..')} position={'absolute'} left={0} right={0} top={top + 5} backgroundColor='white' width={30} height={40} borderRadius={50} alignItems='center' justifyContent='center' marginLeft={16}>
                        <Icon as={ChevronLeftIcon} color='black' w="$6" h="$6" />

                    </Button>
                </View>

                <View bottom={10} width='100%' height='65%' backgroundColor='white' borderRadius={12} padding={20}>
                    {demoDataArray.map((item) => (
                        <Box key={item.id} gap={24} marginBottom={20}>
                            <Box flexDirection='row' justifyContent='space-between' >
                                <Box backgroundColor='black' opacity={1} width={72} height={28} alignItems='center' justifyContent='center' borderRadius={8}>
                                    <Text color='white' fontSize={14}>Original</Text>

                                </Box>
                                <Box>
                                    <FontAwesome5 size={24} name='heart' color='black' />
                                </Box>
                            </Box>



                            <Box gap={10}>
                                <Text fontSize={28} fontWeight='700' color='#3A3F4D' fontFamily='Poppins-Regular'>{item.title}</Text>
                                <Text fontFamily='Poppins-Regular' color='#737373'>{item.author}</Text>
                            </Box>
                            <Box flexDirection='row' alignItems='center'>
                                <Box flexDirection='row'>
                                    {[...Array(5)].map((_, index) => (
                                        <FontAwesome5 key={index} name='star' size={20} solid color={index < item.rating ? '#FF8514' : '#ccc'} style={{ marginRight: 5 }} />
                                    ))}
                                </Box>
                                <Box>
                                    <Text >{`${item.rating}/5`}</Text>
                                </Box>
                            </Box>
                            <Box gap={10}>
                                <Text fontSize={18} fontWeight='700' fontFamily='Poppins-Regular'>About This Class</Text>
                                <Text>In this class i’ll explain how you can use principle to make a pretty cool video effect.</Text>
                            </Box>
                            <Box gap={10}>
                                <Text fontSize={18} fontWeight='700' fontFamily='Poppins-Regular'>Schedule</Text>
                                <Box display='flex' flexDirection='row' alignItems='center' gap={10} >
                                    <FontAwesome5 size={16} opacity={0.5} name='calendar' />
                                    <Text opacity={0.7} fontSize={14} >10 Feb - 20 Feb</Text>

                                </Box>
                            </Box>
                            <Box gap={10}>
                                <Text fontSize={18} fontWeight='700' color={Colors.primary} fontFamily='Poppins-Regular'>Skills</Text>
                                <Box display='flex' flexDirection='row' alignItems='center' gap={10} >
                                    <Box backgroundColor='black' opacity={0.8} width={72} height={28} alignItems='center' justifyContent='center' borderRadius={8}>
                                        <Text color='white'>Camera</Text>
                                    </Box>
                                    <Box backgroundColor='black' opacity={0.8} width={72} height={28} alignItems='center' justifyContent='center' borderRadius={8}>
                                        <Text color='white'>Shooting</Text>
                                    </Box>
                                    <Box backgroundColor='black' opacity={0.8} width={72} height={28} alignItems='center' justifyContent='center' borderRadius={8}>
                                        <Text color='white'>Lenses</Text>
                                    </Box>
                                    <Box backgroundColor='black' opacity={0.8} width={72} height={28} alignItems='center' justifyContent='center' borderRadius={8}>
                                        <Text color='white'>Creative</Text>
                                    </Box>

                                </Box>
                            </Box>
                            <Box gap={16}>

                                <Text fontSize={18} fontWeight='700' fontFamily='Poppins-Regular'>Instructor</Text>
                                <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' gap={10}>

                                    <Box display='flex' flexDirection='row' alignItems='center' gap={10} >
                                        <Avatar>
                                            <AvatarFallbackText>SS</AvatarFallbackText>
                                            <AvatarImage
                                                alt='a man'
                                                source={{
                                                    uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                                                }}
                                            />
                                        </Avatar>
                                        <Box><Text fontSize={18} fontWeight='600' fontFamily='Poppins-Regular'>Leo Dev</Text>
                                            <Text opacity={0.7} fontSize={12} fontFamily='Poppins-Regular'>Film Maker</Text></Box>

                                    </Box>
                                    <Icon as={ChevronRightIcon} color='#8D989D' w="$6" h="$6" />

                                </Box>
                                <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' gap={10}>

                                    <Box display='flex' flexDirection='row' alignItems='center' gap={10} >
                                        <Avatar>
                                            <AvatarFallbackText>SS</AvatarFallbackText>
                                            <AvatarImage
                                                alt='a man'
                                                source={{
                                                    uri: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                                }}
                                            />
                                        </Avatar>
                                        <Box><Text fontSize={18} fontWeight='600' fontFamily='Poppins-Regular'>Lina Paul</Text>
                                            <Text opacity={0.7} fontSize={12} fontFamily='Poppins-Regular'>Director</Text></Box>

                                    </Box>
                                    <Icon as={ChevronRightIcon} color='#8D989D' w="$6" h="$6" />

                                </Box>

                            </Box>
                            <Box gap={10}>
                                <Text fontSize={18} fontWeight='700' fontFamily='Poppins-Regular'>In this course</Text>

                                <Box>
                                    <Timeline
                                        data={data}
                                        isUsingFlatlist={false}
                                        columnFormat='single-column-left'
                                        circleSize={20}
                                        detailContainerStyle={{ bottom: 12 }}
                                        descriptionStyle={{ color: 'gray', marginBottom: 20, fontFamily: 'Poppins-Regular' }}
                                        timeContainerStyle={{ display: 'none' }}
                                        circleColor='#BCC7D1'

                                        lineColor='#BCC7D1'
                                    />
                                </Box>

                            </Box>


                        </Box>
                    ))}
                </View>
            </ScrollView>
            <View alignSelf='center' width='80%' >
                <Button borderRadius={12} height={64} my={10} flexDirection='column'><Text fontWeight='600' fontSize={18} fontFamily='Poppins-Regular' color='white'>Enroll</Text>
                    <Box flexDirection='row' gap={8} alignItems='center' >
                        <FontAwesome5 color='white' name='hourglass' /><Text fontSize={12} color='white'>5 Feb 2024</Text>

                    </Box>
                </Button></View>
        </SafeAreaView>

    )
}

export default Page