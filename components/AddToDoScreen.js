import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'


const setData = async (name, details) => {
    if (name == '' || details == '') {
        alert("Fields are mandatory!!!")
        return
    }
    const min = 1
    const max = 100
    const random = min + (Math.random() * (max - min))
    const value = { id: random, title: name, description: details }
    try {
        const storeData = await AsyncStorage.getItem("@to_do_key")
        if (storeData) {
            const oldData = JSON.parse(storeData)
            oldData.push(value)
            const jsonValue = JSON.stringify(oldData)
            console.log("UPDATED DATA " + jsonValue)
            await AsyncStorage.setItem('@to_do_key', jsonValue)
        } else {
            const mData = []
            mData.push(value)
            const jsonValue = JSON.stringify(mData)
            await AsyncStorage.setItem('@to_do_key', jsonValue)
        }
    } catch (e) {
        alert(e)
    }
}

const AddToDoScreen = ({ navigation }) => {
    const [name, setName] = useState("")
    const [details, setDetails] = useState("")
    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inputTextView}
                    placeholder='Enter To Do Name...'
                    onChangeText={(text) => setName(text)}
                    keyboardType='ascii-capable' />

                <TextInput
                    style={styles.inputTextView}
                    onChangeText={(text) => setDetails(text)}
                    placeholder='Enter To Do Details...'
                />
            </View>

            <TouchableOpacity style={styles.buttonContainer}
                onPress={() => {
                    setData(name.trim(), details.trim())
                    navigation.navigate("To Do List")
                }}
            >
                <View style={{
                    flex: 1, alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8
                }}>
                    <Text style={styles.textStyle}>Add To Do</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AddToDoScreen
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    inputContainer: {
        marginTop: 20
    },
    inputTextView: {
        borderColor: 'grey',
        borderRadius: 8,
        borderWidth: 2,
        marginTop: 32,
        marginHorizontal: 20
    },
    buttonContainer: {
        height: 50,
        marginTop: 30,
        backgroundColor: 'red',
        marginHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 8
    },
    textStyle: {
        fontSize: 20,
        color: 'white',
    }
})
