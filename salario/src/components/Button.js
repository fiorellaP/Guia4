import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const Button = ({ salarioneto}) => {
    return(
        <View style = { styles.containerButtom }>
            <TouchableOpacity style = { styles.button } onPress = { salarioneto } >
                <Text style = { styles.text }>Calcular salario</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    containerButtom: {
        position: 'absolute',
        bottom: 0,
        justifyContent: "center",
        width: '100%',
        alignItems: 'center',
        height: 80,
        backgroundColor: 'white',
    },
    button: {
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 150,
        padding: 20,
        color: 'green',
        backgroundColor: 'lightgreen',
        fontSize: 20,
    },
  });

export default Button;