import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Participant from '../components/Participant';



export default function Home(){

  const [participants, setParticipants] = useState(['Rodriro', 'Diego', 'Mayk']);
    
   

    function handleParticipantsAdd() {
       console.log('Adicionar participante')
    }

    function handleParticipantsDelete(name:string) {
      console.log('Remover participante', name)
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
        <ScrollView >
        {participants.map((participant) => (
          <Participant key={participant} name={participant} onRemove={() => handleParticipantsDelete(participant)}/>
        ))}
        
        </ScrollView>
      </View>
      
    );
}