import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardScreen from "./src/screens/OnboardingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen"
import HomeScreen from "./src/screens/HomeScreen"
import DetailsScreen from "./src/screens/DetailsScreen"





const Stack = createNativeStackNavigator()


export default function App() {
return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Signup" component={SignupScreen}/>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Details" component={DetailsScreen}/>

    </Stack.Navigator>
  </NavigationContainer>
)
}



