import React from 'react';
import { View} from 'react-native';
import { List, Switch} from 'react-native-paper';
//export interface props {children?: React.ReactNode; }
//import {JSX as _jsx} from 'react/jsx-runtime';
import { PreferencesContext } from '../../theme/PreferencesContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../styles/stylesheet';
import { GlobalColors } from '../../styles/colors';

//import { useFocusEffect } from '@react-navigation/native';
//export const themeContext = createContext(ThemeContext);
//import {setCustomText, setCustomTextInput} from 'react-native-global-props';

const SettingsScreen = ({ ...props }) => {
  //const themeContext = useContext(PreferencesContext);
  //const { toggleTheme, theme } = useContext(ThemeContext);
  //const theme = useTheme();

  // const customTextProps = {
  //   style: {
  //     fontFamily: 'Roboto-Italic',
  //   },
  // };
  // setCustomText(customTextProps);
  // setCustomTextInput(customTextProps);
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
  const insets = useSafeAreaInsets();
  return (
    <View style={
      [
        GlobalStyles.settings_container,
        {
          backgroundColor: GlobalColors.contentBg,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }]}>

      <List.Item
        title="Dark Mode" titleStyle={{ color: 'red', fontWeight: 'bold' }}
        // left={() => <List.Icon icon="brightness-4" />}
        right={() => <Switch
          color={'red'}
          value={isThemeDark}
          onValueChange={toggleTheme}
        />} />
    </View>
  );
  // function Profile({ userId }) {
  //   const [user, setUser] = React.useState(null);

  //   useFocusEffect(
  //     React.useCallback(() => {
  //       const unsubscribe = API.subscribe(userId, user => setUser(data));

  //       return () => unsubscribe();
  //     }, [userId])
  //   );
  // };

}
export { SettingsScreen };