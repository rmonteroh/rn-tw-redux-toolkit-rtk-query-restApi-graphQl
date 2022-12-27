import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useGetCharacterByGenderQuery } from '../../../graphql/queries/character.generated';
import { useFetchCharactersQuery, Character } from '../../../store/features/api/api-slice';
import CharacterItem from './CharacterItem';
import { Character as GQLCharacter } from '../../../graphql/types/types.generated';

const Characters = () => {
  const [gender, setGender] = useState<string>('male');
  const { data, isFetching } = useFetchCharactersQuery(gender);
  const { data: graphqlData } = useGetCharacterByGenderQuery({ gender });

  const genderlist: string[] = ['male', 'female', 'genderless'];

  const renderCharacters = () => (
    <View>
      {data?.results.map((character: Character) => {
        return <CharacterItem key={`${Math.random()}_${character.id}`} character={character} />;
      })}
    </View>
  );

  const renderGraphQlCharacters = () => (
    <View>
      {graphqlData?.characters?.results?.map((character: GQLCharacter) => {
        return <CharacterItem key={`${Math.random()}_${character.id}`} character={character} />;
      })}
    </View>
  );

  return (
    <View className="p-2">
      <View className="flex items-center justify-center gap-2">
        <Text className="text-lg font-light">Characters gender list</Text>
        <View className="flex flex-row gap-2">
          {genderlist.map(genderItem => (
            <TouchableOpacity
              key={Math.random()}
              onPress={() => setGender(genderItem)}
              className={`border rounded px-1 ${
                gender === genderItem ? 'border-red-800 bg-red-800' : 'border-gray-800 bg-gray-800'
              }`}>
              <Text className="text-white font-light text-lg">{genderItem.toUpperCase()}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View className="mt-6">
        <Text className="text-2xl font-light text-center"> GraphQl API</Text>
        <View className="p-4">{isFetching ? <Text>Loading graphql api</Text> : renderGraphQlCharacters()}</View>
      </View>
      <View className="mt-6">
        <Text className="text-2xl font-light text-center">REST API</Text>
        <View className="p-4">{isFetching ? <Text>Loading rest api</Text> : renderCharacters()}</View>
      </View>
    </View>
  );
};

export default Characters;
