import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import all screens
import HomeScreen from '../screens/HomeScreen';
import WinterScreen from '../screens/WinterScreen';
import SummerScreen from '../screens/SummerScreen';
import PerfumesScreen from '../screens/PerfumesScreen';
import SaleScreen from '../screens/SaleScreen';
import WinterPretScreen from '../screens/WinterPretScreen';
import WinterUnstitchedScreen from '../screens/WinterUnstitchedScreen';
import SummerPretScreen from '../screens/SummerPretScreen';
import SummerUnstitchedScreen from '../screens/SummerUnstitchedScreen';
import MenPerfumesScreen from '../screens/MenPerfumesScreen';
import WomenPerfumesScreen from '../screens/WomenPerfumesScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerBackTitle: '',        // 👈 hide back text completely
          headerBackTitleVisible: false, // 👈 ensure no previous title shows
          headerStyle: {
            backgroundColor: '#FFD7BA',
            elevation: 2,
            shadowColor: '#E6A875',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          },
          headerTintColor: '#8B5A3C',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#8B5A3C',
          },
          headerTitleAlign: 'center',
          cardStyle: { 
            flex: 1,
            backgroundColor: '#FFF8F0'
          }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Winter" 
          component={WinterScreen} 
          options={{ title: 'Winter Collection' }}
        />
        <Stack.Screen 
          name="Summer" 
          component={SummerScreen} 
          options={{ title: 'Summer Collection' }}
        />
        <Stack.Screen 
          name="Perfumes" 
          component={PerfumesScreen} 
          options={{ title: 'Fragrance' }}
        />
        <Stack.Screen 
          name="Sale" 
          component={SaleScreen} 
          options={{ title: 'Special Deals' }}
        />
        <Stack.Screen 
          name="WinterPret" 
          component={WinterPretScreen} 
          options={{
            title: 'Winter Collection',
            headerBackTitle: '',       // 👈 this line ensures no "Winter Collection"
          }}
        />
        <Stack.Screen 
          name="WinterUnstitched" 
          component={WinterUnstitchedScreen} 
          options={{
            title: 'Winter Fabrics',
            headerBackTitle: '',
          }}
        />
        <Stack.Screen 
          name="SummerPret" 
          component={SummerPretScreen} 
          options={{
            title: 'Summer Collection',
            headerBackTitle: '',
          }}
        />
        <Stack.Screen 
          name="SummerUnstitched" 
          component={SummerUnstitchedScreen} 
          options={{
            title: 'Summer Fabrics',
            headerBackTitle: '',
          }}
        />
        <Stack.Screen 
          name="MenPerfumes" 
          component={MenPerfumesScreen} 
          options={{
            title: "Men's Fragrance",
            headerBackTitle: '',
          }}
        />
        <Stack.Screen 
          name="WomenPerfumes" 
          component={WomenPerfumesScreen} 
          options={{
            title: "Women's Fragrance",
            headerBackTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;