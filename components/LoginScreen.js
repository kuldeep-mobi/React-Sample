import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Login Screen</Text>
            <View style={styles.buttonContainer}>
                <Button title='Go To Home' onPress={() => { navigation.navigate("Home") }} />
            </View>
        </View>
    )
}

export default LoginScreen

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
