import { StyleSheet } from "react-native";

export const colores = {
    primary: "aquamarine",
    secundary:"#5856D6"
}

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal: 20
    },
    title:{
        fontSize: 30 ,
        marginBottom: 10,
    },
    buttonbig: {
        width:100,
        height:100,
        backgroundColor:"aquamarine",
        borderRadius:100,
        alignItems: "center",
        justifyContent:"center",
        marginRight:20,
        marginTop:10
    },
    buttonBigText:{
        color:"blue",
        fontSize:18,
        fontWeight:"bold",
    },
    avatarContainer:{
        alignItems:"center",
        marginTop:15
    },
    avatar:{
        width:100,
        height:100,
        borderRadius: 100
    },
    menuContainer:{
        marginVertical:30,
        marginHorizontal:20
    },
    menuBoton:{
        marginVertical:10
    },

    menuTexto:{
        fontSize:20,

    },
    


});