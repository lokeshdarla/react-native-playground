import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import MovieScreen from '../screens/MovieScreen'
import PersonScreen from '../screens/PersonScreen'
import SearchScreen from '../screens/SearchScreen'

const Stack = createNativeStackNavigator()

export type RootStackParamList = {
  Home: undefined
  Movie: { MovieId: number }
}

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Movie" options={{ headerShown: false }} component={MovieScreen} initialParams={{ index: 0 }} />
        <Stack.Screen name="Person" options={{ headerShown: false }} component={PersonScreen} initialParams={{ index: 0 }} />
        <Stack.Screen name="Search" options={{ headerShown: false }} component={SearchScreen} initialParams={{ index: 0 }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
