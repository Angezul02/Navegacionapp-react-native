// import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
// import {StackScreenProps} from '@react-navigation/stack/lib/typescript/src/types';
// import React, { useEffect } from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {colores, styles} from '../theme/AppTheme';
import  Icon  from "react-native-vector-icons/Ionicons";

interface Props extends StackScreenProps<any, any> {}
// interface Props extends DrawerScreenProps <any, any> {}

const Pagina1Screen = ({navigation}: Props) => {

  // "está en el curso pero aparece en la nueva versión por default un icono de hamburguesa"

// useEffect(() => {
//  navigation.setOptions({
//   headerLeft: () => {
//     <Button
//     title='Menú'
//     onPress={()=>{navigation.toggleDrawer()}}/>
//   }
//  })
// }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 screen :::</Text>
      <Button
        title="Ir a pag 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{
        marginVertical: 20,
        fontSize:18,
        marginLeft:2,

      }}>Navegar con argumentos</Text>
      <View style={{flexDirection: 'row', justifyContent:"center"}}>
        <TouchableOpacity
          style={{
            ...styles.buttonbig,
            backgroundColor:"#5856D6"
          
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Cristian',
            })
          }>
          <Icon name="infinite-sharp" size={30} color={colores.primary} /> 
          <Text style={{
            ...styles.buttonBigText,
            color:colores.primary
            }}>Cristian</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonbig}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'angela',
            })
          }>
          <Icon name="leaf-sharp" size={30} color={colores.secundary} /> 
          <Text style={{...styles.buttonBigText, color:colores.secundary}}>Angela</Text>
        </TouchableOpacity>
      </View>

      {/* <Button
        title='ir persona'
        onPress={()=>navigation.navigate("PersonaScreen")}
        /> */}
    </View>
  );
};

export default Pagina1Screen;
