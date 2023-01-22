import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cityName, setCityName] = useState('London');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            'X-RapidAPI-Key': Config.API_KEY,
            'X-RapidAPI-Host': Config.API_HOST,
          },
          params: {
            city: cityName,
          },
        });
        setData(response.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, cityName]);

  return {data, loading, error, setCityName};
};

export default useFetch;
