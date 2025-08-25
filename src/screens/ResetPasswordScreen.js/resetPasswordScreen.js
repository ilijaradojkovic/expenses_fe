import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TextInput, HelperText, Title, useTheme } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ResetPasswordImage from "assets/forgot-password.png";
import { Button } from "../../theme/customButton";
import { BORDER_RADII, FONT_SIZES, MARGINS, PADDINGS } from "../../theme/theme";
import { requestResetSchema } from "../../config/validationRules";


export default function ResetPasswordScreen() {
      const { colors } = useTheme();

        const styles = makeStyles(colors);
      
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(requestResetSchema),
     mode: "onChange"
  });

  const onSubmit = async (data) => {
    // Pozovi API ili parent handler
  
  };

  return (
    <View style={styles.container}>
       <Image source={ResetPasswordImage} style={styles.image} resizeMode="contain" />
        
      <Title style={styles.title}>Reset Password</Title>

      {/* Password */}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              label="New Password"
              value={value}
              onChangeText={onChange}
              secureTextEntry
              style={styles.input}
            />
            <HelperText type="error" visible={!!errors.password} style={styles.helper}>
              {errors.password?.message}
            </HelperText>
          </>
        )}
      />

      {/* Confirm Password */}
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              label="Confirm Password"
              value={value}
              onChangeText={onChange}
              secureTextEntry
              style={styles.input}
            />
            <HelperText
              type="error"
              visible={!!errors.confirmPassword}
              style={styles.helper}
            >
              {errors.confirmPassword?.message}
            </HelperText>
          </>
        )}
      />

      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        loading={isSubmitting}
        style={styles.button}
      >
        Reset Password
      </Button>
    </View>
  );
}

export const makeStyles = (colors) => ({
  container: {
    flex: 1,
    padding: PADDINGS.large,
    justifyContent: "center",
    backgroundColor: colors.background, // koristi boju iz teme

  },
  title: {
    textAlign: "center",
    fontSize: FONT_SIZES.xlarge,
    paddingBottom: PADDINGS.large,
    fontWeight: "bold",
    color: colors.onBackground,
  },
 
  helper: {
    marginTop: -MARGINS.tiny,
    marginBottom: MARGINS.small,
  },
   input: {
    marginBottom: MARGINS.regular,
    backgroundColor: colors.surface, // pozadina input polja
    color: colors.onSurface, // boja teksta
  },
  button: {
    marginTop: MARGINS.medium,
  },
    image: {
    width: "100%",
    height: "40%",
  },
});
