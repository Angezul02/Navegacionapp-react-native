import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { useContext } from 'react';
import { AuthContex } from '../context/AuthContext';


const ContactScreen = () => {

const {signIn , authState} = useContext(AuthContex)

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            Contacts
        </Text>
        {authState.isLoggedIn === true ? <Text>Estas logueado</Text> : <Button
        title='SignIn'
        onPress={signIn}

        /> }
        
    </View>
  )
}

export default ContactScreen