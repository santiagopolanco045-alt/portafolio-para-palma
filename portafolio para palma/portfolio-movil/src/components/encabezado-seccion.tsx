import { StyleSheet, View } from 'react-native';

import { COLORES, ThemedText, ThemedView } from '@/components/themed';

export function EncabezadoSeccion({
  icono,
  titulo,
  subtitulo,
}: {
  icono: string;
  titulo: string;
  subtitulo?: string;
}) {
  return (
    <ThemedView style={styles.contenedor} claro={COLORES.azul} oscuro={COLORES.azul}>
      <View style={styles.iconoFondo}>
        <ThemedText claro={COLORES.blanco} oscuro={COLORES.blanco} style={styles.icono}>
          {icono}
        </ThemedText>
      </View>
      <View style={styles.textos}>
        <ThemedText tipo="titulo" claro={COLORES.blanco} oscuro={COLORES.blanco}>
          {titulo}
        </ThemedText>
        {subtitulo ? (
          <ThemedText claro="#C7D9EC" oscuro="#C7D9EC" style={styles.subtitulo}>
            {subtitulo}
          </ThemedText>
        ) : null}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    minHeight: 108,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  iconoFondo: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.14)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icono: { fontSize: 26, lineHeight: 32 },
  textos: { flex: 1, gap: 3 },
  subtitulo: { fontSize: 14, lineHeight: 19 },
});
