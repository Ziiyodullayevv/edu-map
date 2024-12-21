import { View, Text, ScrollView } from 'react-native';

export default function Home() {
  const card = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,
    7, 8, 9, 9, 9, 9,
  ];
  return (
    <View>
      <ScrollView>
        {card.map((id, index) => {
          return (
            <Text
              className='text-red-500 bg-gray-100 font-bold py-10'
              key={index}
            >
              Assalomu Alaykum
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
}
