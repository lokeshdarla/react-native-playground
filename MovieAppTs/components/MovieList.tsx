import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

interface MovieListProps {
  title: string
  data: number[]
}

const { width, height } = Dimensions.get('window')

const MovieList: React.FC<MovieListProps> = ({ title, data }) => {
  const movieName = 'Ant man and the wasp'
  const navigation = useNavigation()

  const handlePress = (index: number) => {
    navigation.navigate('Movie', { index: index })
  }

  return (
    <View className="mb-4">
      <View className="flex-row items-center justify-between mx-4">
        <Text className="text-xl text-white">{title}</Text>
        <TouchableOpacity>
          <Text className="text-lg text-yellow-500">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
        {data.map((item, index) => (
          <TouchableWithoutFeedback key={index} onPress={() => handlePress(item)}>
            <View className="my-4 mr-4">
              <Image resizeMode="cover" style={{ width: width * 0.32, height: height * 0.2, borderRadius: 20 }} source={require('../assets/posters/moviePoster1.jpeg')} />
              <Text className="ml-1 text-center text-gray-200">{movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  )
}

export default MovieList
