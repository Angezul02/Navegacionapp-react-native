import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/AppTheme';
import {StackScreenProps} from '@react-navigation/stack/lib/typescript/src/types';
import { RootStackParams } from '../navigator/StackNavigator';
import { useContext } from 'react';
import { AuthContex } from '../context/AuthContext';

// interface RoutesParams {
//     id:number;
//     name:string
// }

interface Props extends StackScreenProps<RootStackParams, "PersonaScreen"> {}
const PersonaScreen = ({route, navigation}: Props) => {
  // const params =route.params as RoutesParams

  const params = route.params;
  const {changeUserName} = useContext(AuthContex)

  useEffect(() => {
    navigation.setOptions({
      title: params!.name,
    });
  }, []);

  useEffect(() => {
    changeUserName(params.name)
  }, [])
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonaScreen;
