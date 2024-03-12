// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, SafeAreaView,Alert, Image, TouchableOpacity, Button } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text numberOfLines={2}>
//         Hello World!,
//         Sunsets whisper secrets, birds compose symphonies, and shadows dance on forgotten paths, weaving tales of dreams into the night's embrace.
//       </Text>
//       <Image source={require('./assets/icon.png')} style={{ height: 100, width: 100 }} />
//         <Image
//             // blurRadius={10}
//             fadeDuration={3000}
//             style={{ height: 200, width: 400 }}
//             source={{
//               uri: 'https://img.freepik.com/free-photo/beautiful-shot-colorful-autumn-forest-full-different-kinds-plants_181624-12425.jpg?w=1480&t=st=1710181263~exp=1710181863~hmac=f17e946b3ae1effba837ea3c2d7777df9df1d12c9fc94bd4272a4dc32b7393c1',
//             }}
//         />
//       <TouchableOpacity style={styles.touchableContainer}>
//         <Text style={{ color: 'white', paddingHorizontal: 6,
//     paddingVertical: 3 }}>This is touchable</Text>
//       </TouchableOpacity>
//      <SafeAreaView>
//      <TouchableOpacity
      
//         style={styles.customButton}
//         onPress={() => Alert.alert(
//           "My Title",
//           "My Message",
//           [
//             { text: "Yes", onPress: () => console.log("Yes Pressed") },
//             { text: "Save Changes" }
//           ]
//         )}
       
//       ><Text style={{color:'white'}}>Click me</Text></TouchableOpacity>

//      </SafeAreaView>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   touchableContainer: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#222831',
//     borderRadius: 8,
//   },

//   customButton:{
//     marginTop:20,
//     backgroundColor:'#222831',
//     paddingHorizontal:30,
//     paddingVertical:15,
//     borderRadius:10,
//   }
  
// });


// import React from "react";
// import { View, StyleSheet,Text ,SafeAreaView} from 'react-native';

// export default function App() {
//   return (
  
//       <View style={{
//       backgroundColor:'#fff',
//       flex:1,
//       flexDirection:'row',
//       justifyContent:'center',
//       alignItems:'center',
//       flexWrap:'wrap',
//     }}>
//      <View style={{
//       backgroundColor:'dodgerblue',
//       width:100,
//       height:100,
//      }}/>
   
//       <View style={{
//       backgroundColor:'tomato',
//       width:100,
//       height:100,
//      }}/>
//      <View style={{
//       backgroundColor:'green',
//       width:100,
//       height:100,
//      }}/>
//       <View style={{
//       backgroundColor:'purple',
//       width:100,
//       height:100,
//      }}/>
//     </View>


//   );
// }


import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ViewCharacterScreen from './screens/CharacterScreen';
function App() {
  return (
    <ViewCharacterScreen/>
  );
}

export default App;
