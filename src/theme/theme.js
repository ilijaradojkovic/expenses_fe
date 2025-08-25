import { DefaultTheme } from "react-native-paper";

// Palete boja
const theme = "light";
const lightPalette = {
 
    primary: "rgb(0, 95, 175)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(212, 227, 255)",
    onPrimaryContainer: "rgb(0, 28, 58)",
    secondary: "rgb(0, 103, 131)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(188, 233, 255)",
    onSecondaryContainer: "rgb(0, 31, 42)",
    tertiary: "rgb(126, 72, 149)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(248, 216, 255)",
    onTertiaryContainer: "rgb(50, 0, 71)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(253, 252, 255)",
    onBackground: "rgb(26, 28, 30)",
    surface: "rgb(253, 252, 255)",
    onSurface: "rgb(26, 28, 30)",
    surfaceVariant: "rgb(224, 226, 236)",
    onSurfaceVariant: "rgb(67, 71, 78)",
    outline: "rgb(116, 119, 127)",
    outlineVariant: "rgb(195, 198, 207)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(47, 48, 51)",
    inverseOnSurface: "rgb(241, 240, 244)",
    inversePrimary: "rgb(165, 200, 255)",
    elevation: {
      level0: "transparent",
      level1: "rgb(240, 244, 251)",
      level2: "rgb(233, 239, 249)",
      level3: "rgb(225, 235, 246)",
      level4: "rgb(223, 233, 245)",
      level5: "rgb(218, 230, 244)",
    },
    surfaceDisabled: "rgba(26, 28, 30, 0.12)",
    onSurfaceDisabled: "rgba(26, 28, 30, 0.38)",
    backdrop: "rgba(45, 49, 56, 0.4)",
 
};
  
 const darkPalette = {

    primary: "rgb(165, 200, 255)",
    onPrimary: "rgb(0, 49, 95)",
    primaryContainer: "rgb(0, 71, 134)",
    onPrimaryContainer: "rgb(212, 227, 255)",
    secondary: "rgb(99, 211, 255)",
    onSecondary: "rgb(0, 53, 69)",
    secondaryContainer: "rgb(0, 77, 99)",
    onSecondaryContainer: "rgb(188, 233, 255)",
    tertiary: "rgb(235, 178, 255)",
    onTertiary: "rgb(75, 23, 99)",
    tertiaryContainer: "rgb(100, 48, 123)",
    onTertiaryContainer: "rgb(248, 216, 255)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(26, 28, 30)",
    onBackground: "rgb(227, 226, 230)",
    surface: "rgb(26, 28, 30)",
    onSurface: "rgb(227, 226, 230)",
    surfaceVariant: "rgb(67, 71, 78)",
    onSurfaceVariant: "rgb(195, 198, 207)",
    outline: "rgb(141, 145, 153)",
    outlineVariant: "rgb(67, 71, 78)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(227, 226, 230)",
    inverseOnSurface: "rgb(47, 48, 51)",
    inversePrimary: "rgb(0, 95, 175)",
    elevation: {
      level0: "transparent",
      level1: "rgb(33, 37, 41)",
      level2: "rgb(37, 42, 48)",
      level3: "rgb(41, 47, 55)",
      level4: "rgb(43, 49, 57)",
      level5: "rgb(46, 52, 62)",
    },
    surfaceDisabled: "rgba(227, 226, 230, 0.12)",
    onSurfaceDisabled: "rgba(227, 226, 230, 0.38)",
    backdrop: "rgba(45, 49, 56, 0.4)",
  
};


  
export const FONT_SIZES = {
  small: 12,
  regular: 15,
  medium: 18,
  large: 22,
  xlarge: 28,
};

export const BORDER_RADII = {
  tiny: 1,
  small: 6,
  medium: 12,
  large: 20,
  pill: 25,
};

export const PADDINGS = {
  small: 4,
  regular: 8,
  large: 16,
};

export const MARGINS = {
  tiny: 4,
  small: 8,
  regular: 12,
  medium: 16,
  large: 24,
  xlarge: 32,
  xxlarge: 40,
};

  // Funkcija koja vraća boju po imenu i temi
  export function getPrimarycolor() {
    if (theme === "dark") {
      return darkPalette['primary'];
    }
    return lightPalette['primary'];
  }

    export function getSecondaryColor() {
    if (theme === "dark") {
      return darkPalette['secondary'];
    }
    return lightPalette['secondary'];
  }
  
  export function getGreenColor() {
    if (theme === "dark") {
      return darkPalette['greenPrimary'];
    }
    return lightPalette['greenPrimary'];
  }
  

  
export function createTheme(themeMode) {
  const palette = themeMode === "dark" ? darkPalette : lightPalette;

  return {
    ...DefaultTheme,
    colors:palette, // sekundarna boja
    
    roundness: BORDER_RADII.tiny,
    
  };
}
