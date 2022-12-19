import React from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/AppTheme';
import { useContext } from 'react';
import { AuthContex } from '../context/AuthContext';


interface propsIcons {
    iconName:string;
    

}

const TouchableIcon = ({iconName}:propsIcons) => {

const {changeFavoriteIcon} = useContext(AuthContex)

  return (
    <TouchableOpacity
    onPress={()=>{changeFavoriteIcon (iconName)}}
    >
        <Icon 
        name={iconName} 
        size={50} 
        color={colores.secundary} />
    </TouchableOpacity>
  )
}

export default TouchableIcon
