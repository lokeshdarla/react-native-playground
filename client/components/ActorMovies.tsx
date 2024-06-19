import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { ActorMovie, Movie } from '../constants/constants'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../constants/types'
import { useNavigation } from '@react-navigation/native'

type Props = NativeStackScreenProps<RootStackParamList>
type ScreenNavigationProp = Props['navigation']

interface MovieListProps {
  title: string
  data: ActorMovie[]
  hideSeeAll?: boolean
}

const { width, height } = Dimensions.get('window')

const ActorMovieList: React.FC<MovieListProps> = ({ title, data, hideSeeAll }) => {
  const navigation = useNavigation<ScreenNavigationProp>()
  const handlePress = (movieId: number) => {
    navigation.push('Movie', { MovieId: movieId })
  }

  return (
    <View className="mb-4">
      <View className="flex-row items-center justify-between mx-4">
        <Text className="text-xl text-white">{title}</Text>
        <TouchableOpacity>
          <Text className="text-lg text-yellow-500">{hideSeeAll ? '' : 'See All'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
        {data?.map((movie, index) => (
          <TouchableWithoutFeedback key={index} onPress={() => handlePress(movie.id)}>
            <View className="my-4 mr-4">
              <Image resizeMode="cover" style={{ width: width * 0.32, height: height * 0.2, borderRadius: 20 }} source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />
              <Text className="ml-1 text-center text-gray-200">{movie.title.length > 14 ? movie.title.slice(0, 14) + '...' : movie.title}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  )
}

export default ActorMovieList
