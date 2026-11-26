import { ScrollView, StyleSheet, View } from 'react-native';

import { Boton } from '@/components/boton';
import { EncabezadoSeccion } from '@/components/encabezado-seccion';
import { COLORES, ThemedText, ThemedView } from '@/components/themed';
import { abrirEnlace } from '@/utils/abrir-enlace';
import datos from '../../portfolio-data.json';

export default function PantallaContacto() {
  const c = datos.contacto;
  const whatsapp = `https://wa.me/${c.whatsappNumero}?text=${encodeURIComponent(c.whatsappMensaje)}`;

  return (
    <ScrollView style={styles.fondo} contentContainerStyle={styles.contenido}>
      <EncabezadoSeccion icono="✉" titulo="Contacto" subtitulo={c.texto} />

      <ThemedView style={styles.datos} claro={COLORES.blanco} oscuro="#122B47">
        <ThemedText>✉ {c.email}</ThemedText>
        <ThemedText>📞 {c.telefono}</ThemedText>
        {c.ubicacion ? <ThemedText>⌂ {c.ubicacion}</ThemedText> : null}
      </ThemedView>

      <View style={styles.botones}>
        <Boton texto="WhatsApp" color={COLORES.azulSuave} onPress={() => abrirEnlace(whatsapp)} />
        <Boton texto="Email" onPress={() => abrirEnlace(`mailto:${c.email}`)} />
        <Boton texto="Instagram" variante="borde" onPress={() => abrirEnlace(c.instagram)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: COLORES.fondo },
  contenido: { paddingBottom: 30 },
  datos: {
    margin: 16,
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORES.azulSuave,
    gap: 10,
  },
  botones: { paddingHorizontal: 16, gap: 10 },
});
