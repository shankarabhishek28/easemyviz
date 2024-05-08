import React, { useEffect, useState } from 'react';
import { Image, Dimensions } from 'react-native';
import { Tabs, router} from 'expo-router'; 
import { Colors } from '../../../styles/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 component
import { View, Text, Pressable } from '@gluestack-ui/themed';

type TabIconProps = {
    name: string;
    title:string;
    color: string;
    focused: boolean;
};

const TabIcon: React.FC<TabIconProps> = ({title, name, color, focused }) => {
    return (
        <View opacity={focused ? '$100' : '$50'} display='flex' alignItems='center' justifyContent='space-around'>
          {title === 'Enquiry' ? <MaterialCommunityIcons name="comment-question" size={24} color="white" />
 :
        <FontAwesome5 name={name} size={22} color='white' solid />
    }
            
           
            
            <Text color='white' fontFamily='Poppins-Regular' fontSize={10}>
                {title}
            </Text>
            

        </View>
    );
};


const TabsLayout: React.FC = () => {
    const [containerWidth, setContainerWidth] = useState<number>(0);
    useEffect(() => {
        const screenWidth = Dimensions.get('window').width;
        const tabBarWidth = screenWidth * 0.95; // Adjust as needed
        setContainerWidth(tabBarWidth);
    }, []);
    
    
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FFA001',
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: containerWidth,
                        marginLeft: -containerWidth / 2,
                        marginBottom: '2%',
                        borderRadius: 32,
                        backgroundColor: Colors.primary,
                        borderTopColor: Colors.primary,
                        height: 68,
                    },
                    tabBarItemStyle: {
                        
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }}
            >
                <Tabs.Screen
                
                    name='index'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                name="home" // Replace with the appropriate FontAwesome5 icon name
                                color={color}
                                focused={focused}
                                title='Home'
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='chatBot'
                    options={{
                        title: 'ChatBot',
                        tabBarStyle: { display: 'none' }, 
                        headerShown: true,
                        headerLeft: () => (
                            <Pressable onPress={() => router.push('..')} >
                                <FontAwesome5 name="arrow-left" size={20} marginLeft={20} color="black" />
                            </Pressable>
                        ),
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                name="comment" // Replace with the appropriate FontAwesome5 icon name
                                color={color}
                                focused={focused}
                                title='ChatBot'

                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='enquiry'
                    options={{
                        title: 'Enquiry',
                        headerShown: true,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                name="question" // Replace with the appropriate FontAwesome5 icon name
                                color={color}
                                focused={focused}
                                title='Enquiry'

                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: 'Settings',
                        headerShown: true,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                name="user" // Replace with the appropriate FontAwesome5 icon name
                                color={color}
                                focused={focused}
                                title='Profile'

                            />
                        )
                    }}
                />
            </Tabs>
        </>
    );
};

export default TabsLayout;
