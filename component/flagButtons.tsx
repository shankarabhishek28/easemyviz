import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import {
    FlatList,

    StatusBar,
    StyleSheet,


} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { Avatar, Box, Text, View, AvatarFallbackText, AvatarImage, InputIcon, Input, Icon, SearchIcon, InputSlot, InputField, Button, Image, Pressable, ChevronRightIcon, ScrollView } from '@gluestack-ui/themed'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'











const FlagButtons
 = () => {


    return (
        <Box gap={20} marginLeft={8} display='flex' alignItems='center' >
            <Box flexDirection="column" gap={20}>

                <Box flexDirection="row" marginTop={8} gap={20}>
                    <Button elevation={5} borderRadius={12} height={74} width={156} backgroundColor='white' marginRight={8} >
                        <Box display='flex' flexDirection='row' alignItems='center' gap={16} >
                            <Image height={40} width={40} alt='flag' source={require('../assets/images/germany.png')} />
                            <Text>America</Text>
                        </Box>

                    </Button>
                    <Button elevation={5} borderRadius={12} height={74} width={156} backgroundColor='white' marginRight={8} >
                        <Box display='flex' flexDirection='row' alignItems='center' gap={16} >
                            <Image height={40} width={40} alt='flag' source={require('../assets/images/usa.png')} />
                            <Text>America</Text>
                        </Box>

                    </Button>
                </Box>
            </Box>
            <Box flexDirection="row" gap={20}>


                <Button elevation={5} borderRadius={12} height={74} width={156} backgroundColor='white' marginRight={8} >
                    <Box display='flex' flexDirection='row' alignItems='center' gap={16} >
                        <Image height={40} width={40} alt='flag' source={require('../assets/images/Aus.png')} />
                        <Text width={70}>United Kindom</Text>
                    </Box>

                </Button>




                <Button elevation={5} borderRadius={12} height={74} width={156} backgroundColor='white' marginRight={8} >
                    <Box display='flex' flexDirection='row' alignItems='center' gap={16} >
                        <Image height={40} width={40} alt='flag' source={require('../assets/images/canada.png')} />
                        <Text >America</Text>
                    </Box>

                </Button>
            </Box>
        </Box>








    )
}

export default FlagButtons
