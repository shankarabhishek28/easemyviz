import React from 'react';
import { Box, Text, Button, Image,ChevronRightIcon,Icon } from '@gluestack-ui/themed'
import { router } from 'expo-router';
import { Colors } from '../styles/Colors';











const FlagButtons = () => {


    return (
        <Box>

            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'  >
                <Text fontSize={16} fontWeight='700'>Countries</Text>
                <Box flexDirection='row' alignItems='center'>
                    <Button variant='link' onPress={()=>{router.push('/(app)/country-list')}}><Text fontSize={12} fontWeight='500' color={Colors.primary} >View More</Text></Button>
                    <Icon as={ChevronRightIcon} color={Colors.primary} w="$4" h="$4" />
                </Box>
            </Box>

            <Box gap={20} marginLeft={8} display='flex' alignItems='center' >
                <Box flexDirection="column" gap={20}>

                    <Box flexDirection="row" marginTop={8} gap={20}>
                        <Button onPress={() => { router.push({ pathname: '/popular-university', params: { country: "Germany" } }) }} elevation={5} borderRadius={12} height={74} width={156} backgroundColor='white' marginRight={8} >
                            <Box display='flex' flexDirection='row' alignItems='center' gap={16} >
                                <Image height={40} width={40} alt='flag' source={require('../assets/images/germany.png')} />
                                <Text>Germany</Text>
                            </Box>

                        </Button>
                        <Button onPress={() => { router.push({ pathname: '/popular-university', params: { country: "America" } }) }} elevation={5} borderRadius={12} height={74} width={156} backgroundColor='white' marginRight={8} >
                            <Box display='flex' flexDirection='row' alignItems='center' gap={16} >
                                <Image height={40} width={40} alt='flag' source={require('../assets/images/usa.png')} />
                                <Text>America</Text>
                            </Box>

                        </Button>
                    </Box>
                </Box>
                <Box flexDirection="row" gap={20}>


                    <Button onPress={() => { router.push({ pathname: '/popular-university', params: { country: "United Kindom" } }) }} elevation={5} borderRadius={12} height={74} width={156} backgroundColor='white' marginRight={8} >
                        <Box display='flex' flexDirection='row' alignItems='center' gap={16} >
                            <Image height={40} width={40} alt='flag' source={require('../assets/images/Aus.png')} />
                            <Text width={70}>United Kindom</Text>
                        </Box>

                    </Button>




                    <Button onPress={() => { router.push({ pathname: '/popular-university', params: { country: "Canada" } }) }} elevation={5} borderRadius={12} height={74} width={156} backgroundColor='white' marginRight={8} >
                        <Box display='flex' flexDirection='row' alignItems='center' gap={16} >
                            <Image height={40} width={40} alt='flag' source={require('../assets/images/canada.png')} />
                            <Text >Canada</Text>
                        </Box>

                    </Button>
                </Box>
            </Box>
        </Box>








    )
}

export default FlagButtons
