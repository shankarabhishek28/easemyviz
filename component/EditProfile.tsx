import React from 'react'
import { View, Text, Box, Icon, EditIcon, ScrollView, Avatar, AvatarFallbackText, AvatarImage, Pressable, GlobeIcon, ChevronRightIcon, PhoneIcon, SettingsIcon, CloseCircleIcon, VStack, Radio, RadioIndicator, RadioLabel, HStack } from '@gluestack-ui/themed'
import { Image, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@gluestack-ui/themed';
import { Colors } from '../styles/Colors';
import { AntDesign } from '@expo/vector-icons';
import { Input } from '@gluestack-ui/themed';
import { InputField } from '@gluestack-ui/themed';
import { RadioGroup } from '@gluestack-ui/themed';
import { RadioIcon } from '@gluestack-ui/themed';
import { CircleIcon } from '@gluestack-ui/themed';


const EditProfile = () => {
    const [values, setValues] = React.useState<string>("Male")
    return (
        <Pressable style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1, alignItems: 'center', flexDirection: 'column' }}>
            <ScrollView style={{ position: 'absolute', bottom: 0, height: '100%', width: '100%', backgroundColor: Colors.background, padding: 16 }}>
                <Box flexDirection='row' alignItems='center' gap={16}>
                    <Box width='20%' alignItems='center'>
                        <Image style={{ height: 60, width: 60, borderRadius: 50, borderWidth: 2, borderColor: 'white' }} source={{
                            uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                        }} />
                        <AntDesign name="camera" size={20} color={Colors.primary} position='absolute' right={0} bottom={0} />

                    </Box>

                    <Text>Edit Profile Photo</Text>

                </Box>
                <Box gap={12} mt={12}>
                    <Text>Name</Text>
                    <Input
                        variant="outline"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                        <InputField placeholder="Enter Text here" />
                    </Input>
                </Box>
                <Box gap={12} mt={12}>
                    <Text>Email</Text>
                    <Input
                        variant="outline"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                        <InputField placeholder="Enter Text here" />
                    </Input>
                </Box>
                <Box gap={12} mt={12}>
                    <Text>Date of Birth</Text>
                    <Input

                        variant="outline"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                        <InputField placeholder="Enter Text here" />
                        <AntDesign style={{ alignSelf: 'center', marginRight: 12 }} name="calendar" size={20} color={Colors.primary} />

                    </Input>
                </Box>
                <Box gap={12} mt={12}>
                    <Text>Gender</Text>
                    <RadioGroup value={values} onChange={setValues}>
                        <HStack space="sm" >
                            <Radio value="Male"   >
                                <RadioIndicator mr="$2" >
                                    <RadioIcon style={{ color: Colors.primary, borderColor: Colors.primary }} as={CircleIcon} />
                                </RadioIndicator>
                                <RadioLabel>Male</RadioLabel>
                            </Radio>
                            <Radio value="Female">
                                <RadioIndicator mr="$2">
                                    <RadioIcon as={CircleIcon} />
                                </RadioIndicator>
                                <RadioLabel>Female</RadioLabel>
                            </Radio>

                        </HStack>
                    </RadioGroup>
                </Box>
                <Box gap={12} mt={12}>
                    <Text>Phone Number</Text>
                    <Input
                        variant="outline"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                        <InputField placeholder="Enter Text here" />
                    </Input>
                </Box>
                <Box gap={12} mt={12} mb={12}>
                    <Text>Address</Text>
                    <Input
                        variant="outline"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                        <InputField placeholder="Enter Text here" />
                    </Input>
                </Box>
                <Box justifyContent='space-between' gap={24} alignItems='center' width='100%' mt={12} mb={42}>
                    <Button  justifyContent='space-between' onPress={() => { router.push('/(app)/delete-confirmation') }} width='100%' borderRadius={10} padding={8} height={50} borderWidth={1} backgroundColor='transparent' borderColor='red'><Text color='red' fontFamily='Poppins-Regular'>Delete account</Text><AntDesign style={{ alignSelf: 'center', marginRight: 12 }} name="delete" size={20} color='red' />
                    </Button>

                    <Button onPress={() => { router.push('..') }} borderRadius={10} padding={8} height={50} width='100%'><Text fontFamily='Poppins-Regular' color='white'>Save</Text></Button>

                </Box>






            </ScrollView>
        </Pressable>
    )
}

export default EditProfile