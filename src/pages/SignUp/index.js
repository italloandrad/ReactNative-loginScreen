import React, {useState}from 'react';
import {View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import firebase from '../../services/firebaseConnection';

export default function Login({ changeStatus }){
  const [type, setTtype] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome,setNome] = useState('');

  function handleLogin(){
    
    if(type === 'login'){
        //Aqui faz se o login
        const user = firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user)=>{
          changeStatus(user.user.uid)
        })
        .catch((err) =>{
          console.log(err);
          alert('Ops parece que deu algum error');
          return;
        })
    }else{
     //Aqui cadastramos o usuario 
     const user = firebase.auth().createUserWithEmailAndPassword(email,password)
     .then((user)=>{
          changeStatus(user.user.uid)
     })
     .catch((err) =>{
      console.log(err);
      alert('Ops parece que algo está errado');
      return;
    })
    }

  }
return (
  
  <SafeAreaView style={styles.container}>   
      <View style={styles.areaTitle}>
        <Text style={styles.textPro}>PRO</Text>
        <Text style={styles.textFiler}>FILER</Text>
      </View>  
<View>

    <View>
        <Text style={styles.titulo}>Crie sua conta</Text>
        <Text style={styles.subtitulo}>Preencha o formulário</Text>
    </View>
    <View style={styles.icons}>  
    <TextInput
          placeholder="Nome"
          style={styles.input}
          value={nome}
          onChangeText={ (text) => setNome(text)}              
        />
        <MaterialIcons style={styles.icones}
          name="person"
          size={23}
          color='#696969' >    
        </MaterialIcons >
    </View>
    <View style={styles.icons}>  
    <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={ (text) => setEmail(text)}              
        />
        <MaterialIcons style={styles.icones}
          name="email"
          size={23}
          color='#696969' >    
        </MaterialIcons >
    </View>
    <View style={styles.icons}>
      <TextInput             
          placeholder="Senha"
          style={styles.input}
          value={password}
          onChangeText={ (text) => setPassword(text)}
      />
      <MaterialIcons style={styles.icones}
          name="lock"
          size={23}
          color='#696969' >       
      </MaterialIcons>
    </View>
    <View style={styles.icons}>
      <TextInput             
          placeholder="Confirmar Senha"
          style={styles.input}
          value={password}
          onChangeText={ (text) => setPassword(text)}
      />
      <MaterialIcons style={styles.icones}
          name="lock"
          size={23}
          color='#696969' >       
      </MaterialIcons>
    </View>
</View>
    

         <TouchableOpacity
          style={styles.handleLogin}
          onPress={handleLogin}
          >  
          <Text style={styles.loginText}>
            Cadastrar
          </Text>
            
          </TouchableOpacity>

  </SafeAreaView>
);
}





const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingVertical:30,
    backgroundColor: '#141c44',
    paddingHorizontal: 30,  
    justifyContent : 'space-between'
  },
  //TITULO1
  titulo:{
    textAlign: 'center',
    fontFamily:'BalooTamma2-Regular',
    color: '#FFF',
    fontSize:40,
  },
    //SUBTITULO1
    subtitulo:{
        textAlign: 'center',
        fontFamily:'BalooTamma2-Regular',
        color: '#FFF',
        fontSize:24,
      },
  //TITULO 
  areaTitle:{
    flexDirection:'row',
    justifyContent:'center'
  },
  //TITULO
  textPro:{
    fontSize:60,
    color:'#4c48ee',
    fontFamily:'baloo-bhai',
  },
  //TITULO
  textFiler:{
    fontSize:60,
    color:'#ffffff',
    fontFamily:'baloo-bhai',
  },
//TEXTOLOGIN
loginText:{
  color: '#FFF',
  fontSize:48,
  fontFamily:'baloo-bhai',
}, 
//TEXTOCADASTRAR
cadastroText:{
  textAlign: 'center',
  fontFamily:'BalooTamma2-Regular',
  color: '#A9A9A9',
  fontSize: 30,
  paddingBottom: 30,    
},
//BOTAO LOGIN
handleLogin:{
  alignItems: 'center',   
  backgroundColor: '#239FDB',
  borderRadius:25,
  height: 65,   
  marginBottom: 30,   
},
// ICONES
icones:{
  position: 'absolute',
  paddingTop:13,
  paddingLeft:30
},
  input:{
    marginBottom: 10,
    backgroundColor: '#FFF',
    fontSize:20,
    borderRadius: 25,
    textAlign:'center',
    justifyContent:'center',
    height: 50,
    padding: 10,
    borderWidth: 3,
    borderColor: '#239FDB',
    textAlign: 'center',  
  },
})