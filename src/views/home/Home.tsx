import React from 'react';
import { View } from 'react-native';
import Counter from './components/Counter';
import Characters from './components/Characters';

const Home = () => (
  <View className="flex-auto">
    <Counter />
    <Characters />
  </View>
);

export default Home;
