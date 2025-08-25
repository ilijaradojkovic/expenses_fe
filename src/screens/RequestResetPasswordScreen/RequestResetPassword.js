import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TextInput, HelperText, Title, useTheme } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ResetPasswordImage from "assets/forgot-password.png";
import { Button } from "../../theme/customButton";
import { BORDER_RADII, FONT_SIZES, MARGINS, PADDINGS } from "../../theme/theme";


export default function RequestResetPasswordScreen() {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(requestResetSchema),
    mode: "onChange",
    defaultValues: { email: "" },
  });

  const onSubmit = async (data) => {
    // Ovde pozovi API koji šalje email za reset lozinke
    console.log("Reset request for email:", data.email);
    alert(`Reset link sent to ${data.email}`);
  };

  return (
    <View style={styles.container}>
      <Image source={ResetPasswordImage} style={styles.image} resizeMode="contain" />

      <Title style={styles.title}>Reset Password</Title>

      {/* EMAIL */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              label="Email"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
            <HelperText type="error" visible={!!errors.email} style={styles.helper}>
              {errors.email?.message}
            </HelperText>
          </>
        )}
      />

      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        loading={isSubmitting}
        disabled={!isValid}
        style={styles.button}
      >
        Send Reset Link
      </Button>
    </View>
  );
}

export const makeStyles = (colors) => ({
  container: {
    flex: 1,
    padding: PADDINGS.large,
    justifyContent: "center",
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
    marginBottom: MARGINS.regular,
    backgroundColor: colors.surface,
    color: colors.onSurface,
  },
  helper: {
    marginTop: -MARGINS.tiny,
    marginBottom: MARGINS.small,
  },
  button: {
    marginTop: MARGINS.medium,
  },
  image: {
    width: "100%",
    height: "40%",
  },
});
