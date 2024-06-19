import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { fetchMovieDetailsByName } from '../api/MovieDb'
import { Movie } from '../constants/constants'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../constants/types'

type Props = NativeStackScreenProps<RootStackParamList, 'Person'>
type ScreenNavigationProp = Props['navigation']

var { width, height } = Dimensions.get('window')
export default function SearchScreen() {
  const navigation = useNavigation<ScreenNavigationProp>()
  const [results, setResults] = useState<Movie[]>([])
  const [query, setQuery] = useState<string>('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchMovieDetailsByName(query)
        setResults(movieData)
      } catch (error) {
        console.error('Error fetching movie details: ', error)
      }
    }

    fetchData()
  }, [query])

  return (
    <SafeAreaView className="flex-1 bg-neutral-900">
      <View className="flex-row items-center justify-between mx-4 mt-4 mb-3 border rounded-full border-neutral-400">
        <TextInput
          onChangeText={setQuery}
          value={query}
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          style={{ flex: 1, paddingHorizontal: 25, paddingVertical: 3, fontSize: 16, fontWeight: 'bold', letterSpacing: 1, color: 'white' }}
        />
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
      {results?.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }} className="space-y-3">
          <Text className="ml-2 font-semibold text-white">Results ({results.length})</Text>
          <View className="flex-row flex-wrap justify-between">
            {results.map((movie, index) => (
              <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('Movie', { MovieId: movie?.id })}>
                <View className="mb-3 space-y-1">
                  <Image className="rounded-3xl" style={{ width: width * 0.44, height: height * 0.3 }} source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} />
                  <Text className="ml-1 text-neutral-200">{movie.title.length > 15 ? movie.title.slice(0, 15) + '...' : movie.title}</Text>
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
