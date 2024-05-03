import React from 'react'
import { Image, View, Text, Box, ScrollView } from '@gluestack-ui/themed'
import { FontAwesome5 } from '@expo/vector-icons'

const page = () => {
    return (
        <ScrollView >
            <View height='100%' padding={16} flexDirection='column' gap={20}>
                <Box width={'100%'}  >

                    <Image borderRadius={12} width={360} height={148} alt='new Image' source={require('../../assets/images/newsDetail.png')} />

                </Box>
                <Box flexDirection='row' justifyContent='space-between'>
                    <Text fontWeight='600' color='#4F4F4F' fontSize={10} >Biology</Text>
                    <Box flexDirection='row' alignItems='center'><FontAwesome5 name='clock' size={10} marginRight={4} /><Text fontWeight='600' color='#4F4F4F' fontSize={10}>1 hour ago</Text></Box>
                    
                </Box>
                <Text fontFamily='Poppins-Regular'>The Effects of Temperature on Enzyme Activity and Biology</Text>
                <Text>Summary</Text>
                <Text>Education built the Educate Live app as a Commercial app. This SERVICE is provided by Education and is intended for use as is.
                </Text>
                <Text>Details</Text>
                <Text>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service</Text>
                <Text>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service</Text>
                <Text>Details</Text>
                <Text>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service</Text>
                <Text>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service</Text>
                <Text>Details</Text>
                <Text>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service</Text>
                <Text>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service</Text>
                <Text>Details</Text>
                <Text>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service</Text>
                <Text>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service</Text>

            </View>
        </ScrollView>
    )
}

export default page