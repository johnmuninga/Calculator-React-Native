import {View, TouchableOpacity, Text,StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CalButton3 ({ label, onPress,value, icon}){

    return (
      
   <TouchableOpacity onPress={ ()=>{
        if(value){
           onPress(value);
        }
        else if(label){
          onPress(label);
        }
        else{
          onPress();
        }

        }}>
      <View style = {styles.button}>
    
       <Text style={styles.buttonText}>{label} </Text>
     
      
       </View>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 30,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 32,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    height:50,
    width:50,
    margin: 5,
   backgroundColor: 'orange',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    textAlign:"center",
    color:"white"
  },
  calculateButtonText: {
    color: 'green',
  },
  clearButtonText: {
    color: 'red',
  },
});
