import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { colores, styles } from '../theme/AppTheme';
import { TouchableOpacity } from 'react-native';
import { Tabs } from './Tabs';
import  Icon  from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export const MenuLateral=()=> {

  // hook para las dimensiones del dispositivo 

const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: dimensions.width >= 769 ? 'permanent' : 'front',
    }}
    drawerContent={(props) => <CustomDrawerContent {...props}/>}      
    
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );


}
const CustomDrawerContent = ({navigation}:DrawerContentComponentProps)=>{
return (


<DrawerContentScrollView>
<View style={styles.avatarContainer}>
  <Image
  
  source={{
    uri:"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-grey-photo-placeholder-women-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-99724605.jpg"
  }}
  style={styles.avatar}
  />
</View>

<View style={styles.menuContainer}>
  <TouchableOpacity 
  style={styles.menuBoton}
  onPress={()=>navigation.navigate("Tabs")}
  >
  <Text>

  <Icon name="pulse-sharp" size={20} color={colores.secundary} /> 
  <Text style={styles.menuTexto}> Tabs </Text>
  </Text>
  </TouchableOpacity>

  <TouchableOpacity 
  style={styles.menuBoton}
  onPress={()=>navigation.navigate("SettingsScreen")}
  >
    <Text>
  <Icon name="heart-half-sharp" size={20} color={colores.secundary} /> 
  <Text style={styles.menuTexto}> Ajustes </Text>
    </Text>
  </TouchableOpacity>
</View>

</DrawerContentScrollView>

 
)
  
}
