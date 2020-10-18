import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { useFonts } from '@expo-google-fonts/nunito';

const {Navigator, Screen} = createStackNavigator()

import OrphanagesMap from './screen/Orphanagesmap';
import OrphanageDetails from './screen/OrphanageDetails';
import SelectMapPosition from './screen/OrphanageDetails';
import OrphanageData from './screen/OrphanageDetails';
import Header from './components/Header';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#f2f3f5'}}}>
        <Screen name="OrphanagesMap" component={OrphanagesMap} /> 
        <Screen name="OrphanageDetails" component={OrphanageDetails} options={{
          headerShown: true,
          header: () => <Header showCancel={false} title="Orfanato" />
        }}  />
        <Screen name="SelectMapPosition" component={SelectMapPosition}  options={{
          headerShown: true,
          header: () => <Header title="Select Map Position" />
        }}  />
        <Screen name="OrphanageData" component={OrphanageData}  options={{
          headerShown: true,
          header: () => <Header title="Orphanage Data" />
        }}  />
      </Navigator>
    </NavigationContainer>
  )
}