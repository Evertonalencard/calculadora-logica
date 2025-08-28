import React, {useState} from 'react';
import { View, TextInput, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Styles'

function TelaCalculadora({ }){
  return(
    <View style={styles.conteinerPricipal}>
      <View>
        
      </View>
      <View style = {styles.conjuntoDeBotoes}>
        <TouchableOpacity style = {styles.conteinerBotaoFuncao1}>  
          <Text style = {styles.conteinerTexto}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.conteinerBotaoFuncao1}>  
          <Text style = {styles.conteinerTexto}>)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TelaCalculadora;