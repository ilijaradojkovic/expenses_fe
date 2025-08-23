import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, IconButton, Menu, Text } from 'react-native-paper';

export default function Header() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const onOptionPress = () => {
    console.log('Options pressed');
    closeMenu();
  };

  const onLogoutPress = () => {
    console.log('Logout pressed');
    closeMenu();
  };

  return (
    <View style={styles.header}>
      {/* Hamburger ikonica */}
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={
          <IconButton
            icon="menu"
            size={28}
            onPress={openMenu}
          />
        }
      >
        <Menu.Item onPress={onOptionPress} title="Options" />
        <Menu.Item onPress={onLogoutPress} title="Logout" />
      </Menu>

      {/* Avatar */}
      <Avatar.Image 
        size={40} 
        source={{ uri: 'https://i.pravatar.cc/300' }} 
      />

      {/* Godina */}
      <Text style={styles.year}>2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  year: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    fontSize: 18,
    marginLeft: 'auto', // pomera desno
  },
});
