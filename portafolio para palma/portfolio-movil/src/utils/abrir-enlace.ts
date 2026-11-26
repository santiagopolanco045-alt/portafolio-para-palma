import { Linking } from 'react-native';

export function abrirEnlace(url: string) {
  void Linking.openURL(url);
}
