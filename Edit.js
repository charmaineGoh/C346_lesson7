import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { datasource } from './Data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#6a0dad',
    },
    input: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    buttonStyle: {
        backgroundColor: '#ff9800',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop:30,
        color: 'white',
    },
});

const Edit = ({ navigation, route }) => {
    const { index, key, calories } = route.params;
    const [food, setFood] = useState(key);
    const [caloriesValue, setCaloriesValue] = useState(calories.toString());

    const handleSave = () => {
        datasource[0].data[index] = { key: food, calories: parseInt(caloriesValue, 10) };
        navigation.navigate('Home');
    };

    const handleDelete = () => {
        Alert.alert('Are you sure?', '', [
            { text: 'Yes', onPress: () => {
                    datasource[0].data.splice(index, 1);
                    navigation.navigate('Home');
                }},
            { text: 'No' },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Edit Food Item:</Text>
            <TextInput
                style={styles.input}
                value={food}
                onChangeText={setFood}
                placeholder="Enter food name"
            />
            <Text style={styles.titleText}>Edit Calories:</Text>
            <TextInput
                style={styles.input}
                value={caloriesValue}
                keyboardType="numeric"
                onChangeText={setCaloriesValue}
                placeholder="Enter calorie count"
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={handleSave}>
                <Text style={styles.buttonTextStyle}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={handleDelete}>
                <Text style={styles.buttonTextStyle}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Edit;




