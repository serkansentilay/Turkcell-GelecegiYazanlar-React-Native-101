import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useUsers } from '../context/UsersContext'
import useStore from '../store/useStore'


const Form = () => {
    const [name, setName] = useState("")
    // const { setUsers, addUser } = useUsers()
    const addUser = useStore(state => state.addUser)

    const handleSubmit = () => {
        if (!name) {
            return false
        }
        addUser({ name });
        setName("")
    }


    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                returnKeyType='go'
                value={name}
                onChangeText={(text) => setName(text)}
                onEndEditing={handleSubmit}
                placeholder='Enter username'
            />
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        borderWidth: 2,
        width: "100%",
        height: 40,
        padding: 5,
        fontSize: 18,
        borderColor: "#999"
    }
})