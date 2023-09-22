import * as React from 'react';
import {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import CalButton from '../../components/CalButton'
import CalButton1 from '../../components/CalButton1'
import CalButton2 from '../../components/CalButton2'


export default function CalculatorScreen() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (text) => {
    setInput(input + text);
  };

  const backSpace = ()=>{
    setResult('');
  if (input.length > 0) {
    setInput(input.slice(0, -1));
    
  }
  return ;
}


  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

    return (
      <View style={styles.container}> 

        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center',   }}>
            <Text
                
                style={{ fontSize: 26, fontWeight: 'bold' , flex:1}}>{input}</Text>
                 <Text
              
                style={{ fontSize: 30, fontWeight: 'bold', textAlign:"end", flex:1 }}>{result}</Text>
        </View>

          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center',  }}>
            <View style={styles.buttonRow}> 
            <CalButton label={"AC"}  onPress={clearInput}/>
            <CalButton label={"<x]"} icon = {"backspace"} onPress={backSpace}/>
            <CalButton label={"%"} onPress={()=>{}}/>
            <CalButton label={"÷"} value={"/"} onPress={handleButtonPress}/>
            </View>
             <View style={styles.buttonRow}> 
            <CalButton1 label={"7"} onPress={handleButtonPress}/>
            <CalButton1 label={"8"} onPress={handleButtonPress}/>
            <CalButton1 label={"9"} onPress={handleButtonPress}/>
            <CalButton label={"x"} value={"*"} onPress={handleButtonPress}/>
            </View>
             <View style={styles.buttonRow}> 
            <CalButton1 label={"4"} onPress={handleButtonPress}/>
            <CalButton1 label={"5"} onPress={handleButtonPress}/>
            <CalButton1 label={"6"} onPress={handleButtonPress}/>
            <CalButton label={"-"} onPress={handleButtonPress}/>
            </View>
             <View style={styles.buttonRow}> 
            <CalButton1 label={"1"} onPress={handleButtonPress}/>
            <CalButton1 label={"2"} onPress={handleButtonPress}/>
            <CalButton1 label={"3"} onPress={handleButtonPress}/>
            <CalButton label={"+"} onPress={handleButtonPress}/>
            </View>
             <View style={styles.buttonRow}> 
            <CalButton label={"[]{}"} icon={"phone-landscape"} onPress={()=>{}}/>
            <CalButton1 label={"0"} onPress={handleButtonPress}/>
            <CalButton1 label={"."} onPress={handleButtonPress}/>
            <CalButton2 label={"="} onPress={handleCalculate}/>
            </View>
        </View>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },

    buttonRow: {
      width:"100%",
      flex:1,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-around'
  },

});