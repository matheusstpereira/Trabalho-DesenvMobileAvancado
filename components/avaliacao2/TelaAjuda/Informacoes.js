import React, {useRef} from 'react';
import { Text, View, StyleSheet, Image, Animated } from 'react-native';
import { auth } from '../../../config/firebaseconfig';

export default function Informacoes() {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000
    }).start();
  };

  return (
    <View style={styles.formatacao}>
      <Text style={styles.titulo}>Bradesco Informações</Text>
      <Text style={styles.subtitulo}>Fundado em 10 de março de 1943 em Marília, em São Paulo, por Amador Aguiar.</Text>
    
      <Text style={styles.subtitulo}>Slogan: Reinvente o futuro</Text>
      <Text style={styles.subtitulo}>Valor de Mercado: R$ 284,05 bilhões (Jul/2019)</Text>
      <Text style={styles.subtitulo}>Antiga Logo Bradesco</Text>

      <Animated.Image style={[styles.logoAntiga, {opacity: fadeAnim}]} source={require('../../../assets/bradesco_old_logo.png')} onLoad={fadeIn}/>

    </View>
  );
}

const styles = StyleSheet.create({
  logoAntiga: {
    height: 180,
    width: 220,
    marginLeft: 10,
    marginTop: 10
  },
  formatacao: {
    flex: 1,
    backgroundColor: '#EB2C28',
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
  }
});
