import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { colores, styles } from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';




const Tabs1Screen = () => {

  const {top} =useSafeAreaInsets();

   
  return (
    <View style={{...styles.globalMargin, marginTop: top +10}}>
        <Text style={styles.title}>
        Iconos
        </Text>  
        <Text>
        <TouchableIcon iconName="rocket"  />    
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="bulb-sharp" />        
        <TouchableIcon iconName="musical-notes-outline" />
        <TouchableIcon iconName="trophy" />
        <TouchableIcon iconName="ribbon-outline" />
        <TouchableIcon iconName="heart-circle-sharp" />

        </Text>
    </View>
  )
}

export default Tabs1Screen