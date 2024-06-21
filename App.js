import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

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
    <View style={styles.container}>
      <ScrollView>
      {todos.map((todo) => {
        return (
          <View>
            <Text style={styles.item}>{todo.name}</Text>
          </View>
        );
      })}
      <StatusBar style="auto" />
      </ScrollView>
    </View>
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
