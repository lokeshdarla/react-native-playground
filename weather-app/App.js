import React, { useState } from 'react';
import { StatusBar, Image, SafeAreaView, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { MagnifyingGlassIcon,MapPinIcon } from 'react-native-heroicons/outline';

const App = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [locations, setLocations] = useState([
    'Amaravati India', 'Hyderabad India', 'Bangalore India', 'Mumbai India'
  ]);
  const [selectedLocation,setSelectLocation]=useState('');

  
  const handleLocation=(loc)=>{
    console.log(`Selected Location: ${loc}`);
  }

  const handleToggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <View className="relative flex-1">
      <StatusBar style='light' />
      <Image
        blurRadius={40}
        source={{ uri: 'https://www.bhmpics.com/downloads/blue-green-wallpaper-/19.3321278.jpg' }}
        className="absolute flex-1 w-full h-screen"
      />
       <SafeAreaView className="absolute top-0 bottom-0 left-0 right-0 z-100">
      <View className="px-8">
      <View className={`flex-row p-1 mt-16 rounded-full justify-end ${isSearchActive ? 'bg-white' : ''}`}>
       {isSearchActive && (
              <TextInput
              className="flex-1 px-10 ml-4 text-base text-gray-600"
              placeholder='Search City'
              placeholderTextColor='gray'
              />
        )}
        
          
          <TouchableOpacity
            onPress={handleToggleSearch}
            className="relative p-3 bg-gray-200 rounded-full "
          >
            <MagnifyingGlassIcon size={20} color={isSearchActive ? 'blue' : 'black'} />
          </TouchableOpacity>
      </View>
   
        {locations.length !== 0 && isSearchActive && (
          <View className="z-50 py-2 mt-2 bg-white blur-xl rounded-3xl">
            {locations.map((location, index) => (
              <TouchableOpacity
                onPress={() => { handleLocation(location) }}
                key={index} className='border-b-0.5 rounded-3xl'
              >
                <Text key={index} className="px-8 py-3 text-gray-900 text-start ">
                  <MapPinIcon size={20} color={'gray'} /> {location}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </SafeAreaView>
      <View className="fixed flex-col items-center justify-center flex-1 gap-16 mb-2">
        <Text className="flex text-3xl text-white">
             London,
              <Text className="text-2xl text-gray-300 ">United Kingdom</Text>
        </Text>
        <Image
          className="rounded-full"
          source={{uri:'https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/main/Weather%20App/assets/snow.png'}}
          height={200}
          width={200}
        />
        <Text className="text-6xl font-bold text-center text-white">
          23&#176;
        </Text>
        <Text className="text-xl font-bold text-center text-gray-200">
          Partly Cloudy
        </Text>
        <View className="flex-row justify-between px-5 w-96">
            <View className="flex-row items-center justify-center space-x-2">
              <Image
                source={require('./assets/mist.png')}
                style={{ height: 50, width: 50 }}
              />
              <Text className="text-gray-200">25 km</Text>
            </View>
            <View className="flex-row items-center justify-center gap-5 space-x-2">
              <Image
                source={require('./assets/cloud.png')}
                style={{ height: 50, width: 50 }}
              />
              <Text className="text-gray-200">25 km</Text>
            </View>
            <View className="flex-row items-center justify-center gap-5 space-x-2">
              <Image
                source={require('./assets/rain.png')}
                style={{ height: 50, width: 50 }}
              />
              <Text className="text-gray-200">25 km</Text>
            </View>
        </View>     
      </View>
    </View>
  );
};

export default App;
