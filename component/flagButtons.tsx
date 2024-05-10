import React from 'react';
import { Box, Text, Button, Image, ChevronRightIcon, Icon } from '@gluestack-ui/themed'
import { router } from 'expo-router';
import { Colors } from '../styles/Colors';











const FlagButtons = () => {


    return (
        <Box>

            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'  >
                <Text fontSize={16} fontFamily='Poppins-Bold'>Countries</Text>
                <Box flexDirection='row' alignItems='center'>
                    <Button variant='link' onPress={() => { router.push('/(app)/country-list') }}><Text fontSize={12} fontFamily='Poppins-Medium' color={Colors.primary} >View More</Text></Button>
                    <Icon as={ChevronRightIcon} color={Colors.primary} w="$4" h="$4" />
                </Box>
            </Box>

            <Box gap={20} marginLeft={8} display='flex' alignItems='center' >
                <Box gap={20}>

                    <Box flexDirection="row" marginTop={8} gap={20}>
                        <Button
                            onPress={() => { router.push({ pathname: '/popular-university', params: { country: "Germany" } }) }}
                            elevation={5}
                            borderRadius={12}
                            height={84}
                            width={162}
                            backgroundColor='white'
                            marginRight={8}
                        >
                            <Box flexDirection='row' alignItems='center' justifyContent='center' gap={12}>
                                <Image height={40} width={40} alt='flag' source={require('../assets/images/germany.png')} style={{ alignSelf: 'center' }} />
                                <Text style={{ textAlign: 'center', fontSize: 14, fontFamily: 'Poppins-Regular' }}>Germany</Text>
                            </Box>
                        </Button>
                        <Button
                            onPress={() => { router.push({ pathname: '/popular-university', params: { country: "America" } }) }}
                            elevation={5}
                            borderRadius={12}
                            height={84}
                            width={162}
                            backgroundColor='white'
                            marginRight={8}
                        >
                            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' gap={12} >
                                <Image height={40} width={40} alt='flag' source={require('../assets/images/usa.png')} style={{ alignSelf: 'center' }} />
                                <Text style={{  textAlign: 'center', fontSize: 14, fontFamily:'Poppins-Regular' }}>America</Text>
                            </Box>
                        </Button>
                    </Box>

                    <Box flexDirection="row" marginTop={8} gap={20}>
                        <Button
                            onPress={() => { router.push({ pathname: '/popular-university', params: { country: "Germany" } }) }}
                            elevation={5}
                            borderRadius={12}
                            height={84}
                            width={162}
                            backgroundColor='white'
                            marginRight={8}
                        >
                            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' gap={12} >
                                <Image height={40} width={40} alt='flag' source={require('../assets/images/canada.png')} style={{ alignSelf: 'center' }} />
                                <Text style={{ fontFamily:'Poppins-Regular', textAlign: 'center', fontSize: 14 }}>Canada</Text>
                            </Box>
                        </Button>
                        <Button
                            onPress={() => { router.push({ pathname: '/popular-university', params: { country: "America" } }) }}
                            elevation={5}
                            borderRadius={12}
                            height={84}
                            width={162}
                            backgroundColor='white'
                            marginRight={8}
                        >
                            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' gap={12} >
                                <Image height={40} width={40} alt='flag' source={require('../assets/images/Aus.png')} style={{ alignSelf: 'center' }} />
                                <Text style={{ fontFamily:'Poppins-Regular', textAlign: 'center', fontSize: 14 }}>Australia</Text>
                            </Box>
                        </Button>
                    </Box>

                </Box>

            </Box>
        </Box>








    )
}

export default FlagButtons
