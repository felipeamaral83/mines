import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './params'
import Field from './components/Field'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Campo Minado!</Text>
        <Text style={styles.instructions}>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <Field />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center'
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center'
  }
});
