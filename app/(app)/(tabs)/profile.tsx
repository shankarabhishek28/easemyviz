import React from 'react'
import { View, Text, Box, Icon, EditIcon, Avatar, AvatarFallbackText, AvatarImage, Pressable, GlobeIcon , ChevronRightIcon, PhoneIcon, SettingsIcon, CloseCircleIcon} from '@gluestack-ui/themed'
import { ScrollView } from 'react-native'
import { Colors } from '../../../styles/Colors'
import { router } from 'expo-router'

const page = () => {
    return (
        <ScrollView style={{ backgroundColor: Colors.background }}>
            <View padding={20} gap={20}>
                <Text fontSize={18} fontWeight='700' fontFamily='Poppins-Regular'>Account</Text>

                <Box elevation={5} display='flex' alignItems='center' pt={20} pb={20} borderRadius={12} backgroundColor={Colors.primary}>

                    <Box width={'90%'} display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' gap={10}>

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
                            <Box><Text fontSize={16} fontWeight='600' fontFamily='Poppins-Regular' color='white' lineHeight={18}>Lina Paul</Text>
                                <Text opacity={0.7} fontSize={12} color='white' fontFamily='Poppins-Regular'>user._id</Text>
                            </Box>

                        </Box>
                        <Pressable onPress={()=>router.push('/(app)/setting')}>
                            <Icon as={EditIcon} color='white' w="$6" h="$6" />

                        </Pressable>

                    </Box>
                </Box>
                <Box gap={20}>
                    <Text fontSize={18} fontWeight='700' fontFamily='Poppins-Regular'>Preferences</Text>
                    <Box elevation={5} display='flex'  padding={20} borderRadius={12} backgroundColor={Colors.background} flexDirection='row' justifyContent='space-between' >
                        <Box flexDirection='row' gap={8} alignItems='center' >
                            <Icon as={GlobeIcon} color='black' w="$6" h="$6" />
                            <Box>
                                <Text fontWeight='700'>Country</Text>
                                <Text  fontSize={12} opacity={0.6}>Change your current country</Text>
                            </Box>

                        </Box>
                        <Icon as={ChevronRightIcon} color='black' w="$6" h="$6" />


                    </Box>
                    <Box elevation={5} display='flex'  padding={20} borderRadius={12} backgroundColor={Colors.background} flexDirection='row' justifyContent='space-between' >
                        <Box flexDirection='row' gap={8} alignItems='center' >
                            <Icon as={SettingsIcon} color='black' w="$6" h="$6" />
                            <Box>
                                <Text fontWeight='700'>Language</Text>
                                <Text  fontSize={12} opacity={0.6}>Change your primary language</Text>
                            </Box>

                        </Box>
                        <Icon as={ChevronRightIcon} color='black' w="$6" h="$6" />


                    </Box>
                    <Box elevation={5} display='flex'  padding={20} borderRadius={12} backgroundColor={Colors.background} flexDirection='row' justifyContent='space-between' >
                        <Box flexDirection='row' gap={8} alignItems='center' >
                            <Icon as={PhoneIcon} color='black' w="$6" h="$6" />
                            <Box>
                                <Text fontWeight='700'>Contact Us</Text>
                                <Text  fontSize={12} opacity={0.6}>Contact in case of any query</Text>
                            </Box>

                        </Box>
                        <Icon as={ChevronRightIcon} color='black' w="$6" h="$6" />


                    </Box>
                    
                    <Box elevation={5} display='flex'  padding={20} borderRadius={12} backgroundColor={Colors.background} flexDirection='row' justifyContent='space-between' >
                        <Box flexDirection='row' gap={8} alignItems='center' >
                            <Icon as={CloseCircleIcon} color='red' w="$6" h="$6" />
                            <Box>
                                <Text color='red' fontWeight='700'>Log Out</Text>
                                <Text  fontSize={12} opacity={0.6}>Log out of your current account</Text>
                            </Box>

                        </Box>
                        <Icon as={ChevronRightIcon} color='black' w="$6" h="$6" />


                    </Box>
                </Box>
            </View>

        </ScrollView>

    )
}

export default page