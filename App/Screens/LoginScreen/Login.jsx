import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container} >
     <Text style={styles.loginText}>Login</Text>

     <View>
        <TextInput 
        style={styles.userNameField}
        placeholder='Enter your usename'/>

<TextInput 
        style={styles.userNameField}
        placeholder='*******'/>
     </View>

     <View>
      <TouchableOpacity
      style={styles.loginButton}
      onPress={handleLogin}><Text style={styles.buttonText}> Login </Text></TouchableOpacity>
     </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
  },
    loginText:{
        fontSize:45,
        textAlign:'center',
        color:'#8AB800',
        fontWeight:700,
        marginBottom:30,

        
    },
    userNameField:{
        borderRadius:25,
        borderWidth:1,
        borderColor:'#E3E3E3FF',
        padding:20,
        // marginTop:10,
        marginBottom:20,
        width:300,
        height:60
    },
    loginButton:{
      backgroundColor:'#8ab800',
      borderRadius:25,     
      width:300 
    },
   buttonText:{
      padding:20,
      textAlign:'center',
      color:'#fff',
      fontWeight:600
    }
})