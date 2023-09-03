import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { DetailsScreenNavigator } from "./StackNavigator";
import { ModalScreenNavigator } from "./StackNavigator";
import { NetworkingNavigator } from "./StackNavigator";
import { SettingsNavigator } from "./StackNavigator";
import TabNavigator from "../router/TabNavigator"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//import { getHeaderTitle } from '@react-navigation/elements';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { GlobalStyles } from "../../src/styles/stylesheet";
import { GlobalColors } from "../../src/styles/colors";
import 'react-native-gesture-handler';
//import { ReactNode, RefAttributes } from "react";
//import { JSX } from "react/jsx-runtime";
const Drawer = createDrawerNavigator();

const CustomDrawer = ({props}:{props:any}) => {
  return (
    
    <View style={{ flex: 1 }}>
      <SafeAreaView style={GlobalStyles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 14,
            backgroundColor: 'transperent',
            marginBottom: 24,
          }}
        >
          <View>
            <Text style={{color:'#fa8072'}}>Hidur M</Text>
            <Text style={{color:'#fa8072'}}>hidurmuhammad001@gmail.com</Text>
          </View>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/3157006?s=400&u=19ce6249241827db87f3f9c0c3f5bf1094fb06d4&v=4',
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: GlobalColors.white,
          padding: 20,
        }}
      >
        {/* <Text>Log Out</Text> */}
      </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}
    drawerContent={props => <CustomDrawer props={props} />}>
      <Drawer.Screen name="Home" component={TabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),

        }}
      />
      <Drawer.Screen name="Details" component={DetailsScreenNavigator}
        options={{
          title: 'Details',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="information" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen name="Modal" component={ModalScreenNavigator}
        options={{
          title: 'Modal',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="tag" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen name="Networking" component={NetworkingNavigator}
        options={{
          title: 'Networking',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="network-outline" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen name="Settings" component={SettingsNavigator}
        options={{
          title: 'Settings',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;