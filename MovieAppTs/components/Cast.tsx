import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

interface CastProps {
  cast: number[]
}

const { width, height } = Dimensions.get('window')

const Cast: React.FC<CastProps> = ({ cast }) => {
  const navigation = useNavigation()
  return (
    <View className="my-6 ">
      <Text className="mx-4 mb-5 text-lg text-white">Top Cast</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
        {cast &&
          cast.map((key, index) => {
            return (
              <TouchableOpacity key={index} className="items-center mr-4" onPress={() => navigation.navigate('Person', { index: 2 })}>
                <Image style={{ width: width * 0.275, height: width * 0.275, borderRadius: 100 }} source={require('../assets/cast1.jpeg')} />
                <Text className="mt-2 text-xs text-white">Tom Holland</Text>
                <Text className="text-xs text-neutral-400 ">Spider Man</Text>
              </TouchableOpacity>
            )
          })}
      </ScrollView>
    </View>
  )
}

export default Cast
