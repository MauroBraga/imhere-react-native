import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Participant(){

    function handleParticipantsDelete() {
        console.log('Adicionar participante')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Participant</Text>
            <TouchableOpacity style={styles.button} onPress={handleParticipantsDelete}>
                            <Text style={styles.buttonText}>-</Text>    
                        </TouchableOpacity>  
        </View>
    );
}

 Participant;