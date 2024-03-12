import React from 'react';
import { ImageBackground, StyleSheet, View, SafeAreaView, Image ,Text} from 'react-native';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <ImageBackground
        source={require('../assets/background.jpeg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.logoContent}>Avengers Assemble</Text>
        </View>

       
        <View style={styles.buttonContainer}>
          <View style={styles.loginButton}>
            {/* Add login button content here */}
          </View>
          <View style={styles.registerButton}>
            {/* Add register button content here */}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position:'relative',
    justifyContent:'flex-end'
  },
  logoContainer:
  {
    position:'absolute',
    top: 70,
    width:'100%',
    textAlign:'center',
  },
  logoContent:
  {
    color:'#fff',
    fontSize:15,
    textAlign:'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    height: 75,
    marginBottom:15,
    width: 'auto',
    resizeMode:'contain'
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
  loginButton: {
    height: 50,
    backgroundColor: '#fc5c65',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  registerButton: {
    height: 50,
    backgroundColor: '#5356FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default HomeScreen;
