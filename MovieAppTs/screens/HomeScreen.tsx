import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, StatusBar, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import TrendingMovies from '../components/TrendingMovies'
import MovieList from '../components/MovieList'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/Loading'
import { trendingMoviesEndPoint, upcomingMoviesEndPoint, topRatedMoviesEndPoint } from '../api/MovieDb'
const ios = Platform.OS === 'ios'
import axios from 'axios'
import { Movie, MoviesResponse } from '../constants/constants'
export default function HomeScreen() {
  const navigation = useNavigation()
  const [trending, setTrending] = useState<Movie[]>([])
  const [upcoming, setUpcoming] = useState<Movie[]>([])
  const [toprated, setToprated] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTrendingMovies()
    fetchupComingMovies()
    fetchtopRatedMovies()
  }, [])

  const fetchTrendingMovies = async () => {
    try {
      const response = await axios.get(trendingMoviesEndPoint)
      const data: MoviesResponse = response.data
      setTrending(data.results)
    } catch (error) {
      console.error('Error fetching trending movies:', error)
      return null
    }
  }

  const fetchupComingMovies = async () => {
    try {
      const response = await axios.get(upcomingMoviesEndPoint)
      const data: MoviesResponse = response.data

      setUpcoming(data.results)
    } catch (error) {
      console.error('Error fetching trending movies:', error)
      return null
    }
  }

  const fetchtopRatedMovies = async () => {
    try {
      const response = await axios.get(topRatedMoviesEndPoint)
      const data: MoviesResponse = response.data
      setToprated(data.results)
    } catch (error) {
      console.error('Error fetching trending movies:', error)
      return null
    }
  }
  return (
    <View className="flex-1 bg-black">
      <Text>Home Screen</Text>
      <SafeAreaView style={ios ? { marginBottom: -2 } : { marginBottom: 3 }}>
        <StatusBar barStyle="light-content" />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 4 }}>
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>
            <Text style={{ color: '#EE4266' }}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => fetchTrendingMovies()}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
          <TrendingMovies data={trending} />
          <MovieList title="Upcoming" data={upcoming} />
          <MovieList title="Top Rated" data={toprated} />
        </ScrollView>
      ) : (
        <Loading />
      )}
    </View>
  )
}
