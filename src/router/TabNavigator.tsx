//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, DetailsScreenNavigator, ModalScreenNavigator, SettingsNavigator, NetworkingNavigator } from "./StackNavigator";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider,useTheme } from 'react-native-paper';
//import {Text} from 'react-native'
//import { Provider } from 'react-native-paper';
//import { GlobalStyles } from "../styles/stylesheet";
//import { Image } from 'react-native';
//const Tab = createBottomTabNavigator();
// const LogoTitle = () => {
//     return (
//         <Image
//             style={{ width: 50, height: 50 }}
//             source={require('../assets/images/image.png')}
//         />
//     );
// };
const Tab = createMaterialBottomTabNavigator(); 
const BottomTabNavigator = () => {
    const theme = useTheme();
theme.colors.secondaryContainer = "transperent"
    return (
        <Tab.Navigator theme={theme}
         initialRouteName="Home"
         activeColor="#dbdbdb"
         inactiveColor="#020202"
         barStyle={{ backgroundColor: '#ff4500' }}
            
            //     screenOptions={{
            //         headerShown: true,
            //         header: (props) => <CustomNavigationBar routeName={props.route.name} navigation={props.navigation} />,
            //         tabBarActiveTintColor: '#e91e63',
            //         headerStyle: GlobalStyles.header, headerTintColor: '#fff',
            //         headerTitleStyle: GlobalStyles.headerTitleStyle,
            //          headerLeft: () =>
            //              <LogoTitle ></LogoTitle>, 
            //         headerRight: () => (
            //             <Button title="Update count" />
            //         ),
            //     }}
            
            //screenOptions={{ headerShown: false,  } }  
            >

            <Tab.Screen name="Home" component={MainStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                  }}
            />
            <Tab.Screen name="Details" component={DetailsScreenNavigator}
                options={{
                    tabBarLabel: 'Details',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="information" color={color} size={26} />
                    ),
                  }}
                 />
            <Tab.Screen name="Modal" component={ModalScreenNavigator}
            options={{
                tabBarLabel: 'Modal',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="tag" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen name="Networking" component={NetworkingNavigator}
                options={{
                    tabBarLabel: 'Networking',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="network-outline" color={color} size={26} />
                    ),
                  }}
                 />

            <Tab.Screen name="Settings" component={SettingsNavigator}
                options={{
                    tabBarLabel: 'Details',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                    ),
                  }}
                />
        </Tab.Navigator>
       
    );
};

export default BottomTabNavigator;