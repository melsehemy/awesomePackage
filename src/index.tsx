import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen';
import { IBANVerificationScreen } from './IBANVerificationScreen';

const Stack = createStackNavigator();

export default function Container() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="HOME"
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
        />

        <Stack.Screen
          name="IbanVerification"
          component={IBANVerificationScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
