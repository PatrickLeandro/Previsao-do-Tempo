import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import * as Location from 'expo-location';

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import Forecast from '../../components/Forecast'

import api, { key } from '../../services/api'

const myList = [
    {
      "date": "19/03",
      "weekday": "Sex",
      "max": 24,
      "min": 18,
      "description": "Tempestades",
      "condition": "clear-day"
    },
    {
      "date": "20/03",
      "weekday": "Sáb",
      "max": 26,
      "min": 18,
      "description": "Tempestades isoladas",
      "condition": "storm"
    },
    {
      "date": "21/03",
      "weekday": "Dom",
      "max": 28,
      "min": 17,
      "description": "Ensolarado com muitas nuvens",
      "condition": "cloudly_day"
    },
    {
      "date": "22/03",
      "weekday": "Seg",
      "max": 28,
      "min": 18,
      "description": "Ensolarado com muitas nuvens",
      "condition": "cloudly_day"
    },
    {
      "date": "23/03",
      "weekday": "Ter",
      "max": 28,
      "min": 17,
      "description": "Tempestades isoladas",
      "condition": "storm"
    },
    {
      "date": "24/03",
      "weekday": "Qua",
      "max": 28,
      "min": 17,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "25/03",
      "weekday": "Qui",
      "max": 26,
      "min": 18,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "26/03",
      "weekday": "Sex",
      "max": 28,
      "min": 19,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "27/03",
      "weekday": "Sáb",
      "max": 26,
      "min": 18,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "28/03",
      "weekday": "Dom",
      "max": 26,
      "min": 18,
      "description": "Tempestades",
      "condition": "storm"
    }
  ]

const Home = () => {
  const [errorMsg, setErroMsg] = useState(null)
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState([])
  const [icon, setIcon] = useState({name: 'cloud', color: '#fff'});
  const [background, setBackground] = useState(['#1ed6ff', '#97c1ff'])

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync()
            if (status !== 'granted') {
              setErroMsg('Perminção negada para acessar sua localização');
              setLoading(false)
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            //console.log(location);

            ///weather?key=f8de8d2b&lat=-23.682&lon=-46.875
            const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);
            console.log(response.data);

            setWeather(response.data);

            if (response.data.results.currently === 'noite') {
              setBackground(['#0c3741', '#0f2f61'])
            }

            switch (response.data.results.condition_slug) {
              case 'clear_day':
                setIcon({ name: 'partly-sunny', color: '#fff' })
                break;

              case 'rain':
                setIcon({ name: 'rainy', color: '#fff' })
                break;

              case 'storm':
                setIcon({ name: 'partly-sunny', color: '#fff' })
                break;
          
              default:
                break;
            }

            setLoading(false);
            
        })();


    }, [])

    if (loading) {
      return(
        <View style={styles.container}>
          <Text style={{fontSize: 20, fonStyle: 'italic'}}>Obtendo dados... {"\n"} Por Favor aguarde </Text>
        </View>
      )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Menu />
            <Header background={background} weather={weather} icon={icon} />
            <Conditions weather={weather} />


            <FlatList 
                style={styles.list}
                horizontal={true}
                contentContainerStyle={{paddingBottom: '5%'}}
                data={myList}
                keyExtractor={item => item.date}
                renderItem={ ({item}) =>  <Forecast data={item} />}
            />

        </SafeAreaView>
            
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%',
    },
    list:{
        marginTop: 10,
        marginLeft: 10,
    },
})
