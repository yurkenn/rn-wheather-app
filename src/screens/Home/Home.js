import {View, Text} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
const Home = () => {
  const {data, loading, error, setCityName} = useFetch(Config.API_URL);
  console.log(data);

  return (
    <View>
      <Input placeholder={'Enter City Name'} />
    </View>
  );
};

export default Home;
