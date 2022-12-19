import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'

export const Pagina2Screen = () => {

 const navigator = useNavigation<any>(); 

 useEffect(() => {
  navigator.setOptions({
    title:"Hola Mundo",
    headerBackTitle: ""
  })
 }, [])
 

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            Pagina 2 screen :::
        </Text>
        <Button
        title='ir a pag 3 '
        onPress={ () => navigator.navigate('Pagina3Screen') }
        />
    </View>
  )
}

