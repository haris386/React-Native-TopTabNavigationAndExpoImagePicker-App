import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopBarNavigation from './Components/TopBarNavigation/TopBarNavigation';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TopBarNavigation}
          options={{
            title: 'WhatsApp', headerShadowVisible: false, headerRight: () => {
              return (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity style={{ marginHorizontal: 4 }}>
                    <Ionicons name="search" size={20} color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity style={{ marginHorizontal: 4 }}>
                    <MaterialCommunityIcons name="dots-vertical" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              )
            }, headerStyle: {
              backgroundColor: '#008069',
            }, headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;