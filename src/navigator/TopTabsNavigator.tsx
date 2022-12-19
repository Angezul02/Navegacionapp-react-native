import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumScreen from '../screens/AlbumScreen';
import { colores } from '../theme/AppTheme';
import { Text } from 'react-native';
import  Icon  from "react-native-vector-icons/Ionicons";

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator=()=> {
  return (
    <Tab.Navigator
    screenOptions={({route})=>({
        tabBarStyle:{
            elevation:0,
            borderBottomWidth:0
        },
        tabBarPressColor:colores.secundary,
        tabBarShowIcon:true,
        tabBarIndicatorStyle:{
            backgroundColor:colores.primary,
            
        },

        tabBarIcon: ({color}) => {
 
            let iconName: string = '';
            switch(route.name) {
                case 'Chats' :
                    iconName = 'chatbubbles-sharp'
                break;

                case 'Contacts' :
                    iconName = 'people-sharp'
                break;

                case 'Albums' :
                    iconName = 'albums-sharp'
                break;
            }
            return <Icon name={iconName} size={20} color={color} />
        }
        
       
    })}
    >
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactScreen} />
      <Tab.Screen name="Albums" component={AlbumScreen} />
    </Tab.Navigator>
  );
}