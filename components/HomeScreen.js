import React, { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useState } from 'react/cjs/react.development'



const _renderItem = ({ item }) => (

    <View style={styles.renderItemStyle}>
        <Text style={{ marginStart: 12 }}> {item.title}</Text>
    </View>
)

const HomeScreen = ({ navigation }) => {
    const [array, setArray] = useState([])
    const isFocused = useIsFocused()

    useEffect(() => {
        getData()
        console.log("isFocused")
    }, [isFocused])

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("@to_do_key")
            if (value) {
                const ABC = JSON.parse(value)
                setArray(ABC)
            } else {
                setArray([])
            }
            console.log(value)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            {array.length > 0 ?
                <FlatList
        
                    renderItem={_renderItem}
                    extraData={array}
                    data={array} >
                </FlatList>
                :
                <Text style={styles.textStyle}>No Todo Found!!!</Text>
            }
            <TouchableOpacity
                style={styles.button}
                onPress={() => { navigation.navigate("Add To Do") }}
            >
                <Image
                    style={{ tintColor: 'white' }}
                    source={require('../assets/Images/plus.png')}
                />
            </TouchableOpacity>
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: 'center',
        flex: 1,
    },
    textStyle: {
        alignSelf: 'center'
    },
    renderItemStyle: {
        flex: 1,
        backgroundColor: '#f9c2ff',
        justifyContent: 'center',
        marginVertical: 7,
        height: 60,
        marginHorizontal: 8,
        borderRadius: 8
    },
    button: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        position: 'absolute',
        bottom: 30,
        right: 10,
        height: 55,
        backgroundColor: 'skyblue',
        borderRadius: 100,
    },
})
