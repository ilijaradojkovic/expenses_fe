import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Title, ActivityIndicator, Text } from "react-native-paper";
import { login, loginUser } from "../../services/authService";
import { useDispatch } from "react-redux";

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Greška", "Unesite email i lozinku!");
      return;
    }

    dispatch(loginUser({
        'email':email,
        'password':password
    }));
    

  };

  return (
    <View style={styles.container}>
       <Image
        source={require('./assets/auth-illustration.png')} // ubaci ilustraciju
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        label="Lozinka"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Prijavi se
        </Button>

        <Text style={styles.supportText1}>Or login with</Text>


      
        <View style={styles.oauthButtonWrapper}>
          <View style={styles.oauthButton}>
              <Text>Google</Text>
          </View>
          <View style={styles.oauthButton}>
              <Text>Google</Text>
          </View>
          <View style={styles.oauthButton}>
              <Text>Google</Text>
          </View>
        </View>

        <Text style={styles.supportText1}>Dont have an account?<Text style={styles.supportText2}>Register now!</Text></Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "left",
    marginBottom: 30,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    
  },
  supportText1:{
    textAlig:'center'
  },
  oauthButtonWrapper:{
      flexDirection:'row',
      gap:'5'
  },
  oauthButton:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3
  }
});
