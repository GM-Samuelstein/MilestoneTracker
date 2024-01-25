import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import DashboardScreen from '../screens/DashboardScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Onboarding' screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Onboarding'} component={OnboardingScreen} />
      <Stack.Screen name={'Dashboard'} component={DashboardScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation;
