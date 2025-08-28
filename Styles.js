import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  conteinerPricipal:{
    backgroundColor: 'black',
    flex:1,
    padding: 50,
  },
  
  conteinerBotaoFuncao1:{
    backgroundColor: '#9c9c9c',
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  conteinerTexto:{
    color: 'white',
    fontSize: 15,
  },
  
  conjuntoDeBotoes:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100, 
    alignSelf: 'center', 
  }
});

export default styles;