import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './App/Screens/LoginScreen/Login';
import HomeScreen from './App/Screens/HomeScreen/HomeScreen';
import WelcomeScreen from './App/Screens/WelcomeScreen/WelcomeScreen';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="Welcome" component={WelcomeScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
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
