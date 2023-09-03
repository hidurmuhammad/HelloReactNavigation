import React, { useLayoutEffect } from 'react';
import { Appbar,Avatar,IconButton, MD3Colors } from 'react-native-paper';
import PropTypes from 'prop-types';
import { GlobalStyles } from '../styles/stylesheet';
import {TouchableOpacity,Button,Image, StatusBar} from 'react-native'
import { View } from 'react-native-reanimated/lib/typescript/Animated';

const  CustomNavigationBar = ({...props}) =>{
  const {routeName} = props;
  const {navigation} = props;
  const _goBack = () => navigation.goBack
  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <CustomNavigationBar {...props} withHeaderRight={<IconButton icon="plus" size={20} onPress={() => {}} />} />
    });
  }, [navigation]);
  return (
    
    <Appbar.Header style={{backgroundColor: '#f4511e', elevation: 4}} >
      
      <Appbar.BackAction onPress={_goBack()} color='#fff' size={20}/>
     
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          {/* <Avatar.Image
            size={40}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
          /> */}
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../assets/images/image.png')}
        />
        </TouchableOpacity>
      
      <Appbar.Content title={routeName} titleStyle={{fontSize: 18}} color={"#fff"} style={{ alignItems: 'center' } }
       />
        <Button title="Update count" />
        {/* <Appbar.Action icon={""} onPress={() => {}} /> */}
  
    </Appbar.Header>
  );
 
}

CustomNavigationBar.propTypes = { 
  routeName: PropTypes.any,
  navigation:PropTypes.any,
  // last: PropTypes.string,
  // address: PropTypes.shape({
  //   country: PropTypes.string,
  //   city: PropTypes.string,
  // }),
  // age: PropTypes.number,
  // isProgrammer: PropTypes.bool,
};
export {CustomNavigationBar};