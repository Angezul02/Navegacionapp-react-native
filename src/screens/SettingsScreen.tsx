import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles, colores } from '../theme/AppTheme';
import { useContext } from 'react'
import { AuthContex } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';


const SettingsScreen = () => {

  const {authState} = useContext(AuthContex)

  const insets= useSafeAreaInsets();
  return (
    <View style={{marginTop: insets.top}}>
        <Text style={{
          ...styles.title,
         
          backgroundColor:"white"
          }}>
            Settings Screen
        </Text>
        <Text>
          {JSON.stringify(authState, null, 4)}
        </Text>
        {
          authState.favoriteIcon  && (
            
            <Icon
              name={authState.favoriteIcon }
              size={100}
              color={colores.secundary}
            
            />
          )
        }
          

       
    </View>

  )
}

export default SettingsScreen