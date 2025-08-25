import React from "react";
import { View, Image, Alert } from "react-native";
import {
  TextInput,
  Text,
  useTheme,
  HelperText,
} from "react-native-paper";
import { useDispatch } from "react-redux";
import RegisterImage from "assets/register.png";
import { Button } from "../../theme/customButton";
import { BORDER_RADII, FONT_SIZES, MARGINS, PADDINGS } from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { registerSchema } from "../../config/validationRules";



export default function RegisterScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const dispatch = useDispatch();
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  const navigation = useNavigation();

  const onSubmit = (data) => {
    console.log("Register podaci:", data);
    // dispatch(registerUser(data));
    Alert.alert("Success", "Confirm your email and login");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={RegisterImage} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>Register</Text>

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
              label="Password"
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

      {/* CONFIRM PASSWORD */}
      <Controller
        control={control}
        name="confirmPassword"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              label="Confirm Password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry
              style={styles.input}
            />
            {errors.confirmPassword && (
              <HelperText type="error" style={styles.helper}>
                {errors.confirmPassword.message}
              </HelperText>
            )}
          </>
        )}
      />

      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
      >
        Register
      </Button>

      <Text style={styles.supportText1}>
        Already have an account?
        <Text
          onPress={() => navigation.navigate("Login")}
          style={styles.supportText2}
        >
          {" "}
          Login now!
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
    backgroundColor: colors.background,
  },
  title: {
    textAlign: "center",
    fontSize: FONT_SIZES.xlarge,
    paddingBottom: PADDINGS.large,
    fontWeight: "bold",
    color: colors.onBackground,
  },
  input: {
    marginBottom: 15,
    backgroundColor: colors.surface,
    color: colors.onSurface,
  },
  helper: {
    marginTop: -8, // smanjena margina za error text
    marginBottom: 8,
  },
  button: {
    marginTop: 20,
  },
  supportText1: {
    textAlign: "center",
    marginVertical: MARGINS.large,
    color: colors.onBackground,
  },
  supportText2: {
    color: colors.primary,
  },
  image: {
    width: "100%",
    height: "40%",
  },
});
