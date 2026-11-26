import { Text, TextProps, View, ViewProps, useColorScheme } from 'react-native';

export type ThemedTextProps = TextProps & {
  tipo?: 'titulo' | 'subtitulo' | 'normal' | 'negrita' | 'enlace';
  claro?: string;
  oscuro?: string;
};

export const COLORES = {
  azul: '#0B1F3A',
  azulSuave: '#1D4E89',
  blanco: '#FFFFFF',
  texto: '#102A43',
  gris: '#5B7189',
  linea: '#D8E3EE',
  fondo: '#F4F7FA',
};

const colores = {
  claro: { texto: COLORES.texto, fondo: COLORES.fondo, enlace: COLORES.azulSuave },
  oscuro: { texto: '#F4F7FA', fondo: '#0B1F3A', enlace: '#9FC4E8' },
};

export function ThemedText({
  style,
  tipo = 'normal',
  claro,
  oscuro,
  ...props
}: ThemedTextProps) {
  const oscuroActivo = useColorScheme() === 'dark';
  const porDefecto = tipo === 'enlace' ? colores.claro.enlace : colores.claro.texto;
  const color = oscuroActivo
    ? oscuro ?? (tipo === 'enlace' ? colores.oscuro.enlace : colores.oscuro.texto)
    : claro ?? porDefecto;

  return (
    <Text
      style={[
        estilos.normal,
        tipo === 'titulo' && estilos.titulo,
        tipo === 'subtitulo' && estilos.subtitulo,
        tipo === 'negrita' && estilos.negrita,
        tipo === 'enlace' && estilos.enlace,
        { color },
        style,
      ]}
      {...props}
    />
  );
}

export type ThemedViewProps = ViewProps & {
  claro?: string;
  oscuro?: string;
};

export function ThemedView({ style, claro, oscuro, ...props }: ThemedViewProps) {
  const oscuroActivo = useColorScheme() === 'dark';
  const fondo = oscuroActivo ? oscuro ?? colores.oscuro.fondo : claro ?? colores.claro.fondo;

  return <View style={[{ backgroundColor: fondo }, style]} {...props} />;
}

const estilos = {
  normal: { fontSize: 16, lineHeight: 23 },
  titulo: { fontSize: 26, fontWeight: '700' as const, lineHeight: 32 },
  subtitulo: { fontSize: 18, fontWeight: '600' as const, lineHeight: 24 },
  negrita: { fontSize: 16, fontWeight: '600' as const, lineHeight: 23 },
  enlace: { fontSize: 15, lineHeight: 21, textDecorationLine: 'underline' as const },
};
