import {useEffect, useState} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [locationName, setLocationName] = useState('London');
  const [parameter, setParameter] = useState('c');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            'X-RapidAPI-Key': Config.API_KEY,
            'X-RapidAPI-Host': Config.API_HOST,
          },
          params: {
            location: locationName,
            format: 'json',
            u: parameter,
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
  }, [url, locationName, parameter]);

  return [data, loading, error, setLocationName, setParameter];
};

export default useFetch;
