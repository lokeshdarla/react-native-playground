import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');

class TrendingMovies extends Component {
  constructor(props) {
    super(props);

    // Initialize state using this.state
    this.state = {
      trending: [1, 2, 3],
    };
  }

  _renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback onPress={() => console.log(`Clicked on item ${index}`)}>
        <View style={{ alignItems: 'center' }}>
          <Image
            className="rounded-xl"
            source={require('../assets/posters/moviePoster1.jpeg')}
            style={{ width: width * 0.33, height: height, borderRadius: 5 }}
            resizeMode="contain"
          />
          <Text style={{ color: 'white' }}>{item}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    const { trending } = this.state;
    const sliderWidth = 600;
    const itemWidth = 400;

    return (
      <View style={{ marginBottom: 8 }}>
        <Text style={{ marginLeft: 5, marginBottom: 5, fontSize: 20, color: 'white' }}>Trending Movies</Text>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={trending} // Use state variable instead of props
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          slideStyle={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}
        />
      </View>
    );
  }
}

export default TrendingMovies;
