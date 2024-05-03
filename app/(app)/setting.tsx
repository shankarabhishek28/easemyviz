import React, { useState } from 'react'
import { View, Text, Box, Icon, EditIcon, Avatar, AvatarFallbackText, AvatarImage, Pressable, GlobeIcon, ChevronRightIcon, PhoneIcon, SettingsIcon, CloseCircleIcon, ChevronLeftIcon, ArrowLeftIcon, Input, InputField } from '@gluestack-ui/themed'
import { ScrollView, StatusBar } from 'react-native'
import { Colors } from '../../styles/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5 } from '@expo/vector-icons'
import { router } from 'expo-router'
import { EyeIcon } from '@gluestack-ui/themed'
import { EyeOffIcon } from '@gluestack-ui/themed'
import { InputIcon } from '@gluestack-ui/themed'
import { InputSlot } from '@gluestack-ui/themed'
import { Button } from '@gluestack-ui/themed'

const page = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleState = (): void => {
        setShowPassword((showState: boolean) => {
            return !showState;
        });
    };
    return (
        <ScrollView>
            <StatusBar backgroundColor={'black'} barStyle="light-content" />

            <SafeAreaView style={{ width: '100%', height: '100%', gap: 40, padding: 0 }} >
                <View height='100%' gap={16} mb={20}>
                    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={10} >
                        <Pressable onPress={() => router.push('..')} width='90%' marginTop={20} alignItems='flex-start'>
                            <Icon as={ArrowLeftIcon} color='black' w="$8" h="$8" />
                        </Pressable>
                        <Avatar size='2xl'>
                            <AvatarFallbackText>SS</AvatarFallbackText>
                            <AvatarImage
                                alt='a man'
                                source={{
                                    uri: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                }}
                            />
                        </Avatar>
                        <Box alignItems='center'><Text fontSize={28} fontWeight='600' fontFamily='Poppins-Regular' color='black'>Lina Paul</Text>
                            <Text opacity={0.7} fontSize={14} color='black' fontFamily='Poppins-Regular'>@lenapaul123</Text>
                        </Box>

                    </Box>
                    <Box width='100%' padding={20} gap={28}>
                        <Box flexDirection='row' gap={10}>
                            <Box elevation={3} width={32} height={32} backgroundColor={Colors.background} alignItems='center' justifyContent='center' borderRadius={8}>
                                <FontAwesome5 size={22} name='user' color={Colors.primary} solid />
                            </Box>
                            <Box width='75%' >
                                <Text>Name</Text>
                                <Input
                                    mt={12}
                                    backgroundColor='#E0E0E0'
                                    size="lg"
                                    width='100%'
                                    height={36}
                                    isDisabled={false}
                                    isInvalid={false}
                                    isReadOnly={false}
                                >
                                    <InputField placeholder="Lina Paul" />
                                </Input>
                            </Box>
                            <Text color={Colors.primary}>Save</Text>
                        </Box>
                        <Box flexDirection='row' gap={10}>
                            <Box elevation={3} width={32} height={32} backgroundColor={Colors.background} alignItems='center' justifyContent='center' borderRadius={8}>
                                <FontAwesome5 size={22} name='envelope' color={Colors.primary} solid />
                            </Box>
                            <Box width='75%' >
                                <Text>Email</Text>
                                <Input
                                    borderWidth={1}
                                    mt={12}
                                    backgroundColor='#E0E0E0'
                                    size="lg"
                                    width='100%'
                                    height={36}
                                    isDisabled={false}
                                    isInvalid={false}
                                    isReadOnly={false}
                                >
                                    <InputField placeholder="Change Your Email" />
                                </Input>
                            </Box>
                            <Text color={Colors.primary}>Save</Text>
                        </Box>
                        <Box flexDirection='row' gap={10}>
                            <Box elevation={3} width={32} height={32} backgroundColor={Colors.background} alignItems='center' justifyContent='center' borderRadius={8}>
                                <FontAwesome5 size={22} name='lock' color={Colors.primary} solid />
                            </Box>
                            <Box width='75%' >
                                <Text>Name</Text>
                                <Input mt={12}
                                    backgroundColor='#E0E0E0'>
                                    <InputField placeholder='Change Your Password' type={showPassword ? "text" : "password"} />
                                    <InputSlot pr="$3" onPress={handleState}>
                                        {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                                        <InputIcon
                                            as={showPassword ? EyeIcon : EyeOffIcon}
                                            color="$darkBlue500"
                                        />
                                    </InputSlot>
                                </Input>
                            </Box>
                            <Text color={Colors.primary}>Save</Text>
                        </Box>
                        <Box flexDirection='row' gap={10}>
                            <Box elevation={3} width={32} height={32} backgroundColor={Colors.background} alignItems='center' justifyContent='center' borderRadius={8}>
                                <FontAwesome5 size={22} name='mobile' color={Colors.primary} solid />
                            </Box>
                            <Box width='75%' >
                                <Text>Phone Number</Text>
                                <Input
                                    mt={12}
                                    backgroundColor='#E0E0E0'
                                    size="lg"
                                    width='100%'
                                    height={36}
                                    isDisabled={false}
                                    isInvalid={false}
                                    isReadOnly={false}
                                >
                                    <InputField placeholder="Change your number" />
                                </Input>
                            </Box>
                            <Text color={Colors.primary}>Save</Text>
                        </Box>

                    </Box>
                    <Button mb={20} mt={20} borderRadius={8} alignSelf='center' width='70%'><Text fontFamily='Poppins-Regular' color='white'>UPDATE</Text></Button>

                </View>







            </SafeAreaView>
        </ScrollView>

    )
}

export default page