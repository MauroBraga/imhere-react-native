import React from 'react';
import { Text, View } from 'react-native';

export default function App(){
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#131016'}}>
      <Text style={{
        color: '#fDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
      }}>Nome do Evento</Text>
      <Text style={{
        color: '#6B6B6B',
        fontSize: 16,
      }}>Sexta, 4 de Novembro de 2024</Text>
    </View>
    
  );
}