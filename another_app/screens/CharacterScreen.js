import React from 'react';
import { Image, SafeAreaView,StyleSheet } from 'react-native';

function ViewCharacterScreen(props) {
  return (
  <SafeAreaView style={styles.container}>
     <Image
    source={{uri:'https://w.forfun.com/fetch/d0/d003bd981cbf636a143f2aae5251f2d8.jpeg'}}
    style={styles.CharacterImage}/>
  </SafeAreaView> 
  
  );
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  CharacterImage:{
    height:'50%',
    width:'100%',
    resizeMode:'contain',
  }
})

export default ViewCharacterScreen;
