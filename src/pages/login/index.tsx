import React, { useState } from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png'
import {MaterialIcons,AntDesign} from '@expo/vector-icons';
import { themas } from "../../global/themes";
export default function Login (){
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [loading,setloading] = useState(false)


   async function getlogin(){
    try {
        setloading(true)
        
        if(!email || !password){
            return Alert.alert('Atenção','Informe os campos obrigatórios!')
        }

        setTimeout(()=>{
            if(email == 'Biel.next@gmail.com' && password == '123456'){
                Alert.alert('Logado com sucesso!')
            }else{
                Alert.alert('Usuário não encontrado!')
            }
            setloading(false)
        },3000)

    } catch (error) {
        console.log(error)
    }
   }

    return (
        <View style = {style.container}>
              <View style = {style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
              </View>
              <View style = {style.boxMid}>
                 <Text style={style.titleInput}>Endereço de E-mail</Text>
                 <View style={style.boxInput}>
                    <TextInput 
                         style={style.input}
                         value={email}
                         onChangeText={setEmail}
                    />
                    <MaterialIcons 
                         name='email'
                         size={20}
                         color={themas.colors.gray}
                    />
                 </View>
                 <Text style={style.titleInput}>Senha</Text>
                 <View style={style.boxInput}>
                    <TextInput 
                         style={style.input}
                         value={password}
                         onChangeText={setPassword}
                    />
                    <MaterialIcons 
                         name='remove-red-eye'
                         size={20}
                         color={themas.colors.gray}
                    />
                 </View>
                 <TextInput />
              </View>
              <View style = {style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={()=>getlogin()}>
                    {
                       loading?
                           <ActivityIndicator color={'#ffff'} size={"small"}/>
                        :
                           <Text style={style.textButton}>Entrar</Text>
                    }
                </TouchableOpacity>
              </View>
              <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie agora!</Text></Text>
        </View>
    )
}