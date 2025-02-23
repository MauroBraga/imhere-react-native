import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Participant from '../components/Participant';



export default function Home(){
   

    function handleParticipantsAdd() {
       console.log('Adicionar participante')
    }
  return (
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do Evento</Text>
        <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

        <View style={styles.form}>
            <TextInput style={styles.input} placeholder='Nome do participante' placeholderTextColor='#6B6B6B'/>

            <TouchableOpacity style={styles.button} onPress={handleParticipantsAdd}>
                <Text style={styles.buttonText}>+</Text>    
            </TouchableOpacity>
        </View>

        <Participant />
        <Participant />
       
      </View>
      
    );
}