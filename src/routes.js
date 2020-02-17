import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;

            return <Header />;
          },
          cardStyle: {
            backgroundColor: '#333',
          },
        }}
        // screenOptions={{
        //   headerBackTitleVisible: false,
        //   headerStyle: {
        //     backgroundColor: '#7159C1',
        //   },
        //   headerTintColor: '#FFF',
        // }}
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
