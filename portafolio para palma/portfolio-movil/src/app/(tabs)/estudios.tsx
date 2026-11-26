import { ScrollView, StyleSheet } from 'react-native';

import { EncabezadoSeccion } from '@/components/encabezado-seccion';
import { Tarjeta } from '@/components/tarjeta';
import { COLORES, ThemedView } from '@/components/themed';
import { abrirEnlace } from '@/utils/abrir-enlace';
import datos from '../../portfolio-data.json';

export default function PantallaEstudios() {
  return (
    <ScrollView style={styles.fondo} contentContainerStyle={styles.contenido}>
      <EncabezadoSeccion icono="🎓" titulo="Estudios" />
      <ThemedView style={styles.lista}>
        {datos.estudios.map((item, indice) => (
          <Tarjeta key={`${item.titulo}-${indice}`} item={item} onAbrirEnlace={abrirEnlace} />
        ))}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: COLORES.fondo },
  contenido: { paddingBottom: 28 },
  lista: { paddingHorizontal: 16, paddingTop: 20, backgroundColor: 'transparent' },
});
