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
          <Text style = {styles.conteinerTexto}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.conteinerBotaoFuncao1}>  
          <Text style = {styles.conteinerTexto}>V</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.conteinerBotaoFuncao1}>  
          <Text style = {styles.conteinerTexto}>F</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.conteinerBotaoFuncao1}>  
          <Text style = {styles.conteinerTexto}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.conteinerBotaoFuncao1}>  
          <Text style = {styles.conteinerTexto}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.conteinerBotaoFuncao1}>  
          <Text style = {styles.conteinerTexto}>Dell</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.conjuntoDeBotoes}>
        <TouchableOpacity style = {styles.conteinerBotaoFuncao1}>  
          <Text style = {styles.conteinerTexto}>A</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.conteinerBotaoFuncao1}>  
          <Text style = {styles.conteinerTexto}>B</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.conteinerBotaoFuncao1}>  
          <Text style = {styles.conteinerTexto}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.conteinerBotaoFuncao1}>  
          <Text style = {styles.conteinerTexto}>D</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.conteinerBotaoFuncao1}>  
          <Text style = {styles.conteinerTexto}>E</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.conteinerBotaoFuncao1}>  
          <Text style = {styles.conteinerTexto}>-{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TelaCalculadora;