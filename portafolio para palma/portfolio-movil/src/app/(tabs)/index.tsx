import { Image } from 'expo-image';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Boton } from '@/components/boton';
import { COLORES, ThemedText, ThemedView } from '@/components/themed';
import datos from '../../portfolio-data.json';

export default function PantallaInicio() {
  return (
    <ScrollView style={styles.fondo} contentContainerStyle={styles.contenido}>
      <View style={styles.encabezado}>
        <ThemedText claro="#C7D9EC" oscuro="#C7D9EC" style={styles.etiqueta}>
          PORTAFOLIO
        </ThemedText>
        <ThemedText tipo="titulo" claro={COLORES.blanco} oscuro={COLORES.blanco}>
          {datos.titulo}
        </ThemedText>
        <Image
          source={require('@/assets/images/perfil.jpeg')}
          style={styles.perfil}
          contentFit="cover"
          alt={`Foto de ${datos.primerNombre}`}
        />
      </View>

      <ThemedView style={styles.tarjeta} claro={COLORES.blanco} oscuro="#122B47">
        <ThemedText tipo="subtitulo" style={styles.bienvenida}>
          {datos.bienvenida}
        </ThemedText>
        <ThemedText style={styles.texto}>{datos.presentacion}</ThemedText>
        <ThemedText style={styles.texto}>{datos.descripcion}</ThemedText>

        <View style={styles.botones}>
          <Boton texto="Estudios" onPress={() => router.navigate('/estudios')} />
          <Boton
            texto="Habilidades"
            color={COLORES.azulSuave}
            onPress={() => router.navigate('/habilidades')}
          />
          <Boton texto="Contacto" variante="borde" onPress={() => router.navigate('/contacto')} />
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: COLORES.fondo },
  contenido: { paddingBottom: 28 },
  encabezado: {
    height: 158,
    position: 'relative',
    backgroundColor: COLORES.azul,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  etiqueta: { fontSize: 12, letterSpacing: 1.2, marginBottom: 7 },
  perfil: {
    width: 96,
    height: 96,
    borderRadius: 18,
    position: 'absolute',
    bottom: -26,
    left: 20,
    borderWidth: 3,
    borderColor: COLORES.blanco,
    backgroundColor: COLORES.blanco,
  },
  tarjeta: {
    marginHorizontal: 16,
    marginTop: 46,
    padding: 18,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORES.azulSuave,
  },
  bienvenida: { color: COLORES.azul, marginBottom: 8 },
  texto: { marginBottom: 6 },
  botones: { gap: 10, marginTop: 14 },
});
