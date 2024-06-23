import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TextInput } from 'react-native';

const todosList = [
  { id: 1,
    name:"buy fruits"
  },
  { id: 2,
    name:"meeting with boss"
  },
  { id: 3,
    name:"wash my car"
  },
  { id: 4,
    name:"lunch with friends"
  }
]

export default function App() {

  const myItemSeparator = () => {
    return <View style={{height:1, backgroundColor: "grey", marginHorizontal:10}}></View>
  }

 // const [todos, setTodos] = useState(() => addTodo);
  const [text, setText] = useState();

 /* function addTodo()
  {
    const newTodo = {id: "5", name:"Ola!"};
    todosList.push(newTodo);
  }*/

  const myListEmpty = () => {
    return (
      <View style={{alignItems:"center"}}>
        <Text style={styles.item}>List is empty</Text>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <TextInput
      style={styles.input}
      placeholder='Add Task'
      keyboardType='default'
      value={text}
      onChangeText={e => setText(e.target.value)}
      >
    <button
    onClick={() => {
      setText(''),
      setTodos([{
        id: todosList.length,
        name: text
      },...todosList]);
    }}
    > Add </button>
        
      </TextInput>
      <FlatList
        data={todosList}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent= {myItemSeparator}
        ListEmptyComponent = {myListEmpty}
        ListHeaderComponent={() => (
          <Text style={{fontSize:30, textAlign: "center", marginTop:20, fontWeight:'bold', textDecorationLine:'underline'}}>
            Todo List
          </Text>
        )}
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});