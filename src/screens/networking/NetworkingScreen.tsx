import { useState, useEffect } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../styles/stylesheet';
import NetInfo from "@react-native-community/netinfo";
//import { Snackbar,Button } from 'react-native-paper';
//import {CustomSnackBar} from '../../utils/CustomSnackBar'
import Snackbar from '../../utils/snackbar/SnackbarManager';
import { GlobalColors } from '../../styles/colors';

// Subscribe
const unsubscribe = NetInfo.addEventListener(state => {
  console.log("Connection type", state.type);
  console.log("Is connected?", state.isConnected);
  // {setState(state)}
  if (state.isConnected == true) {
 //   Snackbar.show("Network Available!")
  } else {
    Snackbar.show("Network not Available!")
  }
});
//const [state, setState] = useState(NetInfo);
//const onToggleSnackBar = () => {setVisible(visible);};
// const onDismissSnackBar = () => setVisible(false);
//   useEffect(() => {
//     console.log('isLoading is: ', visible);
// if(state.configure.arguments.state.isConnected){
//     //fetchData from api fetchDate()
//     }else{
//      //setData
//       // setData({data:[]});
//     }
//   }, [visible,state.configure.arguments.state]);
//const [visible, setVisible] = useState(false);
const NetworkingScreen = () => {
  const insets = useSafeAreaInsets();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);
  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://reactnative.dev/movies.json',
      );
      const json = await response.json();
      //return json.movies;
      setData(json.movies);
    } catch (error) {
      console.error(error);
    }
    setLoading(false)
  };
  useEffect(() => {
    getMoviesFromApiAsync();
  }, []);
  return (
    <View 
      style={
        [
          GlobalStyles.networkingContainer,
          {
          backgroundColor: GlobalColors.contentBg,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }]}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={data} keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}>

        </FlatList>
      )}
      {
        /* <Snackbar
             visible={true}
             onDismiss={onDismissSnackBar}
             action={{
               label: 'Undo',
               onPress: () => {
                 // Do something
                 console.log("Connection type", "test");
                 {onDismissSnackBar}
               },
             }}>
             Network Availale.
           </Snackbar> */
      }
    </View>
  );
}
// Unsubscribe
unsubscribe();

export { NetworkingScreen }