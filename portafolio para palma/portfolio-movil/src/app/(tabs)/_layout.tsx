import { Tabs } from 'expo-router';

import { COLORES } from '@/components/themed';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORES.azul,
        tabBarInactiveTintColor: COLORES.gris,
        tabBarStyle: {
          backgroundColor: COLORES.blanco,
          borderTopColor: COLORES.linea,
          height: 56,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '700', textTransform: 'uppercase' },
        tabBarIcon: () => null,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="estudios" options={{ title: 'Estudios' }} />
      <Tabs.Screen name="habilidades" options={{ title: 'Habilidades' }} />
      <Tabs.Screen name="contacto" options={{ title: 'Contacto' }} />
    </Tabs>
  );
}
