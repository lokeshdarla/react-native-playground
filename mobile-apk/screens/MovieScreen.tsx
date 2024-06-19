import { View, Text, TouchableOpacity, Dimensions, Platform, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../components/Cast'
import MovieList from '../components/MovieList'
import { fetchMovieCredits, fetchMovieDetails, fetchSimilarMovieDetails } from '../api/MovieDb'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../constants/types'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MovieDetails, Movie, Actor } from '../constants/constants'

const { width, height } = Dimensions.get('window')
const ios = Platform.OS == 'ios'
const topMargin = ios ? '' : ' mt-3'

type Props = NativeStackScreenProps<RootStackParamList, 'Movie'>
type ScreenNavigationProp = Props['navigation']
type ScreenRouteProp = Props['route']

const MovieScreen: React.FC<Props> = () => {
  const route = useRoute<ScreenRouteProp>()
  const [movie, setMovie] = useState<MovieDetails>()
  const [similar, setSimilar] = useState<Movie[]>([])
  const [cast, setCast] = useState<Actor[]>([])
  const navigation = useNavigation<ScreenNavigationProp>()
  const { MovieId } = route.params
  const [fav, togglefav] = useState('white')

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovieDetails(MovieId)
      setMovie(data)
      const similarData = await fetchSimilarMovieDetails(MovieId)
      setSimilar(similarData.results)
      const castData = await fetchMovieCredits(MovieId)
      setCast(castData.cast)
    }

    fetchData()
  }, [MovieId])

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
      <View className="w-full">
        <SafeAreaView className={`z-20 flex-row items-center justify-between w-full px-4 absolute ${topMargin}`}>
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-2 ml-2 bg-yellow-400 rounded-xl">
            <ChevronLeftIcon size="25" strokeWidth="2.5" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            className="p-2 mr-2"
            onPress={() => {
              if (fav == 'white') togglefav('red')
              else togglefav('white')
            }}
          >
            <HeartIcon size={35} strokeWidth={1} color={fav} />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image resizeMode="cover" style={{ width: width, height: height * 0.55 }} source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} />
          <LinearGradient
            colors={['transparent', 'rgba(23, 23, 23, 0.1)', 'rgba(23, 23, 23, 0.6)', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
            style={{ width: width, height: height * 0.4 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>

        <View style={{ marginTop: -height * 0.09 }} className="space-y-2">
          <Text className="text-3xl font-bold tracking-wider text-center text-white">{movie?.title}</Text>
          <Text className="text-base text-center text-neutral-200">
            Released · {movie?.release_date.slice(0, 4)} · {movie?.runtime} min
          </Text>
          <Text className="text-base text-center text-neutral-200">
            {movie?.genres.map((genre, index) => (
              <React.Fragment key={index}>
                {genre.name}
                {index !== movie.genres.length - 1 && ' - '}
              </React.Fragment>
            ))}
          </Text>

          <Text className="mx-4 tracking-wider text-neutral-300 text-start">{movie?.overview}</Text>
          <Cast cast={cast} />
          <MovieList title="Similar Movies" hideSeeAll={true} data={similar} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MovieScreen
