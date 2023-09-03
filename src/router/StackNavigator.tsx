import { Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
//import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsScreen } from '../screens/details/DetailsScreen';
import { CreatePostScreen } from '../screens/home/CreatePostScreen';
import { ModalScreen } from "../screens/modal/ModalScreen";
import { NetworkingScreen } from '../screens/networking/NetworkingScreen';
import { SettingsScreen } from "../screens/settings/settings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { HeaderBackButton } from '@react-navigation/elements';
//import { logger } from 'react-native-logs';
import { useNavigation } from '@react-navigation/native';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';


const Stack = createNativeStackNavigator();
const navigation = useNavigation()
const _goBack = () => navigation.goBack

//var logs = logger.createLogger();
// const handlePress = ({navigation}:{navigation:any}) => {
//   navigation.openDrawer()
//   console.log('testLog', 'sample')
// }
// function handleSubmit() {
//   console.log('You clicked submit.');
//   //{DrawerNavigator().props.navigation.openDrawer()}
// }

function getHeaderTitle({ route }: { route: any }) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  console.log("routeName", { routeName })
  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Details':
      return 'Details';
    case 'MyModal':
      return 'MyModal';
  }
}

const LogoTitle = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}
    >
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../assets/images/image.png')}
      />
    </TouchableOpacity>
  );
};
//  const screenOptionsStyle = {
//     headerStyle: {
//       backgroundColor: '#f4511e',
//     },
//     headerTintColor: '#fff',
//     headerBackTitle: "Back",
//   };
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ff4500',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home"
      /*Sharing common options across screens*/
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitleStyle
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerLeft: () =>
            <LogoTitle ></LogoTitle>,
          headerRight: () => (
            <Button title="Update count" />
          ),
        }}

      />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}
const DetailsScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitleStyle,
      }}
    >
      <Stack.Screen name="Details" component={DetailsScreen}
        options={({ route }) => ({
          //headerTitle: getHeaderTitle({route}),
          headerLeft: props => (<Appbar.BackAction onPress={_goBack()} color='#fff' size={20} />),
          headerTitleAlign: "center",
        })}
      />

    </Stack.Navigator>
  );
}

const ModalScreenNavigator = () => {
  //const routeName = getFocusedRouteNameFromRoute(route) ?? "MyModal"
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitleStyle,
      }}
    >
      <Stack.Screen name="Modal" component={ModalScreen}
        options={({ route }) => ({
          //headerTitle: getHeaderTitle({route}),
          headerLeft: props => (<Appbar.BackAction onPress={_goBack()} color='#fff' size={20} />),
          headerTitleAlign: "center",
        })}

      />
    </Stack.Navigator>
  );
}

const NetworkingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitleStyle,

      }}
    >
      <Stack.Screen name="Networking" component={NetworkingScreen}
        options={({ route }) => ({
          //headerTitle: getHeaderTitle({route}),
          headerLeft: props => (<Appbar.BackAction onPress={_goBack()} color='#fff' size={20} />),
          headerTitleAlign: "center",
        })} />
    </Stack.Navigator>
  );
}

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitleStyle,

      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen}
        options={({ route }) => ({
          //headerTitle: getHeaderTitle({route}),
          headerLeft: props => (<Appbar.BackAction onPress={_goBack()} color='#fff' size={20} />),
          headerTitleAlign: "center",
        })} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, DetailsScreenNavigator, ModalScreenNavigator, NetworkingNavigator, SettingsNavigator };