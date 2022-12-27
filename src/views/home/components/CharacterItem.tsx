import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Character } from '../../../store/features/api/api-slice';
import { Character as GQLCharacter } from '../../../graphql/types/types.generated';

interface ICharacterItem {
  character: Character | GQLCharacter;
}

const CharacterItem = ({ character }: ICharacterItem) => {
  return (
    <TouchableOpacity>
      <View
        className="flex flex-row items-center justify-start my-1 bg-gray-100 rounded overflow-hidden"
        key={`${Math.random()}_${character.name}`}>
        <Image
          className="h-16 w-16 rounded-md mr-2"
          source={{
            uri: character.image || '',
          }}
        />
        <View>
          <Text className="text-lg font-light">{character.name}</Text>
          <Text className="font-light text-xs">
            {character.gender} | {character.status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterItem;
