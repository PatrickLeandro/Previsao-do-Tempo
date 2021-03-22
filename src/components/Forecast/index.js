import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { condition } from '../../Utils/condition'

const Forecast = ({data}) => {

    let icon = condition(data.condition);

    return (
        <View style={styles.container}>
            <Text>{data.date}</Text>
            <Ionicons  name={icon.name} color={icon.color} size={25}/>

            <View style={styles.temp}>
                <Text>{data.min}°</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{data.max}°</Text>
            </View>
        </View>
    )
}

export default Forecast

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        marginLeft: 12,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 14,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 24,
        height: '90%',
    },
    date:{
        fontSize: 14,
    },
    temp:{
        alignItems: 'center',
    },
})
