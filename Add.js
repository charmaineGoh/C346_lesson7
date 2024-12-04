import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { datasource } from './Data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#6a0dad',
        justifyContent: 'center',
    },
    inputLabel: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        fontSize: 14,
    },
    buttonStyle: {
        backgroundColor: '#ff9800',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonTextStyle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 20,
    },
});

const Add = ({ navigation }) => {
    const [food, setFood] = useState('');
    const [calories, setCalories] = useState('');

    const handleAdd = () => {
        if (food && calories) {
            datasource[0].data.push({ key: food, calories: parseInt(calories, 10) });
            navigation.navigate('Home');
        } else {
            alert('Please enter valid food and calorie values.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add a New Food Item</Text>
            <Text style={styles.inputLabel}>Food Item:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter food name"
                placeholderTextColor="#888" // Gray placeholder text
                onChangeText={setFood}
            />
            <Text style={styles.inputLabel}>Calories:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter calories"
                placeholderTextColor="#888"
                keyboardType="numeric"
                onChangeText={setCalories}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={handleAdd}>
                <Text style={styles.buttonTextStyle}>Add Food</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Add;


