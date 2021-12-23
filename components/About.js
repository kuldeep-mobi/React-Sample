import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const About = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>About Screen</Text>
            <View style={styles.buttonContainer}>
                <Button title='Go To Home' onPress={() => { navigation.navigate("Login") }} />
            </View>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        justifyContent: 'center',
        marginHorizontal: 40,
        borderRadius: 5,
        marginTop: 20
    },
    textStyle: {
        alignSelf: 'center'
    }
})
