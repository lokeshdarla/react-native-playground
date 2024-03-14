import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

var { width, height } = Dimensions.get('window')
export default function SearchScreen() {
  const navigation = useNavigation()
  const [results, setResults] = useState([1, 2, 3, 4, 5])
  return (
    <SafeAreaView className="flex-1 bg-neutral-900">
      <View className="flex-row items-center justify-between mx-4 mt-4 mb-3 border rounded-full border-neutral-400">
        <TextInput placeholder="Search Movie" placeholderTextColor={'lightgray'} className="flex-1 px-4 py-3 text-base font-semibold tracking-wider text-white" />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
          className="p-3 m-1 rounded-full bg-neutral-500"
        >
          <XMarkIcon color={'white'} size="25" />
        </TouchableOpacity>
      </View>
      {/* Results */}
      {results.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }} className="space-y-3">
          <Text className="ml-2 font-semibold text-white">Results ({results.length})</Text>
          <View className="flex-row flex-wrap justify-between">
            {results.map((result, index) => (
              <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('Movie', { index: 2 })}>
                <View className="mb-3 space-y-1">
                  <Image className="rounded-3xl" style={{ width: width * 0.44, height: height * 0.3 }} source={require('../assets/posters/moviePoster1.jpeg')} />
                  <Text className="ml-1 text-neutral-200">Avengers Endgame</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View className="items-center justify-center flex-1">
          <Image resizeMode="contain" style={{ width: width, height: height * 0.25, opacity: 40 }} source={require('../assets/search1.png')} />
        </View>
      )}
    </SafeAreaView>
  )
}
