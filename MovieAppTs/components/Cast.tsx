import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Actor } from '../constants/constants'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../constants/types'

type Props = NativeStackScreenProps<RootStackParamList>
type ScreenNavigationProp = Props['navigation']

interface CastProps {
  cast: Actor[]
}

const { width, height } = Dimensions.get('window')

const Cast: React.FC<CastProps> = ({ cast }) => {
  const navigation = useNavigation<ScreenNavigationProp>()
  return (
    <View className="my-6 ">
      <Text className="mx-4 mb-5 text-lg text-white">Cast</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
        {cast &&
          cast.map((actor, index) => {
            return (
              <TouchableOpacity key={index} className="items-center mr-4" onPress={() => navigation.navigate('Person', { PersonId: actor.id })}>
                <Image style={{ width: width * 0.275, height: width * 0.275, borderRadius: 100 }} source={{ uri: `https://image.tmdb.org/t/p/w500${actor?.profile_path}` }} />
                <Text className="mt-2 text-xs text-white">{actor.name}</Text>
                <Text className="text-xs text-neutral-400 ">{actor.character}</Text>
              </TouchableOpacity>
            )
          })}
      </ScrollView>
    </View>
  )
}

export default Cast
