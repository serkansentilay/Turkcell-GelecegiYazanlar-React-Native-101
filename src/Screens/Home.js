import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import ThemeContext from '../context/ThemeContext'
import LangContext from '../context/LangContext'
import Form from '../components/Form'
import List from '../components/List'
import { useUsers } from '../context/UsersContext'
import useStore from '../store/useStore'

const Home = ({ navigation }) => {
    // const { loadData } = useUsers()

    // useEffect(() => {
    //     loadData()

    // }, [])


    const fetchUsers = useStore(state => state.fetchUsers);

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <View style={styles.container}>
            <Form />
            <List />
        </View>
    )
}

const styles = StyleSheet.create({
    text: { fontSize: 20 },
    container: { flex: 1 }

})

export default Home