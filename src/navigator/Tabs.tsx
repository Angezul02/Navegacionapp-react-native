import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs1Screen from "../screens/Tabs1Screen";


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import StackNavigator from './StackNavigator';
import { colores } from '../theme/AppTheme';
import { Text } from 'react-native';
import { Platform } from "react-native";
import { TopTabNavigator } from "./TopTabsNavigator";
import  Icon  from "react-native-vector-icons/Ionicons";

export const Tabs =()=>{
    return Platform.OS === "ios" 
    ? <TabsIOS/>
    : <TabsAndroid/>
}



const BottonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid=()=> {
  return (
    <BottonTabAndroid.Navigator
    sceneAnimationEnabled={true}
    barStyle={{
        backgroundColor: colores.secundary
    }}

    screenOptions={({route})=>({

        tabBarIcon: ({color}) => {
 
            let iconName: string = '';
            switch(route.name) {
                case 'Tabs1Screen' :
                    iconName = 'flask-sharp'
                break;

                case 'Tabs2Screen' :
                    iconName = 'flash-sharp'
                break;

                case 'StackNavigator' :
                    iconName = 'home-sharp'
                break;
            }
            return <Icon name={iconName} size={20} color={color} />
        }

    })}
    >
      <BottonTabAndroid.Screen name="Tabs1Screen" options={{title:"Tab1"}}  component={Tabs1Screen} />
      <BottonTabAndroid.Screen name="Tabs2Screen"  options={{title:"Tab2"}} component={TopTabNavigator} />
      <BottonTabAndroid.Screen name="StackNavigator" options={{title:"Stack"}}  component={StackNavigator} />
    </BottonTabAndroid.Navigator>
  );
}

const BottonTabIOS = createBottomTabNavigator();

const TabsIOS=()=> {
  return (
    <BottonTabIOS.Navigator
    sceneContainerStyle={
        {
            backgroundColor:"white"
        }
    }
    screenOptions={({route})=>({
        tabBarActiveTintColor: colores.secundary,
        tabBarStyle:{
            borderTopColor:colores.primary,
            borderTopWidth:0,
            elevation:0
        },
        tabBarLabelStyle:{
            fontSize:15
        },
        tabBarIcon: ({color}) => {
 
            let iconName: string = '';
            switch(route.name) {
                case 'Tabs1Screen' :
                    iconName = 'flask-sharp'
                break;

                case 'Tabs2Screen' :
                    iconName = 'flash-sharp'
                break;

                case 'StackNavigator' :
                    iconName = 'home-sharp'
                break;
            }
            return <Icon name={iconName} size={20} color={color} />
        }
    })
}
    >
      <BottonTabIOS.Screen name="Tabs1Screen" options={{title:"Tab1"}}  component={Tabs1Screen} />
      <BottonTabIOS.Screen name="Tabs2Screen"  options={{title:"Tab2"}} component={TopTabNavigator} />
      <BottonTabIOS.Screen name="StackNavigator" options={{title:"Stack"}}  component={StackNavigator} />
    </BottonTabIOS.Navigator>
  );
}