import * as React from 'react';
import { Platform, StyleSheet, Text, View,Button,TextInput } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {startDate:new Date(),
    endDate:new Date()}
  }


  


  a
setDate=(date)=>{
  
  console.log(date,"gggg")
}

  render(){
   const{startDate,endDate}= this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{color:"#fff",fontWeight:"700",fontSize:18}}>Appy Leave</Text>
        </View>
        <View style={styles.header1}>
          <Calendar
          style={{
            borderWidth: 0,
            borderColor: 'gray',
            height: 200
          }}
           theme={{
      arrowColor: '#fff',
      monthTextColor: 'white',
     
      'stylesheet.calendar.header': {
       
        header: {
          marginLeft:0,
          backgroundColor: "#2fca99",
          paddingLeft:100,
          flexDirection:"row",
         height:40,
         
        },
        month:{
          color:"#fff"
        }
        
      }
    }}
          startDate={startDate}
          endDate={endDate}
    // Collection of dates that have to be marked. Default = {}
    markingType={'period'}
    markedDates={{
      '2020-06-15': {marked: true, dotColor: '#50cebb'},
      '2020-06-16': {marked: true, dotColor: '#50cebb'},
      '2020-06-21': { color: '#ebedf6', textColor: 'black'},
      '2020-06-22': {color: '#ebedf6', textColor: 'black'},
      '2020-06-23': {color: '#ebedf6', textColor: 'black', marked: true, dotColor: 'white'},
      '2020-06-24': {color: '#ebedf6', textColor: 'black'},
      '2020-06-25': { color: '#ebedf6', textColor: 'black'},
    }}
  />
  </View>
  <View style={styles.header2}>
  <DatePicker
        style={{width: 400,backgroundColor:'#fff',margin:"2%"}}
        date={this.state.startDate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        iconComponent={
          <Icon 
          size={30}
          color='#2e2c83' 
          name='date-range' 
          /> 
       }
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: "20%",
            top: 8,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 0,
            borderColor:"#fff"
          }
          // ... You can check the source to find the other keys.
        }}
        // onDateChange={(date) => {this.setState({startDate: date})}}
        onDateChange={(date) => {this.setState({startDate: date})}}
      />
      <DatePicker
         style={{width: 400,backgroundColor:'#fff',margin:"2%"}}
        date={this.state.endDate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"

        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        iconComponent={
          <Icon 
          size={30}
          color='#2e2c83' 
          name='date-range' 
          /> 
       }
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: '40px'
          },
          dateInput: {
            marginLeft: 0,
            borderColor:"#fff"
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({endDate: date})}}
      />
      <TextInput
        style={{height: "60%", backgroundColor:'#fff',borderColor: 'gray', borderWidth: 1}}
        placeholder="Reason for Leave"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
        </View>
        <View style={styles.submitView}>
          <Button
            onPress={this.buttonClickListener}
            title="Apply"
            color="#2e2c83"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    margin:0,
    backgroundColor: '#F5FCFF',
  },
  header:{
    flex:1,
    backgroundColor:"#2e2c83",
    justifyContent:"center",
    alignItems:"center"
  },
  header1:{
    flex:6,
    backgroundColor:"#ebedf6"
  },
  header2:{
    flex:5,
    backgroundColor:"#ebedf6"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  submitView:{
    flex:2,
    width: "60%",
    marginTop:"10%",
    marginLeft:"20%",
    justifyContent:"center",
    alignContent:"center"
   
  },
  submitBtn:{
  
  }
});
