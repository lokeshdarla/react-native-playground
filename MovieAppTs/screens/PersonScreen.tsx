import { View, Text, TouchableOpacity, Dimensions, Platform, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import MovieList from '../components/MovieList'

const { width, height } = Dimensions.get('window')
const ios = Platform.OS == 'ios'
const topMargin = ios ? '' : ' mt-3'
export default function PersonScreen() {
  const navigation = useNavigation()
  const [fav, togglefav] = useState('white')
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
            <Image style={{ width: width * 0.5, height: width * 0.5, borderRadius: 100 }} source={require('../assets/cast1.jpeg')} />
          </View>
        </View>
        <View>
          <Text className="mt-2 text-3xl font-bold text-center text-white ">Tom Holland</Text>
          <Text className="text-lg font-bold text-center text-neutral-500 ">London,United States of America</Text>
        </View>
        <View className="flex-row items-center justify-between p-4 mx-4 mt-6 rounded-full bg-neutral-700">
          <View className="items-center px-2 border-r-2 border-r-neutral-400">
            <Text className="font-semibold text-white"> Gender</Text>
            <Text className="text-sm font-semibold text-neutral-200">Male</Text>
          </View>
          <View className="items-center px-2 border-r-2 border-r-neutral-400">
            <Text className="font-semibold text-white">Birthday</Text>
            <Text className="text-sm font-semibold text-neutral-200">2000-02-01</Text>
          </View>
          <View className="items-center px-2 border-r-2 border-r-neutral-400">
            <Text className="font-semibold text-white">Known for</Text>
            <Text className="text-sm font-semibold text-neutral-200">Acting</Text>
          </View>
          <View className="items-center px-2">
            <Text className="font-semibold text-white">Polularity</Text>
            <Text className="text-sm font-semibold text-neutral-200">90.123</Text>
          </View>
        </View>
        <View className="mx-4 my-6 space-y-2">
          <Text className="text-lg text-white">Biography</Text>
          <Text className="tracking-wide text-neutral-400">
            Thomas Stanley Holland is an English actor. His accolades include a British Academy Film Award and three Saturn Awards. He featured on the Forbes 30 Under 30 Europe list of 2019. Some
            publications have called him one of the most popular actors of his generation.Thomas Stanley Holland is an English actor. His accolades include a British Academy Film Award and three
            Saturn Awards. He featured on the Forbes 30 Under 30 Europe list of 2019. Some publications have called him one of the most popular actors of his generation.Thomas Stanley Holland is an
            English actor. Forbes 30 Under 30 Europe list of 2019. Some publications have called him one of the most popular actors of his generation. Thomas Stanley Holland is an English actor. His
            accolades include a British Academy Film Award and three Saturn Awards. He featured on the Forbes 30 Under 30 Europe list of 2019. Some publications have called him one of the most popular
            actors of his generation.Thomas Stanley Holland is an English actor. His accolades include a British Academy Film Award and three Saturn Awards. He featured on the Forbes 30 Under 30
            Europe list of 2019. Some publications have called him one of the most popular actors of his generation.Thomas Stanley Holland is an English actor. Forbes 30 Under 30 Europe list of 2019.
            Some publications have called him one of the most popular actors of his generation.
          </Text>
        </View>
        <MovieList title="Movies" hideSeeAll={true} data={[1, 2, 3, 4]} />
      </View>
    </ScrollView>
  )
}
