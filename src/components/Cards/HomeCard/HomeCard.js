import {View, Text} from 'react-native';
import React from 'react';
import style from './HomeCard.style';
const HomeCard = ({item}) => {
  return <View style={{flex: 1}}>{console.log(item)}</View>;
};

export default HomeCard;
