import { View, Text } from 'react-native';
import estilos from '../Estilos/estilos';

export default function Contato() {
  return (
    <View style={[estilos.tela, estilos.contato]}>
      <Text style={estilos.tituloEscuro}>Contato</Text>
      <Text style={estilos.textoEscuro}>Tela contato acessada por Tabs e Drawer.</Text>
    </View>
  );
}
