import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Porps = {
    name: string;
    onRemove: () => void;
}

export default function Participant({name,onRemove}: Porps){
    
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                            <Text style={styles.buttonText}>-</Text>    
                        </TouchableOpacity>  
        </View>
    );
}

 Participant;