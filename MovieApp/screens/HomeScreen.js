import React, { useState } from 'react';
import { Platform, SafeAreaView,StatusBar,Text ,View,TouchableOpacity, ScrollView} from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import TrendingMovies from '../components/trendingMovies';

const ios=Platform.OS=='ios';


export default function HomeScreen() {
  const [trending,setTrending]=useState([1,2,3])
  return (
    <View className="flex-1 bg-neutral-900">
      <Text>Home Screen</Text>
      <SafeAreaView className={ios?"-mb-2":"mb-3"}>
          <StatusBar style="light" />
          <View className="flex-row items-center justify-between mx-4">
            <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white"/>
            <Text
            className="text-3xl font-bold text-white">
              <Text className="text-[#EE4266]">M</Text>ovies
            </Text>
            <TouchableOpacity>
              <MagnifyingGlassIcon size={30} strokeWidth={2} color="white"/>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:10}}
      >
        <TrendingMovies data={trending} />
      </ScrollView>
    </View>
  );
}
