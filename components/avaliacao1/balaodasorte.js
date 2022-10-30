import React, {useRef} from 'react';
import { Text, View, StyleSheet, Image, Animated } from 'react-native';
import sizes from '../Styles/sizes';
import styles from '../Styles/styles';
import { auth } from '../../config/firebaseconfig';

export default function BalaoDaSorte({situacao}) {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000
    }).start();
  };
  
  const Versiculos = [
    '"Que a Força esteja com você!"',
    '"Seus olhos podem te enganar, não confie neles.".',
    '"A capacidade de falar não torna você inteligente."',
    '"Sua falta de fé é irritante.',
    '"Sem dúvidas, maravilhosa a mente de uma criança é."',
    '"Seu foco determina sua realidade."'
  ];

  function GerarFraseAleatoria() {
    return Math.floor(Math.random() * (Versiculos.length - 0)) + 0;
  }
  
  return (
    <View style={styles.container1}>
      {situacao ? (
        <Animated.Image style={[{ width: sizes.larguraImg, height: sizes.alturaImg }, {opacity: fadeAnim}]} source={require('../../assets/balloon_green.jpg')} onLoad={fadeIn}/>
        )
        :(
          <View>
          <Image style={{ width: sizes.larguraImg, height: sizes.alturaImg }} source={require('../../assets/popped_balloon_green.jpg')}/>
          <Text style={{ fontSize: sizes.fonte }}>
            {Versiculos[GerarFraseAleatoria()]}
          </Text>
        </View>
      )}
    </View>
  );
}

