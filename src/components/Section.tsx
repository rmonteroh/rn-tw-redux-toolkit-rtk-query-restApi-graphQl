import React, { type PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

export const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{children}</Text>
    </View>
  );
};

export default Section;
