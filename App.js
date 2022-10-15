import React, {useState} from 'react';
import { Pressable, Button, TouchableOpacity, FlatList, Text, View, StyleSheet, Image} from 'react-native';
import './App.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import {ListItem } from 'react-native-elements'
import users from './src/data/users'


function App(){
  const MainView = ({navigation}) => {

 function getUser({item: user}){
    return(
      <ListItem 
        leftAvatar={{source:{url: users.avatarUrl}}}
        key={users.index}
        title={users.name}
        subtitle={users.email}
        bottomDivider
      />
    ) 
  }

  const ListItem = ({item}) => {
    const ListItemStyle = {
      marginHorizontal: 10,
      marginVertical: 5,
      paddingBottom: 2,
    }
  return (
    <View style = {styles.list}>
      <Pressable style={ListItemStyle}>
        <Text style={styles.name}>{item.firstName} {item.lastName}</Text> 
        <TouchableOpacity  onPress={() => navigation.navigate('Edit')}> 
          <Image style={styles.edit} source={require('./assets/editar.png')} > </Image>
        </TouchableOpacity>
        <Text style={styles.dados}>E-mail: {item.email} </Text> 
        <Text style={styles.dados}>Data de nascimento: {item.birthday} </Text>         
      </Pressable>
    </View>
    )  
  }

  return (
    <View style={styles.container}>  {/* View da lista*/}
    
        <FlatList
          keyExtractor ={user => user.index.toString()}
          data2={users}
          //renderItem={getUser(users)}
          data={data.sort((a, b) => a.lastName.localeCompare(b.lastName)).sort((a, b) => a.firstName.localeCompare(b.firstName))}
          renderItem={ListItem}
          extraData={listSize}
        />
      <Button title="Adicionar novo contato" onPress={() => navigation.navigate('Add', {someData: Math.floor(Math.random() * 100) }, data .push(new_item), setListSize(data.length))} />       
    </View>
  )
}

  const Edit = ({route, navigation}) => {
    return (
      <View style={styles.container}> 
        <Text style={styles.paragraph}>
            Edite o contato
        </Text>
      </View>
    )
  }
  const Add = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Crie novo contato:
      </Text>
    </View>
  )
}
  const [listSize, setListSize] = useState(data.length)
  return (
    <div className="container" style={styles.container}>
      <div className="container" style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Lista de contatos">
            <Stack.Screen 
                name="Lista de contatos" 
                component={MainView}
          />
            <Stack.Screen 
                name="Add" 
                component={Add} 
                options={{
                    title: "Novo contato"
                }}
                onPress={() => {data.push(new_item); 
                setListSize(data.length)}}/>
            <Stack.Screen 
                name="Edit"
                component={Edit}
                options={{
                  title:"Edite o contato"
                }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </div>
  </div>
  );
}
const data = [
  {
    "index": 0,
    "firstName": "Contreras",
    "lastName": "Castillo",
    "company": "Bisba",
    "email": "contrerascastillo@bisba.com",
    "birthday": "09/05/1996",
    "avatarUrl": "https://pixabay.com/pt/vectors/avatar-pessoa-neutro-homem-159236/"
  },
  {
    "index": 1,
    "firstName": "Berg",
    "lastName": "Drake",
    "company": "Strozen",
    "email": "bergdrake@strozen.com",
    "birthday": "09/05/1998",
    "avatarUrl": "https://pixabay.com/pt/vectors/avatar-pessoa-neutro-homem-159236/"
  },
  {
    "index": 2,
    "firstName": "Leon",
    "lastName": "Franco",
    "company": "Prosely",
    "email": "leonfranco@prosely.com",
    "birthday": "09/05/2000",
    "avatarUrl": "https://pixabay.com/pt/vectors/avatar-pessoa-neutro-homem-159236/"
  },
  {
    "index": 3,
    "firstName": "Jordan",
    "lastName": "Grimes",
    "company": "Applica",
    "email": "jordangrimes@applica.com",
    "birthday": "09/05/2006",
    "avatarUrl": "https://pixabay.com/pt/vectors/avatar-pessoa-neutro-homem-159236/"
  },
  {
    "index": 4,
    "firstName": "Janis",
    "lastName": "Taylor",
    "company": "Automon",
    "email": "janistaylor@automon.com",
    "birthday": "09/09/1993",
    "avatarUrl": "https://pixabay.com/pt/vectors/avatar-pessoa-neutro-homem-159236/"
  },
  {
    "index": 5,
    "firstName": "Mary",
    "lastName": "Kirkland",
    "company": "Comstruct",
    "email": "marykirkland@comstruct.com",
    "birthday": "19/05/2005",
    "avatarUrl": "https://pixabay.com/pt/vectors/avatar-pessoa-neutro-homem-159236/"
  },
  {
    "index": 6,
    "firstName": "Janis",
    "lastName": "Amber",
    "company": "Automon",
    "email": "janisamber@automon.com",
    "birthday": "09/05/1990",
    "avatarUrl": "https://pixabay.com/pt/vectors/avatar-pessoa-neutro-homem-159236/"
  },
  {
    "index": 7,
    "firstName": "Marcia",
    "lastName": "Kirkland",
    "company": "Automon",
    "email": "marciakirkland@automon.com",
    "birthday": "09/05/1999",
    "avatarUrl": "https://pixabay.com/pt/vectors/avatar-pessoa-neutro-homem-159236/"
  },
]

const new_item = {
  "index": 8,
  "firstName": "Holt",
  "lastName": "Fernandez",
  "company": "Squish",
  "email": "holtfernandez@squish.com",
  "birthday": "09/05/1995"
}

const alert = (item) => {
  console.log(item)
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    margin: 40,
    padding: 8,
    flax: 1,
    justifyContent: 'center',
  },
  edit: {
    width: 20,
    height: 20,
    marginLeft: 300,
  },
  name:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  dados:{
    fontSize: 15,
  },
  list:{
    padding: 8,
    flax: 1,
    justifyContent: 'center',
  }
});

export default App;