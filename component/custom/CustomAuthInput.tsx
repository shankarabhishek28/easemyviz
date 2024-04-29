import { KeyboardTypeOptions, TextInput, View } from 'react-native'
import React, { FC, useState } from 'react'
import { Controller} from 'react-hook-form'
import { Entypo, Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Box, Input, InputField, Pressable } from '@gluestack-ui/themed';
import { Colors } from '../../styles/Colors';

type Props = {
    name: string;
    control: any;
    placeholder: string;
    label: string;
    keyboardType: KeyboardTypeOptions;
    type: "password" | "text";
    errors: any
}

const CustomAuthInput: FC<Props> = ({ control, name, placeholder, keyboardType, label, type ,errors}) => {




    const [show, setShow] = useState(false);

    const [focus, setFocused] = useState(false);



    return (
        <View >
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: {  } }) => {
                    const onBlur = () => {
                        setFocused(false)
                    }

                    const onFocus = () => {
                        setFocused(true)
                    }

                    return (
                        <Input
                            position='relative'
                            alignItems='center'
                            style={{
                                height: 52,
                                width: 335,
                                borderColor: focus ? Colors.primary : '#F3F4F9',
                                padding:10,
                                marginLeft:0,
                                borderRadius:28,
                                borderWidth:1.5,
                                
                            }}
                            rounded={'$lg'}
                            bg={'$white'}
                        >
                            <InputField
                                onFocus={onFocus}
                                type={show ? "text" : type}
                                // onChangeText={onChange}
                                // value={value}
                                keyboardType={keyboardType}
                                onBlur={onBlur}
                                clearButtonMode='always'
                                placeholderTextColor={'$blueGray500'}
                                placeholder={placeholder}
                            />
                            {
                                type === "password" &&
                                <Pressable onPress={() => { setShow(!show) }} pr={10}>
                                    <Feather name={!show ? "eye-off" : "eye"} size={14} color="black" />
                                </Pressable>
                            }

                        </Input>
    
                    )
                }
                }


                name={name}
            />
            {/* {errors &&
            <Text color={'$red500'} m={1}>{errors?.message}</Text>
            } */}
        </View>
    )
}

export default CustomAuthInput