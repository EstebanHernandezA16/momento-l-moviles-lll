
import { StyleSheet, Text, View } from 'react-native';
import { FooterApp } from './src/components/shared/Footer/Footer';
import { Navbar } from './src/components/shared/Navbar/Navbar';
import { Form } from './src/components/Form/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.45, backgroundColor:'#333333', justifyContent:'center',alignItems:'center', maxHeight:80,width:'100%',marginTop:25 }}>
        <Navbar />
      </View>
      <View style={{ flex: 0.45, backgroundColor:'#191970',justifyContent:'center',alignItems:'center',width:'100%' }}>
        <Form />
      </View>
      <View style={{ flex: 0.1,justifyContent:'center',alignItems:'center',width:'100%', backgroundColor:'#333333',maxHeight:60 }}>
        <FooterApp />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
