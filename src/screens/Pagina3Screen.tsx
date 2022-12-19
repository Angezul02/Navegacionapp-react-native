import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps <any,any> {};

const Pagina3Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            Pagina 3 screen :::
        </Text>
        <Button
        title='Regresar'
        onPress={()=>navigation.pop()}/>

    <Button
        title='Ir a página inicial'
        onPress={()=>navigation.popToTop()}/>
    </View>
  )
}

export default Pagina3Screen