import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Informacoes from './Informacoes';
import { auth } from '../../../config/firebaseconfig';

export default function Ajuda() {

  return (
    <View style={styles.formatacao}>
      <Text style={styles.titulo}>Ajuda</Text>
      <Text style={styles.subtitulo}>Fale Conosco caso ainda necessite de auxilio</Text>
    
      <Text style={styles.subtitulo}>Telefone SAC: 0800 704 8383</Text>
      <Text style={styles.subtitulo}>Telefone Deficiência Auditiva: 0800 722 0099</Text>
      <Text style={styles.subtitulo}>Ouvidoria: 0800 727 9933</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  formatacao: {
    flex: 1,
    backgroundColor: '#EB2C28'
  },
  titulo: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15
  },
  subtitulo: {
    color: 'white',
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 15,
    marginLeft: 10
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  }
});
