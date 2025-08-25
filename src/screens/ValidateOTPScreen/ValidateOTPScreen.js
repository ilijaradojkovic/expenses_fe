import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TextInput, HelperText, Title, useTheme } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import OTPImage from "assets/otp.png"; // neka ilustracija za OTP
import { Button } from "../../theme/customButton";
import { FONT_SIZES, MARGINS, PADDINGS } from "../../theme/theme";
import { otpSchema } from "../../config/validationRules";



export default function VerifyOTPScreen({ onVerify }) {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(otpSchema),
    mode: "onChange",
    defaultValues: { otp: "" },
  });

  const onSubmit = async (data) => {
    // Pozovi API za verifikaciju OTP-a
    console.log("Entered OTP:", data.otp);
    if (onVerify) await onVerify(data.otp);
  };

  return (
    <View style={styles.container}>
      {/* <Image source={OTPImage} style={styles.image} resizeMode="contain" /> */}
      <Title style={styles.title}>Verify OTP</Title>

      <Controller
        control={control}
        name="otp"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              label="Enter OTP"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="numeric"
              maxLength={6}
              style={styles.input}
            />
            <HelperText type="error" visible={!!errors.otp} style={styles.helper}>
              {errors.otp?.message}
            </HelperText>
          </>
        )}
      />

      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
        loading={isSubmitting}
        style={styles.button}
      >
        Verify
      </Button>
    </View>
  );
}

const makeStyles = (colors) => ({
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
    marginTop: -4,
    marginBottom: 8,
  },
  button: {
    marginTop: MARGINS.medium,
  },
  image: {
    width: "100%",
    height: "40%",
  },
});
