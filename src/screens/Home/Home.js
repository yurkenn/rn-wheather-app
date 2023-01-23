import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import style from './Home.style';
const Home = () => {
  const [search, setSearch] = useState('');
  const [data, loading, error, setCityName] = useFetch(Config.API_URL);

  const handleSearch = () => {
    setCityName(search);
  };

  return (
    <View style={style.container}>
      <Input
        placeholder="Enter City Name"
        value={search}
        onChangeText={text => setSearch(text)}
      />
      <Text
        style={{
          backgroundColor: 'black',
          color: 'white',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: 20,
        }}
        onPress={handleSearch}>
        Search
      </Text>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        {loading && <Text>Loading...</Text>}
        {error && <Text>{error}</Text>}
        {data && (
          <>
            <Text>
              {data.location?.city}, {data.location?.country} ,{' '}
              {data.location?.timezone_id}
            </Text>
            <Text>
              Tempature {data.current_observation.condition.temperature} ,
              {data.current_observation.condition.text}
            </Text>
            <Text>
              Humidity {data.current_observation.atmosphere.humidity} , Pressure{' '}
              {data.current_observation.atmosphere.pressure}
            </Text>
            <Text>
              Wind {data.current_observation.wind.speed} , Direction{' '}
              {data.current_observation.wind.direction}
            </Text>
            <Text>
              Visibility {data.current_observation.atmosphere.visibility}
            </Text>
            <Text>
              Sunrise {data.current_observation.astronomy.sunrise} , Sunset{' '}
              {data.current_observation.astronomy.sunset}
            </Text>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
