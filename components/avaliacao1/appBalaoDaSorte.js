import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../Styles/MyButton';
import BalaoDaSorte from './balaodasorte';
import Colors from '../Styles/colors';
import styles from '../Styles/styles';
import { auth } from '../../config/firebaseconfig';

export default function AppBalaoDaSorte() {
  const [situacaoBalao, setSituacaoBalao] = useState(1);

  function estourarBalao() {
    setSituacaoBalao(0);
  }

  function resetar() {
    setSituacaoBalao(1);
  }

  return (
    <View style={styles.background}>
      <View style={styles.container2}>
        <View style={styles.img}>
          <BalaoDaSorte situacao={situacaoBalao} />
        </View>
        <View style={styles.botao}>
          <Button color={Colors.botao_estourar} title={'ESTOURAR O BALÃO'} onPress={estourarBalao}/>
          <Button color={Colors.botao_resetar} title={'RESETAR'} onPress={resetar}/>
        </View>
      </View>
    </View>
  );
}