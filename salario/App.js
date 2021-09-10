import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";
import Form from './src/components/Form';
import Button from './src/components/Button';
import Result from './src/components/Result';
export default function App() {
  const [nombre, setNombre] = useState(null);
  const [base, setBase] = useState(0);
  const [neto, setNeto] = useState(0);

  const [errorMessage, setErrorMessage] = useState("");

  const salarioneto = () => {
    if (nombre.trim() === '') {
      setErrorMessage("Ingrese su nombre");
    } else if (base <= 0) {
      setErrorMessage("Ingrese un salario base válido");
    } else {
      var salario = base - ((base * 0.03) + (base * 0.04) + (base * 0.05));
      setNeto(salario);
      setErrorMessage(null);
    }
  };

  return (
      <SafeAreaView style={styles.Header}>
      <View style = { styles.container }>
        <Text style={styles.HeadApp}>Calculo del salario neto</Text>
        <Form setNombre={setNombre} setBase={setBase} />
      </View>
        <Result
          nombre={nombre}
          base={base}
          neto={neto}
          errorMessage={errorMessage}
        />
        <Button salarioneto={salarioneto} />
      </SafeAreaView>

  );
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    height: 200,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    marginTop: 20,
  },
  HeadApp: {
    textAlign: 'center',
    marginTop: 15,
  }

});