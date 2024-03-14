import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')

interface TrendingMoviesProps {
  data: number[]
}

const TrendingMovies: React.FC<TrendingMoviesProps> = ({ data }) => {
  const [trending, setTrending] = useState<number[]>([1, 2, 3])
  const navigation = useNavigation()

  const handleClick = (index: number) => {
    navigation.navigate('Movie', { index: index })
    console.log('You clicked here')
  }

  const MovieCard = ({ data, handleClick }: { data: number; handleClick: (index: number) => void }) => {
    return (
      <TouchableWithoutFeedback onPress={() => handleClick(data)}>
        <View>
          <Image resizeMode="cover" style={{ width: width * 0.6, height: height * 0.4 }} source={require('../assets/posters/moviePoster1.jpeg')} />
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View style={{ marginBottom: 8 }}>
      <Text style={{ marginLeft: 5, marginBottom: 4, fontSize: 20, color: 'white' }}>Trending Movies</Text>
      <Carousel
        data={trending}
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
