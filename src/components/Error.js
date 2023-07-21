import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Error = ({ message }) => {
    return (
        <View>
            <Text>{message}</Text>
        </View>
    )
}

export default Error

const styles = StyleSheet.create({})