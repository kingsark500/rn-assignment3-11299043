import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,TextInput, SectionList } from 'react-native';

import { Button, Image } from 'react-native';
 
const Ongoing =[
  {
    title: "Ongoing Task",
    data: [
      "Mobile App Development", "Web Development","Push ups","Situps",
      "Crunches","Software Development","System Administration",
      "Computation", "Algorithm Solving","flutter kicks", "Quiz preparation",
      "Stretch", "Arm raises","Debugging", "Testing",

    ]
  }
];


const Item = ({ title }) => (
  <Text style={{ fontSize: 20 }}>{title}</Text>
);




export default function App() {
  return (
    
    
        <View style={styles.container}>
      <Text style ={styles.titletext}> 
        Hello, Devs
      </Text>

      <Text style={{fontWeight:'200'}}>
        14 tasks today
      </Text>
      
     <View>
     <TextInput style={styles.maxInput}
       placeholder='Search'>
      </TextInput>
     

      
     </View>
     
     

      <View>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>
          Categories
        </Text>

        <Image style={{backgroundColor:'#f7f0e8'}} source={require("./Group 9.png")}/>

    
      </View>

     

     
     <SectionList
      sections={Ongoing}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
    

      <StatusBar style="auto" />
    </View>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    justifyContent: 'center',
  },
  maxInput: {
    borderColor: '#fff',
    borderRadius: 50,
    
  },
  item: {
    backgroundColor: '#fbf9f7',
    padding: 20,
    marginVertical: 8,
    borderRadius: 25,
    height: 100,

  },
  header: {
    fontSize: 25,
    height: 70,
    fontWeight: 'bold',

  },
  title: {
    fontSize: 24,
    
  },

  titletext:{
    height: 50,
    alignItems:'flex-start',
    fontWeight:'bold',
    fontSize: 25,
    marginTop: 30,
    
  },
  maxInput:{
    height: 50,
    alignItems:'center',
    backgroundColor:'#fbf9f7'
  },

});
