import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    carContainer: {
  
      width: '100%',
  
      height: '100%'
  
    },
    
    carInfo: {
  
      width: '100%',
  
      marginTop: '30%',
  
      alignItems: 'center'
  
    },
  
    title: {
  
      fontSize: 40,
  
      fontWeight: 600
  
    },
  
    subtitle: {
  
      fontSize: 16,
  
      color: '#5c5e62'
  
    },

    subtitleCTA: {
  
      textDecorationLine: 'underline'
  
    },
  
    image: {
  
      width: '100%',
  
      height: '100%',
  
      resizeMode: 'cover',
  
      position: 'absolute'
  
    },

    buttonContainer: {

      width: '100%',

      position: 'absolute',

      bottom: 50

    }
  
  });

  export default styles;