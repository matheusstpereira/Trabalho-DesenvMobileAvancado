import React, {useRef} from 'react';
import { Text, View, StyleSheet, Image, Animated } from 'react-native';
import { auth } from '../../../config/firebaseconfig';

export default function Inicio() {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000
    }).start();
  };

  return (
    <View style={styles.formatacao}>
      <Animated.Image style={[styles.logo, {opacity: fadeAnim}]} source={require('../../../assets/Bradesco-Logo.png')} onLoad={fadeIn}/>

      <Text style={styles.texto}>
      Entre nós, você vem primeiro !
      </Text>

      <Text style={styles.texto}>
      O Grupo Bradesco preparou ofertas especiais para você.
      </Text>

      <View style={styles.container}> 
      <Animated.Image  style={[styles.cards, {opacity: fadeAnim}]} source={require('../../../assets/cartaocredito.png')} onLoad={fadeIn}/>
      <Animated.Image  style={[styles.cards, {opacity: fadeAnim}]} source={require('../../../assets/seguro.png')} onLoad={fadeIn}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formatacao: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EB2C28'
  },
  logo: {
    height: 180,
    width: 220
  },
  texto: {
    paddingLeft: 50,
    color: 'white',
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 30,
    marginTop: 30,
    resizeMode: 'contain'
  },
  cards: {
    maxWidth:150,
    maxHeight:180,
    resizeMode: 'contain'
  },
  container: {
    marginTop: 30,
    flexDirection: 'row',
    resizeMode: 'contain'
  }
});
