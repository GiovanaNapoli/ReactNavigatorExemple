import React from 'react';
import { Text, View, Button } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function Details({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Detalhes do App
            </Text>
            <Button
                onPress={() => navigation.goBack()}
                title="Voltar para o inicio"
            />
        </View>
    );
}