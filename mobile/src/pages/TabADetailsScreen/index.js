import React from 'react';

import { Text, View, Button } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function TabADetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Bem vindo ao App
        </Text>
        <Button
          onPress={() => navigation.navigate('TabA Details')}
          title="Detalhes"
        />
      </View>
    );
  }