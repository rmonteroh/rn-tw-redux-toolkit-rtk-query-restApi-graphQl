import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { addAmount } from '../../../store/features/counter/counter-slice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.counter.value);
  const add = (amount: number) => {
    dispatch(addAmount(amount));
  };
  return (
    <View className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 flex items-center justify-center gap-1">
      <Text className="text-xl font-light">Counter state</Text>
      <View className="flex flex-row items-center justify-center gap-1">
        <TouchableOpacity onPress={() => add(-1)} className="border rounded border-red-800 px-1 bg-red-800">
          <Text className="text-white font-bold text-lg">-</Text>
        </TouchableOpacity>
        <View>
          <Text className="font-light">Counter: {count}</Text>
        </View>
        <TouchableOpacity onPress={() => add(1)} className="border rounded border-red-800 px-1 bg-red-800">
          <Text className="text-white font-bold text-lg">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;
