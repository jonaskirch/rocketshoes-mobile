import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#7159C1',
          },
          headerTintColor: '#FFF',
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          // options={{ title: 'My app' }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          // initialParams={{ user: 'me' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import Main from './pages/Main';
// import Cart from './pages/Cart';

// const Routes = createAppContainer(
//   createStackNavigator(
//     {
//       Main,
//       User,
//       Repository,
//     },
//     {
//       headerLayoutPreset: 'center',
//       defaultNavigationOptions: {
//         headerBackTitleVisible: false,
//         headerStyle: {
//           backgroundColor: '#7159C1',
//         },
//         headerTintColor: '#FFF',
//       },
//     }
//   )
// );

// export default Routes;
