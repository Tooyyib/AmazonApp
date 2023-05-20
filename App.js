import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardScreen from "./src/screens/OnboardingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen"

const Stack = createNativeStackNavigator()


export default function App() {
return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Onboarding" component={OnboardScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Signup" component={SignupScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
)
}



