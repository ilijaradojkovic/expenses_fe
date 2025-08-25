import React, { useState } from "react";
import { View, StyleSheet, Alert, Image, Pressable } from "react-native";
import {
  TextInput,
  Title,
  ActivityIndicator,
  Text,
  useTheme,
  HelperText,
} from "react-native-paper";
import { login, loginUser } from "../../services/authService";
import { useDispatch } from "react-redux";
import LoginImage from "assets/login.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { Button } from "../../theme/customButton";
import { BORDER_RADII, FONT_SIZES, MARGINS, PADDINGS } from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { loginSchema } from "../../config/validationRules";

export default function LoginScreen({ onLogin }) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange", // validacija u realnom vremenu
  });

  const dispatch = useDispatch();
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  const navigation = useNavigation();

  const onSubmit = (data) => {
    console.log("Podaci sa forme:", data);
    dispatch(loginUser(data));
  };

  return (
    <View style={styles.container}>
      <Image source={LoginImage} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>Login</Text>

      {/* EMAIL */}
      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              label="Email"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.input}
            />
            {errors.email && (
              <HelperText type="error" style={styles.helper}>
                {errors.email.message}
              </HelperText>
            )}
          </>
        )}
      />

      {/* PASSWORD */}
      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              label="Lozinka"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry
              style={styles.input}
            />
            {errors.password && (
              <HelperText type="error" style={styles.helper}>
                {errors.password.message}
              </HelperText>
            )}
          </>
        )}
      />

      <Text
        style={styles.supportText3}
        onPress={() => navigation.navigate("RequestResetPassword")}
      >
        Forgot Password?
      </Text>

      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
      >
        Login
      </Button>

      <Text style={styles.supportText1}>Or login with</Text>

      <View style={styles.oauthButtonWrapper}>
        <View style={styles.oauthButton}>
          <AntDesign name="google" size={24} color="black" />{" "}
        </View>
        <View style={styles.oauthButton}>
          <FontAwesome name="facebook-f" size={24} color="black" />
        </View>
        <View style={styles.oauthButton}>
          <Entypo name="linkedin" size={24} color="black" />
        </View>
      </View>

      <Text style={styles.supportText1}>
        Don’t have an account?
        <Text
          style={styles.supportText2}
          onPress={() => navigation.navigate("Register")}
        >
          {" "}
          Register now!
        </Text>
      </Text>
    </View>
  );
}

export const makeStyles = (colors) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.background, // koristi boju iz teme
  },
  title: {
    textAlign: "center",
    fontSize: FONT_SIZES.xlarge,
    paddingBottom: PADDINGS.large,
    fontWeight: "bold",
    color: colors.onBackground, // boja teksta iz teme
  },
  input: {
    marginBottom: MARGINS.regular,
    backgroundColor: colors.surface, // pozadina input polja
    color: colors.onSurface, // boja teksta
  },
  helper: {
    marginTop: -10, // smanji razmak iznad error teksta
  },
  button: {
    marginTop: 20,
  },
  supportText1: {
    textAlign: "center",
    marginVertical: MARGINS.regular,
    color: colors.onBackground,
  },

  supportText3: {
    color: colors.secondary, // link boja iz teme
    textAlign: "right",
    opacity: 0.7,
    marginBottom: MARGINS.regular,
  },
  supportText2: {
    color: colors.primary, // link boja iz teme
  },
  oauthButtonWrapper: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: MARGINS.regular,
  },
  oauthButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDER_RADII.medium,
    borderColor: colors.onBackground, // border prati temu
    borderWidth: 1,
    width: "30%",
    paddingHorizontal: PADDINGS.regular,
    paddingVertical: PADDINGS.regular,
  },
  image: {
    width: "100%",
    height: "40%",
  },
});
