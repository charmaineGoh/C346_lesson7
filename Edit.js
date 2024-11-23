import React, { useState } from 'react';
import { TextInput, View, Text, Button,Alert } from 'react-native';
import {datasource} from "./Data.js";

const Edit = ({ navigation ,route}) => {
    const [letter, setLetter] = useState(route.params.key);

    return (
        <View style={{ padding: 10 }}>
            {/* Letter Input */}
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Letter:</Text>
                <TextInput
                    style={{ borderWidth: 1 }}
                    maxLength={1}
                    value={letter}
                    onChangeText={(text) => setLetter(text)}
                />
            </View>

            {/* Buttons for Save and Delete */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <Button title='Save'
                    onPress={() => {
                        let indexNum= 1;
                        if(route.params.type == 'Vowels'){
                            indexNum=0;
                        }
                        datasource[indexNum].data[route.params.index].key=letter;
                        navigation.navigate("Home");
                    }
                    }
                />
                <Button
                    title="Delete"
                    onPress={() => {
                        let indexNum= 1;
                        if(route.params.type == 'Vowels'){
                            indexNum=0;
                        }
                        Alert.alert("Are you sure?",'',
                            [{text:'Yes',onPress:() => {
                                    datasource[indexNum].data.splice(route.params.index,1);
                                    navigation.navigate("Home");
                                }},
                                {text:"no"}])

                    }
                    }
                />
            </View>
        </View>
    );
};

export default Edit;

