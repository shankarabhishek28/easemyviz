import React from 'react';
import { Image, Text, View, Box, ScrollView } from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../styles/Colors';
import { Pressable } from '@gluestack-ui/themed';
import { router, useLocalSearchParams } from 'expo-router';
const Page = () => {

     
    type DemoData = {
        id: string;
        title: string;
        subtitle: string;
        tag: string;
        imgURL: any; // Assuming imgURL is a require statement, so it can be of any type
    };

    const demoDataArray: DemoData[] = [
        {
            id: '1',
            title: 'University of California',
            subtitle: 'Subtitle for University 1',
            tag: 'USA',
            imgURL: require('../../assets/images/popu-lg-1.png'),
        },
        {
            id: '2',
            title: 'University of Berlin',
            subtitle: 'Subtitle for University 2',
            tag: 'Germany',
            imgURL: require('../../assets/images/popu-lg-2.png'),
        },
        {
            id: '3',
            title: 'University of Torronto',
            subtitle: 'Subtitle for University 3',
            tag: 'Canada',
            imgURL: require('../../assets/images/popu3.png'),
        },
        {
            id: '4',
            title: 'University of Torronto',
            subtitle: 'Subtitle for University 3',
            tag: 'Canada',
            imgURL: require('../../assets/images/popu-lg-1.png'),
        },
        // Add more data as needed
    ];

    const {country}  = useLocalSearchParams()


    return (
        <ScrollView bg={'$white'}>
            {country &&
            <Text px={20} fontWeight='$bold' fontSize={'$lg'} bold color={'$black'} mt={20}>{country} Universities</Text>
            }
            <View height='100%' width='100%' marginBottom={40}>
                {demoDataArray.map((item) => (
                    <Pressable onPress={() => router.push('/(app)/university-details')} key={item.id} flexDirection='column' alignItems='center' marginTop={24} gap={20} >
                        <Box w={'90%'} h={235}  position='relative'>
                            <Image
                                alt='university image'
                                style={{width:'100%',height:'100%'}}
                                borderRadius={16}
                                source={item.imgURL}
                            />
                            <LinearGradient
                                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    height: 100,
                                    borderRadius: 16,
                                }}
                            />
                        <Box
                            position='absolute'
                            top={0}
                            left={0}
                            right={0}
                            bottom={0}
                        >

                            <Box bottom={12} left={10} position={'absolute'}>
                                <Text color='white' fontWeight='700' fontFamily='Poppins-Regular' fontSize={18}>{item.title}</Text>
                                <Text color='white' fontSize={12} fontWeight='700' fontFamily='Poppins-Regular'>{item.subtitle}</Text>
                            </Box>
                        </Box>
                            
                        </Box>
                    </Pressable>
                ))}
            </View>

        </ScrollView>
    );
};

export default Page;
