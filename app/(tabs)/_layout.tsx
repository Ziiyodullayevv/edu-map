import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';

export default function TabLayout() {
  const height = Platform.OS === 'ios' ? 75 : 60;
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderTopWidth: 0, // Tepaki border'ni olib tashlash
          shadowColor: 'transparent', // Shadow effektini olib tashlash
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0,
          shadowRadius: 0,
          elevation: 0,
          paddingTop: 5,
          paddingBottom: 20,
          backgroundColor: 'transparent',
          height,
          position: 'absolute',
          bottom: 0,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={100}
            experimentalBlurMethod='dimezisBlurView'
            style={{
              borderTopEndRadius: 25,
              borderTopLeftRadius: 25,
              overflow: 'hidden',
              backgroundColor: '#FFFFFF80',
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: -100,
              flex: 1,
            }}
          />
        ),
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#333',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign size={24} name='home' color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='category'
        options={{
          title: 'Oquv Markazlar',
          headerShown: false,
          headerStyle: {
            backgroundColor: 'red',
          },

          tabBarIcon: ({ color }) => (
            <AntDesign size={24} name='laptop' color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='favourite'
        options={{
          title: 'Favourite',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign size={24} name='hearto' color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <AntDesign size={24} name='user' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
