import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { TailwindProvider } from 'tailwindcss-react-native';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
        </TailwindProvider>
    </NavigationContainer>
  );
}

export default App;