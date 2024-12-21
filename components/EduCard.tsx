import { View, Text, Image } from 'react-native';
import React from 'react';

type Props = {
  item: any;
};

const EduCard = ({ item }: Props) => {
  return (
    <View className='w-full px-1 py-3'>
      <View className='justify-center items-center'>
        <Image
          className='w-full rounded-[20px] h-[190px]'
          source={{
            uri: item.image,
          }}
        />
        <Text
          numberOfLines={1}
          ellipsizeMode='tail'
          className='text-start text-lg font-semibold w-full'
        >
          {item.name}
        </Text>
        <Text className='text-start text-base w-full font-normal'>
          {item.studentsCount}+ students
        </Text>
      </View>
    </View>
  );
};

export default EduCard;
