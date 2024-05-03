import React from 'react';
import { View, Text, FlatList, ScrollView, TextareaInput, Input, InputField, Box, Button } from '@gluestack-ui/themed';
import { Colors } from '../../../styles/Colors';
import { TextInput } from 'react-native';
interface Message {
  id: string;
  sender: 'user' | 'receiver';
  message: string;
  time: string;
}

const ChatPage: React.FC = () => {
  // Example data for messages
  const messages: Message[] = [
    { id: '1', sender: 'user', message: 'Hello!', time: '30 mins ago' },
    { id: '2', sender: 'receiver', message: 'Hi there!', time: '28 mins ago' },
    { id: '3', sender: 'user', message: 'How are you?', time: '25 mins ago' },
    { id: '4', sender: 'receiver', message: 'I\'m good, thanks!', time: '20 mins ago' },
    { id: '5', sender: 'receiver', message: 'I had a request to make, could you please!', time: '20 mins ago' },
    { id: '6', sender: 'user', message: 'Sure, what\'s the request?', time: '15 mins ago' },
    { id: '7', sender: 'receiver', message: 'Can you send me the latest report on project status?', time: '10 mins ago' },
    { id: '8', sender: 'user', message: 'Yes, I\'ll send it to you right away.', time: '5 mins ago' },
    { id: '9', sender: 'receiver', message: 'Thanks!', time: 'Just now' },
    { id: '10', sender: 'user', message: 'No problem!', time: 'Just now' },
    { id: '11', sender: 'receiver', message: 'By the way, did you see the email from our manager?', time: 'Just now' },
    { id: '12', sender: 'user', message: 'Yes, I did. I\'ll reply to it after sending the report.', time: 'Just now' },
    { id: '13', sender: 'receiver', message: 'Great, thanks!', time: 'Just now' },
    { id: '14', sender: 'user', message: 'You\'re welcome!', time: 'Just now' },
    { id: '15', sender: 'receiver', message: 'I appreciate your help!', time: 'Just now' },
    // Add more messages as needed
  ];

  // Render each message item
  const renderMessage = ({ item }: { item: Message }) => {
    return (
      <View elevation={5} alignSelf={item.sender === 'user' ? 'flex-end' : 'flex-start'} margin={10}>
        <View backgroundColor={item.sender === 'user' ? Colors.primary : 'white'} padding={10} borderRadius={10}>
          <Text color={item.sender === 'user' ? 'white' : 'black'}>{item.message}</Text>
          <Text color={item.sender === 'user' ? 'white' : 'black'} fontSize={12} alignSelf='flex-end'>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <FlatList
            data={messages}
            renderItem={renderMessage}
            scrollEnabled={false}

            keyExtractor={item => item.id}
          />
        </View>

      </ScrollView>
      <Box width='100%' height={90} display='flex' marginBottom={10} flexDirection='row' alignItems='center' justifyContent='space-evenly'>
        <Input
          backgroundColor='#E0E0E0'
          size="lg"
          width='70%'
          height={50}
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder="Enter Text here" />
        </Input>
        <Button backgroundColor='white' height={50}
        ><Text color={Colors.primary} >Send</Text></Button>
      </Box>

    </>


  );
};

export default ChatPage;
