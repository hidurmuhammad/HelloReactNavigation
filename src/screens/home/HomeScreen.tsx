import React from 'react';
import { View, Text, Button, StatusBar, BackHandler } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../styles/stylesheet';
import { GlobalColors } from '../../styles/colors';

const HomeScreen = ({ route, navigation }: { route: any, navigation: any }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }

    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [route.params?.post, navigation]);
  const insets = useSafeAreaInsets();

  // function FocusAwareStatusBar(pops) {
  //   const isFocused = useIsFocused();

  //   return isFocused ? <StatusBar {...props} /> : null;
  // }
  // useFocusEffect get called each time when screen comes in focus
  return (
    <View style={[
      GlobalStyles.container,
      {
        backgroundColor: GlobalColors.contentBg,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      },
    ]}>
      {/* <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" /> */}
      <Text>Home Screen</Text>
      <Text>Count: {count}</Text>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details'
          //  // {
          //     /* 1. Navigate to the Details route with params */
          //    { itemId: 86},
          //     {otherParam: 'anything you want here'}
          //  // }
        )}
      />
      <Button
        onPress={() => navigation.navigate('Modal')}
        title="Open Modal"
      />
    </View>
  );
}
export { HomeScreen };