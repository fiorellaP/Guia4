import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const Form = ({ setNombre, setBase }) => {

    return(
        <View style = { styles.formContainer } >
            <TextInput
            style = { styles.input }
            placeholder = 'Escriba su nombre'
            onChange = { e => setNombre(e.nativeEvent.text) }
            />
            <TextInput
            style = { styles.input }
            placeholder = 'Escriba su salario base'
            keyboardType = 'numeric'
            onChange = { e => setBase(e.nativeEvent.text) }
            />
      </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
      display: 'flex',
    },
    input: {
      height: 40,
      backgroundColor: 'white',
      marginHorizontal: '10%',
      marginVertical: '2.5%',
      padding: 8,
      fontSize: 16,
    },
  });
  

export default Form;