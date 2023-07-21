import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import LangContext from '../context/LangContext'

const Settings = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { lang, setLang } = useContext(LangContext)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text style={styles.text}>Theme: {theme}</Text>
            <Text style={styles.text}>Language: {lang}</Text>
            <Button title="Change Theme" onPress={toggleTheme} />

            <Text style={{ marginTop: 10 }}>Change Language</Text>
            <View style={styles.buttons}>
                <Button title='tr-TR' onPress={() => setLang("tr-TR")} />
                <Button title='en-US' onPress={() => setLang("en-US")} />
            </View>

        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    text: { fontSize: 20 },
    buttons: { flexDirection: 'row' }
})