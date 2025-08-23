// Palete boja
const theme = "light";
const lightPalette = {
    primary: "#1976D2",     // Plava
    secondary: "#42A5F5",
    tertiary: "#90CAF9",
    quaternary: "#E3F2FD",
    quinary: "#FFFFFF",
    senary: "#B0BEC5",
    septenary: "#78909C",
    octonary: "#546E7A",
    nonary: "#1E88E5",
    denary: "#BBDEFB",
  
    // Zelene nijanse
    greenPrimary: "#90EE90",   // Glavna zelena

  };
  
  const darkPalette = {
    primary: "#0D47A1",     // Plava
    secondary: "#1565C0",
    tertiary: "#1976D2",
    quaternary: "#1E88E5",
    quinary: "#212121",
    senary: "#424242",
    septenary: "#616161",
    octonary: "#90CAF9",
    nonary: "#E3F2FD",
    denary: "#B0BEC5",
  
    // Zelene nijanse
    greenPrimary: "#2E7D32",   // Tamna zelena

  };


  // Funkcija koja vraća boju po imenu i temi
  export function getPrimarycolor() {
    if (theme === "dark") {
      return darkPalette['primary'];
    }
    return lightPalette['primary'];
  }
  
  export function getGreenColor() {
    if (theme === "dark") {
      return darkPalette['greenPrimary'];
    }
    return lightPalette['greenPrimary'];
  }
  
