import React, { useContext } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'

const Home2 = ({ navigation }) => {
    //  const { theme, toggleTheme } = useContext(ThemeContext)
    const { theme, toggleTheme } = useTheme()

    //  const { lang, setLang } = useContext(LangContext)
    const { lang, setLang } = useLang()




    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text style={styles.text}>Theme: {theme}</Text>
            <Text style={styles.text}>Language: {lang}</Text>
            <Button title="Change Theme" onPress={toggleTheme} />
            <Button title="Go to Settings" onPress={() => navigation.navigate("Settings")} />

            <Text style={{ marginTop: 10 }}>Change Language</Text>
            <View style={styles.buttons}>
                <Button title='tr-TR' onPress={() => setLang("tr-TR")} />
                <Button title='en-US' onPress={() => setLang("en-US")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: { fontSize: 20 },
    buttons: { flexDirection: 'row' }

})

export default Home2