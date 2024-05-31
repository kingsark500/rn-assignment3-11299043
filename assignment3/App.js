import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,TextInput, SectionList } from 'react-native';

import { Button } from 'react-native';
 
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
      <Text style ={{ fontWeight: 'bold', fontSize: 2.5}}>
        Hello devs
       
      </Text>

      <Text style={{fontWeight:'200'}}>
        14 tasks today
      </Text>
     
     
     <TextInput style={styles.maxInput}
       placeholder='Search'>
      </TextInput>

     

     
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
    backgroundColor: '#C4A484',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maxInput: {
    borderColor: '#fff',
    borderRadius: 50,
    
  },
  item: {
    backgroundColor: '#E1D9D1',
    padding: 20,
    marginVertical: 8,
    borderRadius: 25,
    height: 100,

  },
  header: {
    fontSize: 25,
    backgroundColor: '#fff',
    height: 70,
    fontWeight: 'bold',

  },
  title: {
    fontSize: 24,
    
  }
});
