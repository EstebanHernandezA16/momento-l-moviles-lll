import { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import { Buttons } from "../Buttons/Buttons";

export const Form = () => {
  const [identificacion, setIdentificacion] = useState(null);
  const [nombres, setNombres] = useState(null);
  const [apellidos, setApellidos] = useState(null);
  const [notaUno, setNotaUno] = useState(null);
  const [notaDos, setNotaDos] = useState(null)
  const [notaTres, setNotaTres] = useState(null)
  const [definitiva,setDefinitiva] = useState(null)
  const [observaciones, setObservaciones] = useState(null)
  const [asignatura, setAsignatura] = useState(null)

  const valoresBase={
    identificacion:'1001226881',
    nombres:'Esteban',
    apellidos:'Hernandez Agudelo',
    notaUno:3.3,
    notaDos:3.2,
    notaTres:4.7,
    definitiva:3.7,
    asignatura:'Programacion',
    observaciones:'Alumno aprobó el semestre y se queda en la empresa'
  }
  const [historial, setHistorial] = useState([valoresBase])

 
useEffect(()=>{
  if (notaUno !== null && notaDos !== null && notaTres !== null && asignatura !== null) {
    const notaFinal = ((parseFloat(notaUno) + parseFloat(notaDos) + parseFloat(notaTres)) / 3).toFixed(2);
    setDefinitiva(notaFinal);
    setObservaciones(notaFinal>=3?`Ha ganado la asignatura ${asignatura}`: notaFinal<3 && notaFinal>=2? `Habilita con ${notaFinal}` :'Ha perdido')
  }
},[notaUno, notaDos, notaTres, asignatura])

const calcular = () =>{

  if(identificacion && nombres && apellidos && notaUno && notaDos && notaTres && asignatura){
    let registroRepetido = false
    const registrosABuscar = [...historial]

    registrosABuscar.map((registro)=>{
    
      console.log(registro);
      if (registro.identificacion === identificacion && registro.asignatura === asignatura) {
        registroRepetido=true
      }  
    })
    if(!registroRepetido){
  
      const notaFinal = ((parseFloat(notaUno)+parseFloat(notaDos)+parseFloat(notaTres))/3).toFixed(2)

    setDefinitiva(((parseFloat(notaUno)+parseFloat(notaDos)+parseFloat(notaTres))/3).toFixed(2))
    setObservaciones(notaFinal>=3?`Ha ganado la asignatura ${asignatura}`: notaFinal<3 && notaFinal>=2? `Habilita con ${notaFinal}` :'Ha perdido')
  const nuevosValores={
    identificacion,
    nombres,
    apellidos,
    notaUno,
    notaDos,
    notaTres,
    definitiva,
    asignatura,
    observaciones
  }
 

  const registros = [...historial, nuevosValores]

  setHistorial(registros)
  alert('Registro ingresado')
  limpiar()

    }else{
      alert(`Ese registro ya existe`)
    }
    
  }else{
    alert('Todos los campos son obligatorios')
  }
}



const buscar = () =>{

  const registros = [...historial]

  registros.map((registro)=>{
    console.log(registro);
    console.log(`${identificacion}==${registro.identificacion}? && ${asignatura}=${registro.asignatura}`);
    if(registro.identificacion===identificacion && registro.asignatura===asignatura){
      setNombres(registro.nombres)
      setApellidos(registro.apellidos)
      setNotaUno((registro.notaUno).toString())
      setNotaDos((registro.notaDos).toString())
      setNotaTres((registro.notaTres).toString())
      setDefinitiva((registro.definitiva).toString())
      setObservaciones(registro.observaciones)
      setAsignatura(registro.asignatura)

      alert(`Registro con identificacion: ${registro.identificacion} encontrado`)
    }else{
      alert(`Registro con identificacion: ${identificacion} no encontrado`)
    }
  })
}


const limpiar = () =>{
  setIdentificacion(null)
  setNombres(null)
  setApellidos(null)
  setAsignatura(null)
  setNotaUno(null)
  setNotaDos(null)
  setNotaTres(null)
  setDefinitiva(null)
  setObservaciones(null)
}








  return (
    <View style={{...styles.container, marginTop:30}}>
      <TextInput
        mode="outlined"
        label="Identificacion"
        value={identificacion}
        onChangeText={(textValue) => setIdentificacion(textValue)}
        style={styles.inputText}
      />
      <TextInput
        mode="outlined"
        label="Asignatura"
        value={asignatura}
        onChangeText={(textValue) => setAsignatura(textValue)}
        style={styles.inputText}
      />
      <TextInput
        mode="outlined"
        label="Nombres"
        value={nombres}
        onChangeText={(textValue) => setNombres(textValue)}
        style={styles.inputText}
      />
    <TextInput
        mode="outlined"
        label="Apellidos"
        value={apellidos}
        onChangeText={(textValue) => setApellidos(textValue)}
        style={styles.inputText}
      />
        <View style={styles.containerChildren}>
        <TextInput
        mode="outlined"
        label="Momento#1"
        keyboardType="numeric"
        value={notaUno}
        onChangeText={(value) => setNotaUno(parseFloat(value))}
        style={{...styles.inputText, marginHorizontal:20, width:'40%'}}
      />
      <TextInput
        mode="outlined"
        label="Momento#2"
        keyboardType="numeric"
        value={notaDos}
        onChangeText={(value) => setNotaDos(parseFloat(value))}
        style={{...styles.inputText, marginHorizontal:20, width:'40%'}}
      />
        </View>

        <View style={styles.containerChildren}>
        <TextInput
        mode="outlined"
        label="Momento#3"
        keyboardType="numeric"
        value={notaTres}
        onChangeText={(value) => setNotaTres(parseFloat(value))}
        style={{...styles.inputText, marginHorizontal:20, width:'40%'}}
      />

      <TextInput
        mode="outlined"
        label="Definitiva"
        value={definitiva}
        disabled
        onChangeText={(textValue) => setDefinitiva(textValue)}
        style={{...styles.inputText, marginHorizontal:20, width:'40%'}}
      />
        </View>

      <TextInput
        mode="outlined"
        label="Observaciones"
        value={observaciones}
        
        disabled
        onChangeText={(textValue) => setObservaciones(textValue)}
        style={{...styles.inputText, backgroundColor:definitiva>=3?'lime': definitiva<3 && definitiva>=2? 'orange':definitiva==null? 'white':'red' }}
      />

      <Buttons calcular={calcular} buscar={buscar} limpiar={limpiar}/>
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        width:'100%', height:'100%',
        alignItems: 'center',

    },
    containerChildren:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:'20%'
        
    },

    inputText:{
        width:'75%',
        marginHorizontal:'50%',
        height:40,
        marginVertical:'1.5%',
        backgroundColor:'#FFFFFF'
    }
})