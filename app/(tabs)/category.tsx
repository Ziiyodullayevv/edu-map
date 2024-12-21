import { Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import EduCard from '@/components/EduCard';
import { learningCenters } from '@/mock/data';
import { TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Category() {
  return (
    <SafeAreaView className='w-full h-full p-2'>
      <FlashList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => {
          return <EduCard item={item} />;
        }}
        // getItemType={({ item }) => {
        //   return item.type;
        // }}
        data={learningCenters}
        estimatedItemSize={242}
        ListHeaderComponent={
          <View className='py-3'>
            <Text className='font-semibold text-3xl py-3'>Qidirish</Text>
            <View className='border-solid border-[1px] px-3 rounded-full  flex-1 flex-row justify-between gap-1 items-center'>
              <View className='flex-1'>
                <TextInput placeholder='Oquv Markaz Qidirish...' />
              </View>
              <View className='justify-center items-center'>
                <AntDesign name='search1' size={20} color='black' />
              </View>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
