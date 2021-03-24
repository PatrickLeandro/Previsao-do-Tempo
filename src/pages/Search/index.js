import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Iframe } from 'react-native'
import Menu from '../../components/Menu'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import api, { key } from '../../services/api';


const Search = () => {
    const navigation = useNavigation()
    const [input,setInput] = useState('')
    const [city, setCity] = useState(null)    
    const [error, setError] = useState(null)


    async function handleSearch(){
        const response = await api.get(`/weather?key=${key}&city_name=${input}`)
        //console.log(response.data)




    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                <Feather 
                    name="chevron-left"
                    size={32}
                    color="#000"
                />
                <Text style={styles.btnText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.searchBox}>
                <TextInput 
                    value={input}
                    onChangeText={(valor) => setInput(valor)}
                    placeholder="Ex: São Paulo, SP"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                    <Feather 
                        name="search"
                        size={22}
                        color="#FFF"
                    />
                </TouchableOpacity>

            </View>
            <View>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wYMvzbfBdYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </View>
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    btn:{
        flexDirection: 'row',
        marginLeft: 15,
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginBottom: 50,

    },
    btnText:{
        fontSize: 25
    },
    searchBox: {
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#DDD',
        borderWidth: 1,
        width: "90%",
        height: 50,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    input: {
        width: '85%',
        height: 50,
        padding: 10,
    },
    icon: {
        width: '15%',
        backgroundColor: '#1ED6FF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
})
