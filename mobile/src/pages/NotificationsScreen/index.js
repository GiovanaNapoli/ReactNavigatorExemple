import React from 'react';

import { Text, View, Button } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Notificações ficam aqui</Text>
        <Button
          onPress={() => navigation.goBack()}
          title="Voltar para o inicio"
        />
      </View>
    );
  }