import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView } from 'react-native';

const todos = [
  { id: "1",
    name:"buy fruits"
  },
  { id: "2",
    name:"meeting with boss"
  },
  { id: "3",
    name:"wash my car"
  },
  { id: "4",
    name:"lunch with friends"
  }
]

export default function App() {
  return (
    <SafeAreaView>
      <FlatList
        data={todos}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    padding:20,
    fontSize:15,
    marginTop:5
  }
});
