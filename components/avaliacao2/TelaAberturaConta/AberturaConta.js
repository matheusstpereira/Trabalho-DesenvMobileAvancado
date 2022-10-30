import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Switch, Picker } from 'react-native';
import Slider from '@react-native-community/slider';
import { auth } from '../../../config/firebaseconfig';

export default function AberturaConta() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('Masculino');
  const [limite, setLimite] = useState('0');

  const [estudante, setEstudante] = useState(false);
  const toggleSwitch = () => setEstudante(previousState => !previousState);


  const validar = () => {
    if (nome == ''){
      return false
    } else if(idade == ''){
      return false
    } else if(limite == '0'){
      return false
    } else {
      return true
    }
  }

  const cadastro = () =>{
    if(validar()){
    alert('Conta Aberta com Sucesso' + '\n' + 
    'Nome: ' + nome + '\n' + 
    'Idade: ' + idade + '\n' + 
    'Genero: ' + genero + '\n' +
    'Limite: ' + limite + '\n' +
    'Estudante: ' + estudante);}
    else {alert('Favor preencher todos os campos corretamente')}
  }

  const resetar = () =>{
    setNome('');
    setIdade('');
    setGenero('Masculino');
    setLimite('0');
    setEstudante(false);
  }


  return (
    <View style={styles.formatacao}>
      <Text style={styles.titulo}>Cadastro do Banco</Text>
    
      <Text style={styles.subtitulo}>Nome:</Text>
      <TextInput style={styles.TextInput} onChangeText={text=>setNome(text)} />

      <Text style={styles.subtitulo}>Idade:</Text>
      <TextInput style={styles.TextInput} onChangeText={text=>setIdade(text)}/>

      <Text style={styles.subtitulo}>Genero:</Text>
      <Picker
        genero={genero}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}
      >
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
      </Picker>
      


      <Text style={styles.subtitulo}>Limite Conta: {limite}</Text>
      <Slider
        style={{width: 250, height: 40}}
        minimumValue={0}
        maximumValue={5000}
        minimumTrackTintColor='white'
        maximumTrackTintColor='black'
        thumbTintColor='white'
        onValueChange={value => setLimite(value)}
      />

      <Text style={styles.subtitulo}>Conta Estudante:</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor={estudante ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={estudante}
      />



      <TouchableOpacity style={styles.botaoCadastro} onPress={()=>cadastro()}>
        <Text style={{color:'red', textAlign: 'center'}}> Abrir Conta </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoResetar} onPress={()=>resetar()}>
        <Text style={{color:'gray', textAlign: 'center'}}> Resetar </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  formatacao: {
    flex: 1,
    backgroundColor: '#EB2C28',
    padding: 20
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
  TextInput:{
    width: '100%',
    height: 25,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10
  },
  botaoCadastro: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 15,
    justifyContent: 'center'
  },
  botaoResetar: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 15,
    justifyContent: 'center'
  }
});
