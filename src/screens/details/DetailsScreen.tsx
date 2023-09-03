import  React from 'react';
import { View, Text, Button} from 'react-native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
//import { useRoute } from "@react-navigation/native"
import {GlobalStyles} from '../../styles/stylesheet';
import { GlobalColors } from '../../styles/colors';
//import { useIsFocused,useFocusEffect } from '@react-navigation/native';

const DetailsScreen = ({ route, navigation }: { route: any, navigation: any }) => {
  const insets = useSafeAreaInsets();
  /* 2. Get the param */
  //const { itemId, otherParam } = route.params;
  const otherParam = "anything you want here"
  //const [ itemId, setItemId ] = React.useState(86);

  /* Get values from useRoute() method */
  // const routes = useRoute()
  //const id = routes.params;

  const itemId = 86 
  React.useEffect(() => {
    // Resetting default value for the input on restart
    //React.setValue('Default Value');
  }, []);
 
  // function handleBackPress() {
  //   navigation.goBack();
  //   return true;
  // }
  // useEffect(() => {
  //   onBackPress(handleBackPress);
  // }, []);


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
      <Text>Details Screen</Text>
      {/* <Text>itemId: {JSON.stringify({itemId})}</Text> */}
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', {
          otherParam: 'anything you want here'
        })}
      />
      <Button
        title="Go to Details... again with Id"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack" onPress={() =>
          navigation.goBack()}
      />
    </View>
  );
}

export { DetailsScreen };


