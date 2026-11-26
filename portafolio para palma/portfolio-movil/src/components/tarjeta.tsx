import { StyleSheet, View } from 'react-native';

import { Boton } from '@/components/boton';
import { COLORES, ThemedText, ThemedView } from '@/components/themed';

export type TarjetaItem = {
  titulo: string;
  detalle: string;
  icono: string;
  periodo?: string;
  nivel?: number;
  enlace?: { texto: string; url: string } | null;
};

export function Tarjeta({ item, onAbrirEnlace }: { item: TarjetaItem; onAbrirEnlace: (url: string) => void }) {
  return (
    <ThemedView style={styles.tarjeta} claro={COLORES.blanco} oscuro="#122B47">
      <View style={styles.encabezado}>
        <ThemedText style={styles.icono}>{item.icono}</ThemedText>
        <View style={styles.titulos}>
          <ThemedText tipo="negrita">{item.titulo}</ThemedText>
          {item.periodo ? <ThemedText style={styles.periodo}>{item.periodo}</ThemedText> : null}
        </View>
        {typeof item.nivel === 'number' ? (
          <ThemedText style={styles.nivel}>{item.nivel}/100</ThemedText>
        ) : null}
      </View>

      <ThemedText style={styles.detalle}>{item.detalle}</ThemedText>

      {typeof item.nivel === 'number' ? (
        <View style={styles.barraFondo}>
          <View style={[styles.barraRelleno, { width: `${item.nivel}%` }]} />
        </View>
      ) : null}

      {item.enlace ? (
        <View style={styles.boton}>
          <Boton
            texto={item.enlace.texto}
            variante="borde"
            onPress={() => onAbrirEnlace(item.enlace!.url)}
          />
        </View>
      ) : null}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORES.azulSuave,
    padding: 15,
    marginBottom: 12,
    gap: 9,
  },
  encabezado: { flexDirection: 'row', alignItems: 'center', gap: 11 },
  icono: { fontSize: 25, lineHeight: 31 },
  titulos: { flex: 1 },
  periodo: { fontSize: 13, color: COLORES.gris },
  nivel: { fontSize: 13, fontWeight: '700', color: COLORES.azulSuave },
  detalle: { opacity: 0.85 },
  barraFondo: { height: 7, borderRadius: 4, backgroundColor: COLORES.linea, overflow: 'hidden' },
  barraRelleno: { height: '100%', borderRadius: 4, backgroundColor: COLORES.azul },
  boton: { marginTop: 4 },
});
