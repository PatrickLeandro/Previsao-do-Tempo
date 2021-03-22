import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Menu from '../../components/Menu'

const Search = () => {
    return (
        <View style={styles.container}>
            <Text>Page Search</Text>
            <Menu />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
