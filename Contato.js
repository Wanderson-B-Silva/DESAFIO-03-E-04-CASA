import { View, Text } from 'react-native';
import estilos from '../Estilos/estilos';

export default function Home() {
  return (
    <View style={[estilos.tela, estilos.home]}>
      <Text style={estilos.tituloClaro}>Home</Text>
      <Text style={estilos.textoClaro}>Tela inicial acessada por Tabs e Drawer.</Text>
    </View>
  );
}
