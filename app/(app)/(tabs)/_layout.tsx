import React, { useEffect, useState } from 'react';
import { Image, Dimensions } from 'react-native';
import { Tabs } from 'expo-router';
import { Colors } from '../../../styles/Colors';
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 component
import { View, Text } from '@gluestack-ui/themed';

type TabIconProps = {
    name: string;
    title:string;
    color: string;
    focused: boolean;
};

const TabIcon: React.FC<TabIconProps> = ({title, name, color, focused }) => {
    return (
        <View opacity={focused ? '$100' : '$50'} display='flex' alignItems='center' justifyContent='space-around'>
            
            <FontAwesome5 name={name} size={22}  color='white' solid />
            
           
            
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
                        borderRadius: 28,
                        backgroundColor: Colors.primary,
                        borderTopColor: Colors.primary,
                        height: 56,
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
                        title: 'Home',
                        headerShown: false,
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
                    name='notification'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                name="bell" // Replace with the appropriate FontAwesome5 icon name
                                color={color}
                                focused={focused}
                                title='Notifications'

                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='liked'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                name="heart" // Replace with the appropriate FontAwesome5 icon name
                                color={color}
                                focused={focused}
                                title='Likes'

                            />
                        )
                    }}
                />
            </Tabs>
        </>
    );
};

export default TabsLayout;
