import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Result = ({ nombre, neto, base, errorMessage }) => {

    return(
        <View style = { styles.containerInfo }>
            <Text style = { styles.title }>Salario total</Text>
            <Resultados info = 'Nombre ' data={ nombre} />
            <Resultados info = 'Salario Base ' data={ `$${base}` } />
            <Resultados info = 'ISSS' data = '3%' />
            <Resultados info = 'AFP' data = '4%' />
            <Resultados info = 'RENTA' data = '5%' />
            <Resultados info = 'Salario Neto' data={ `$${neto}` } />
            <Text style = { styles.error }>{ errorMessage }</Text>
        </View>
    )
}

const Resultados = ( {info, data} ) => {
    return(
        <View style = { styles.info }>
            <Text style = { styles.text }>{ info }: </Text>
            <Text style = { styles.text }>{ data }</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    containerInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%',
      },
      title:{
          fontSize: 25,
          fontWeight: 'bold',
          marginBottom: 5,
      },
      text: {
          fontSize: 20,
          marginTop: 10,
      },
      error:{
        marginTop: 10,
        color: 'red',
        fontSize: 20,
      }
  });

export default Result;