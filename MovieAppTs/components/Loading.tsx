import { View, Dimensions } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress'

const { width, height } = Dimensions.get('window')

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Progress.CircleSnail size={80} color={'yellow'} indeterminate={true} />
    </View>
  )
}

}
