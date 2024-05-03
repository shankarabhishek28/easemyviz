import React, { useState } from 'react';
import { Box, View, Text,Pressable, ScrollView, Image } from '@gluestack-ui/themed';
import { router } from 'expo-router';


interface Item {
  text: string;
  expanded: boolean;
}

const Page: React.FC = () => {
  const [data, setData] = useState<Item[]>([
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus mauris pulvina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus mauris pulvina',
      expanded: false
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus mauris pulvina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus mauris pulvina',
      expanded: false
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus mauris pulvina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus mauris pulvina',
        expanded: false
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus mauris pulvina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus mauris pulvina',
        expanded: false
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus mauris pulvina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus mauris pulvina',
        expanded: false
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus mauris pulvina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus mauris pulvina',
        expanded: false
      }
  ]);

  const toggleExpanded = (index: number) => {
    const newData = [...data];
    newData[index].expanded = !newData[index].expanded;
    setData(newData);
  };

  return (
    <ScrollView>
      {data.map((item, index) => (
        <Pressable onPress={()=>router.push('/(app)/news-details')} key={index} padding={20} gap={20} alignSelf='center' width='100%'>
          <View flexDirection='row' width='100%' gap={10}>
            <Box width='26%'>
              <Image width={100} borderRadius={8} alt='News Image' source={require('../../assets/images/ln.png')} />
            </Box>
            <Box flexDirection='column' width='70%' gap={10}>
              <Box flexDirection='row' alignItems='flex-start' justifyContent='space-between' >
                <Text color='#4F4F4F' fontSize={10} fontWeight='700'>Biology</Text>
                <Text color='#4F4F4F' fontSize={10} fontWeight='700' opacity={0.7}>1 hour ago</Text>
              </Box>
              <Text fontSize={14} fontWeight='700' >The Effects of Temperature on Enzyme Activity and Biology</Text>
            </Box>
          </View>
          <Box width='100%'>
            {!item.expanded ? (
              <Text fontSize={12} >{item.text.slice(0, 92)}...<Text fontSize={12} color='blue' onPress={() => toggleExpanded(index)}>Read More</Text></Text>
            ) : (
              <Text fontSize={12}  >{item.text}<Text fontSize={12} color='blue' onPress={() => toggleExpanded(index)}> Read Less</Text></Text>
            )}
          </Box>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Page;
