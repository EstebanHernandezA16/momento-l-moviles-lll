import { View,StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export const Buttons = ({calcular, buscar, limpiar}) =>{

    return(

        <View>
            <Button style={styles.button} icon='calculator' mode="contained" onPress={()=> calcular()}>Calcular/Guardar</Button>
        <View style={styles.subContainer}>
            <Button style={styles.button}  icon='cloud-search' mode="contained" onPress={()=> buscar()}>Buscar</Button>
            <Button style={styles.button}  icon='trash-can' mode="contained" onPress={()=> limpiar()}>Limpiar</Button>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    subContainer:{
        display:"flex",
        flexDirection:'row',
        width:'100vw'
    },
    button:{
        backgroundColor:'#FFA500',
        marginHorizontal:20,
        marginVertical:10

    }
})