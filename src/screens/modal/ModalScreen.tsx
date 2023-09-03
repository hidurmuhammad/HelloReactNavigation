import { View, Text, Button} from 'react-native';
import {useSafeAreaInsets,} from 'react-native-safe-area-context';
import {GlobalStyles} from '../../styles/stylesheet';
import { GlobalColors } from '../../styles/colors';
const ModalScreen = ({ route, navigation }: { route: any, navigation: any })=>{
  const insets = useSafeAreaInsets();
    return (
      <View style={
        [
          GlobalStyles.container,
          {
            backgroundColor: GlobalColors.contentBg,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    );
  }
  export {ModalScreen};