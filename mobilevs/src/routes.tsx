import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { useFonts } from '@expo-google-fonts/nunito';

const {Navigator, Screen} = createStackNavigator()

import OrphanagesMap from './screen/Orphanagesmap'
import OrphanageDetails from './screen/OrphanageDetails'

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="OrphanagesMap" component={OrphanagesMap} options={{}} /> 
        <Screen name="OrphanageDetails" component={OrphanageDetails} options={{}} /> 
      </Navigator>
    </NavigationContainer>
  )
}