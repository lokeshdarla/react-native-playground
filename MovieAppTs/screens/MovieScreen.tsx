import { View, Text, TouchableOpacity, Dimensions, Platform, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../components/Cast'
import MovieList from '../components/MovieList'

const { width, height } = Dimensions.get('window')
const ios = Platform.OS == 'ios'
const topMargin = ios ? '' : ' mt-3'
export default function MovieScreen() {
  const cast = [1, 2, 3, 4, 5]
  const { params: index } = useRoute()
  const [fav, togglefav] = useState('white')
  const navigation = useNavigation()
  const movieName = 'Avengers: Infinity War'
  useEffect(() => {
    //Call the api whenever index changes
  }, [index])
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
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
        <View className="mt-4">
          <Image resizeMode="contain" style={{ width: width, height: height * 0.55 }} source={require('../assets/posters/moviePoster1.jpeg')} />
          <LinearGradient
            colors={['transparent', 'rgba(23, 23, 23, 0.1)', 'rgba(23, 23, 23, 0.6)', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
            style={{ width: width, height: height * 0.4 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>

        <View style={{ marginTop: -height * 0.09 }} className="space-y-2">
          <Text className="text-3xl font-bold tracking-wider text-center text-white">{movieName}</Text>
          <Text className="text-base text-center text-neutral-200">Released · 2018 · 159min</Text>
          <Text className="text-base text-center text-neutral-200">Action · Suspense · Fantasy</Text>
          <Text className="mx-4 tracking-wider text-neutral-300 text-start">
            The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane
            plan.The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane
            plan.
          </Text>
          <Cast cast={cast} />
          <MovieList title="Similar Movies" hideSeeAll={true} data={cast} />
        </View>
      </View>
    </ScrollView>
  )
}
