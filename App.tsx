import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import {store} from './redux/store'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './App/Screens/LoginScreen/Login';
import HomeScreen from './App/Screens/HomeScreen/HomeScreen';
import WelcomeScreen from './App/Screens/WelcomeScreen/WelcomeScreen';
import PetsScreen from './App/Screens/PetsScreen/PetsScreen';
import PetDetailScreen from './App/Screens/PetDetailsScreen/PetDetailsScreen';
import AllAnimalsList from './App/Screens/AllAnimalsList/AllAnimalsList';



const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store} >
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="Welcome" component={WelcomeScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={HomeScreen} />     
      <Stack.Screen name="PetScreen" component={PetsScreen} />
      <Stack.Screen name="PetDetail" component={PetDetailScreen} />
      <Stack.Screen name="AllAnimalsList" component={AllAnimalsList} options={{ title: "All Animals" }} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
