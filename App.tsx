import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Home from './src/views/home/Home';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Provider store={store}>
          <Home />
        </Provider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
