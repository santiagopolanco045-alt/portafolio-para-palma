import { Pressable, StyleSheet } from 'react-native';

import { COLORES, ThemedText } from '@/components/themed';

export function Boton({
  texto,
  onPress,
  color = COLORES.azul,
  variante = 'relleno',
  deshabilitado = false,
}: {
  texto: string;
  onPress?: () => void;
  color?: string;
  variante?: 'relleno' | 'borde';
  deshabilitado?: boolean;
}) {
  const activoColor = deshabilitado ? COLORES.gris : color;

  return (
    <Pressable
      onPress={deshabilitado ? undefined : onPress}
      disabled={deshabilitado}
      accessibilityRole="button"
      accessibilityState={{ disabled: deshabilitado }}
      style={({ pressed }) => [
        styles.base,
        variante === 'relleno'
          ? { backgroundColor: activoColor, borderColor: activoColor }
          : { backgroundColor: 'transparent', borderColor: activoColor },
        !deshabilitado && pressed && styles.presionado,
      ]}
    >
      <ThemedText
        style={[styles.texto, variante === 'relleno' ? { color: COLORES.blanco } : { color: activoColor }]}
        claro={variante === 'relleno' ? COLORES.blanco : activoColor}
        oscuro={variante === 'relleno' ? COLORES.blanco : activoColor}
      >
        {texto}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 10,
    borderWidth: 1.5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  presionado: { opacity: 0.8 },
  texto: { fontWeight: '700', textAlign: 'center' },
});
