/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useMemo } from 'react';
//import { DefaultTheme, DarkTheme } from "@react-navigation/native";
//import BottomTabNavigator from '../HelloReactNavigation/src/router/TabNavigator'
import DrawerNavigator from './src/router/DrawerNavigator';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import { DetailsScreenNavigator } from './src/router/StackNavigator';
//import TabNavigator from "../HelloReactNavigation/src/router/TabNavigator"
//import {StyleSheet, View, Text, StatusBar} from 'react-native';
//import { Provider as PaperProvider } from 'react-native-paper';
//import { ThemeController } from './src/theme/ThemeController';
//import { ThemeContext } from './src/theme/ThemeController'
//import { makeStyles } from "@material-ui/styles";
import { PreferencesContext } from './src/theme/PreferencesContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import Snackbar from './src/utils/snackbar/Snackbar';
import "react-native-gesture-handler";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme as MD3DarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';


const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

//let paper_theme = theme ? MD3DarkTheme : PaperDefaultTheme;
//let nav_theme = theme ? DarkTheme : DefaultTheme;

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);
//Ignore all log notifications
LogBox.ignoreAllLogs();

const App = () => {
  const [isThemeDark, setIsThemeDark] = useState(false);

  //let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  const theme = {
    ...isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme,
    
  };
  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );
  return (
    <SafeAreaProvider>
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <DrawerNavigator />
        </NavigationContainer>
        <Snackbar />
      </PaperProvider>
    </PreferencesContext.Provider> 
    </SafeAreaProvider>      
  );
}
export default App;

// const DrawerNavigator = () => {
//   return (
// <Drawer.Navigator>
//   <Drawer.Screen name="Home" component={TabNavigator}/>
//   <Drawer.Screen name="Details" component={DetailsScreenNavigator}/>
// </Drawer.Navigator> 
//   );
// }