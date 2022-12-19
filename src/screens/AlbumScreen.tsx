import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native';
import { AuthContex } from '../context/AuthContext';
import { styles } from '../theme/AppTheme';

const AlbumScreen = () => {

  const {logOut , authState:{isLoggedIn}} = useContext(AuthContex)
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            Album
        </Text>
        { isLoggedIn && (<Button
        title='LogOut'
        onPress={logOut}
        />) 
        }
        
    </View>
  )
}

export default AlbumScreen
