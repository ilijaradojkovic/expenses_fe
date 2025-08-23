import React, { useState } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import { TextInput, Button, Title, ActivityIndicator } from "react-native-paper";
import { register, registerUser } from "../../services/authService";
import { useDispatch } from "react-redux";

export default function RegisterScreen({ onRegister }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch=useDispatch();

  const handleRegister = async () => {
    
dispatch(
  registerUser({
            'email':email,
            'password':password,
            'username':username
    })
  )
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Registracija</Title>
      <TextInput
        label="Ime"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
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
      <TextInput
        label="Potvrdi lozinku"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />

   
        <Button mode="contained" onPress={handleRegister} style={styles.button}>
          Registruj se
        </Button>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
  },
});
