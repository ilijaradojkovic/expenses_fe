import React, { useEffect } from "react";
import { View, Image, Alert } from "react-native";
import { TextInput, Text, useTheme, HelperText } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import RegisterImage from "assets/register.png";
import { Button } from "../../theme/customButton";
import { BORDER_RADII, FONT_SIZES, MARGINS, PADDINGS } from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { registerSchema } from "../../config/validationRules";
import { resetErrorText } from "../../redux/userSlice";
import { registerUser } from "../../services/authService";

export default function RegisterScreen() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(resetErrorText());
  }, [dispatch]);

  const onSubmit = (data) => {
    console.log("Register podaci:", data);
    dispatch(registerUser({
      email:data.email,
      password:data.password,
      username:data.username
    }));
    Alert.alert("Success", "Confirm your email and login");
    reset({
      email: "",
      password: "",
      confirmPassword: "",
      username:""
    });
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={RegisterImage} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>Register</Text>
      {error && (
        <HelperText
          type="error"
          style={[styles.helper, styles.errorScreenText]}
        >
         {error.message}
        </HelperText>
      )}

       {/* USERNAME */}
      <Controller
        control={control}
        name="username"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              label="Username"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize="none"
              style={styles.input}
            />
            {errors.username && (
              <HelperText type="error" style={styles.helper}>
                {errors.username.message}
              </HelperText>
            )}
          </>
        )}
      />
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
        loading={loading}
        disabled={loading}
      >
                {loading ? "" : "Register"}

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
  errorScreenText: {
    textAlign: "center",
    backgroundColor: colors.errorContainer,
    color: colors.error,
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
