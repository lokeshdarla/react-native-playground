import React, { useState } from 'react'
import { Platform, SafeAreaView, StatusBar, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import TrendingMovies from '../components/TrendingMovies'
import MovieList from '../components/MovieList'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/loading'

const ios = Platform.OS === 'ios'

export default function HomeScreen() {
  const navigation = useNavigation()
  const [trending, setTrending] = useState<number[]>([1, 2, 3])
  const [upcoming, setUpcoming] = useState<number[]>([1, 2, 3, 4, 5, 6])
  const [toprated, setToprated] = useState<number[]>([1, 2, 3])
  const [loading, setLoading] = useState(true)
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
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
          <TrendingMovies data={trending} />
          <MovieList title="Upcoming" data={upcoming} />
          <MovieList title="Top Rated" data={upcoming} />
        </ScrollView>
      ) : (
        <Loading />
      )}
    </View>
  )
}
