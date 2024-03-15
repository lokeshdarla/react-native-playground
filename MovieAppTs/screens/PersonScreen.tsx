import { View, Text, TouchableOpacity, Dimensions, Platform, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import MovieList from '../components/MovieList'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../constants/types'
import { Actor, ActorDetails, ActorMovie, Movie } from '../constants/constants'
import { fetchActorDetails, fetchActorMovies } from '../api/MovieDb'
import ActorMovieList from '../components/ActorMovies'

const { width, height } = Dimensions.get('window')

type Props = NativeStackScreenProps<RootStackParamList, 'Person'>
type ScreenNavigationProp = Props['navigation']
type ScreenRouteProp = Props['route']
const ios = Platform.OS == 'ios'
const topMargin = ios ? '' : ' mt-3'
export default function PersonScreen() {
  const navigation = useNavigation<ScreenNavigationProp>()
  const route = useRoute<ScreenRouteProp>()
  const [actor, setActor] = useState<ActorDetails>()
  const [movies, setMovies] = useState<ActorMovie[]>([])
  const { PersonId } = route.params
  const [fav, togglefav] = useState('white')

  useEffect(() => {
    const getActorDetails = async () => {
      try {
        const actorData = await fetchActorDetails(PersonId)
        setActor(actorData)
        const movieData = await fetchActorMovies(PersonId)
        setMovies(movieData)
      } catch (error) {
        setMovies([])
        console.error('Error fetching actor details:', error)
      }
    }

    // Call the function to fetch actor details
    getActorDetails()
  }, [PersonId])
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-black">
      <View className="w-full">
        <SafeAreaView className={`z-20 flex-row items-center justify-between w-full px-4 abosulte ${topMargin}`}>
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
      </View>
      <View>
        <View className="flex-row justify-center my-2 shadow-xl shadow-white">
          <View className="items-center p-2 overflow-hidden border rounded-full border-neutral-500">
            <Image style={{ width: width * 0.5, height: width * 0.5, borderRadius: 100 }} source={{ uri: `https://image.tmdb.org/t/p/w500${actor?.profile_path}` }} />
          </View>
        </View>
        <View>
          <Text className="mt-2 text-3xl font-bold text-center text-white ">{actor?.name}</Text>
          <Text className="text-lg font-bold text-center text-neutral-500 ">{actor?.place_of_birth}</Text>
        </View>
        <View className="flex-row items-center justify-between p-4 mx-4 mt-6 rounded-full bg-neutral-700">
          <View className="items-center px-2 border-r-2 border-r-neutral-400">
            <Text className="font-semibold text-white"> Gender</Text>
            <Text className="text-sm font-semibold text-neutral-200">{actor?.gender}</Text>
          </View>
          <View className="items-center px-2 border-r-2 border-r-neutral-400">
            <Text className="font-semibold text-white">Birthday</Text>
            <Text className="text-sm font-semibold text-neutral-200">{actor?.birthday}</Text>
          </View>
          <View className="items-center px-2 border-r-2 border-r-neutral-400">
            <Text className="font-semibold text-white">Known for</Text>
            <Text className="text-sm font-semibold text-neutral-200">{actor?.known_for_department}</Text>
          </View>
          <View className="items-center px-2">
            <Text className="font-semibold text-white">Polularity</Text>
            <Text className="text-sm font-semibold text-neutral-200">{actor?.popularity}</Text>
          </View>
        </View>
        <View className="mx-4 my-6 space-y-2">
          <Text className="text-lg text-white">Biography</Text>
          <Text className="tracking-wide text-neutral-400">{actor?.biography}</Text>
        </View>
        <ActorMovieList title="Movies" hideSeeAll={true} data={movies} />
      </View>
    </ScrollView>
  )
}
