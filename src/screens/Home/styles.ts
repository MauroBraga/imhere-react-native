import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 24,
        backgroundColor: '#131016'
    },
    eventName:{
      color: '#fDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate:{
      color: '#6B6B6B',
      fontSize: 16,
    },
    input: {
        flex: 1,
        width: 300,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,   
        marginRight: 12
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,

    },
    button:{
        width: 56,
        height: 56,
        backgroundColor: '#31CF67',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 36,
        marginBottom: 42
    }
  })