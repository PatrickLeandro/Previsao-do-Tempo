import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { Ionicons } from '@expo/vector-icons';

const Header = ({ background, weather, icon}) => {
    return (
        <LinearGradient 
            colors={['#1ed6ff', '#97c1ff']}
            style={styles.header}>
            <Text style={styles.date}>{weather.results.date}</Text>
            <Text style={styles.city}>{weather.results.city}</Text>

            <Ionicons 
                name={icon.name}
                color={icon.color}
                size={150}

            />

            <Text style={styles.temp}>{weather.results.temp}°</Text>
            <Text style={styles.description}>{weather.results.description}°</Text>
        </LinearGradient>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
       width: '95%',
       height: '55%',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 8, 
    },
    date: {
        color: '#fff',
        fontSize: 20
    },
    city: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',

    },
    temp: {
        color: '#fff',
        fontSize: 80,
        fontWeight: 'bold',

    },
    description:{
        color: '#fff',
        fontSize: 25,

    }
    

})
