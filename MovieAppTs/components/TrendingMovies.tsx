import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'
import { Movie } from '../constants/constants'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../constants/types'
const { width, height } = Dimensions.get('window')

interface TrendingMoviesProps {
  data: Movie[]
}

type Props = NativeStackScreenProps<RootStackParamList>
type ScreenNavigationProp = Props['navigation']

const TrendingMovies: React.FC<TrendingMoviesProps & ScreenNavigationProp> = ({ data }) => {
  const navigation = useNavigation<ScreenNavigationProp>()
  const handleClick = (index: number) => {
    navigation.push('Movie', { MovieId: index })
  }

  const MovieCard = ({ data, handleClick }: { data: Movie; handleClick: (index: number) => void }) => {
    const movie = data
    const posterUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
      <TouchableWithoutFeedback onPress={() => handleClick(movie.id)}>
        <View className="rounded-3xl">
          <Image resizeMode="cover" style={{ width: width * 0.6, height: height * 0.4, borderRadius: 30 }} source={{ uri: posterUri }} />
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View style={{ marginBottom: 8 }}>
      <Text style={{ marginLeft: 5, marginBottom: 4, fontSize: 20, color: 'white' }}>Trending Movies</Text>
      <Carousel
        data={data}
        inactiveSlideOpacity={0.6}
        renderItem={({ item }) => <MovieCard data={item} handleClick={handleClick} />}
        firstItem={1}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  )
}

export default TrendingMovies
