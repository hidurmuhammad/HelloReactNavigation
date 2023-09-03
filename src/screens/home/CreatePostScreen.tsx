import  React from 'react';
import { View, TextInput, Button } from 'react-native';
import {GlobalStyles} from '../../styles/stylesheet';
import {useSafeAreaInsets,} from 'react-native-safe-area-context';
import { GlobalColors } from '../../styles/colors';

const CreatePostScreen = ({ navigation, route }: { navigation: any, route: any }) => {
  const insets = useSafeAreaInsets();
  const [postText, setPostText] = React.useState('');
  return (
    <View  style={
      [
        {
          backgroundColor: GlobalColors.contentBg,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={GlobalStyles.text_input}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </View>
  );
}
export { CreatePostScreen };