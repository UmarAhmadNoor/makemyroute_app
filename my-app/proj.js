import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, ImageBackground, View, FlatList, ScrollView, Image, Button, SectionList, Pressable, Touchable, TouchableOpacity, ScrollViewBase, Dimensions } from 'react-native';
import { React, useEffect, useState } from 'react'
import { Component } from 'react/cjs/react.production.min';
import { NavigationContainer } from '@react-navigation/native';
import { createErrorHandler } from 'expo/build/errors/ExpoErrorManager';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EvilIcons } from '@expo/vector-icons';
 
import DropDownPicker from 'react-native-dropdown-picker';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} /> 
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Detailsss" component={UserInputScreen} />

      </Stack.Navigator>
    </NavigationContainer> 

  );
};
const SearchScreen = ({ navigation }) => {
  const go_to_Home = () => {
    navigation.navigate('Home')
  }
  

  return (
    <ImageBackground source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg/1024px-Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg" }}

      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>How do you want to proceed?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={go_to_Home}>Surprise Destinations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}  onPress={go_to_Filter}>Search by Filters </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

  };
const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlerlogin = () => {

    if (username == "" && password == '') {
      navigation.navigate('Search');
    } else {

      console.warn("Please put the correct data to login app");
    }

  };


  return (
    <View style={styles.cont}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handlerlogin}>
        <Text style={styles.buttonText} >Login</Text>
      </TouchableOpacity>
    </View>

  )
}   




const UserInputScreen = ({ navigation }) => {

  const go_to_filter=()=>
  { 
    navigation.navigate('Detailsss')
  }

  const [category, setCategory] = useState(null);
  const [city, setCity] = useState(null);
  const [province, setProvince] = useState(null);


  const categories = [
    { label: 'Religious', value: 'Religious' },
    { label: 'Mosque', value: 'Mosque' },
    { label: 'Natural', value: 'Natural' },
    { label: 'Mountain', value: 'Mountain' },
  ];

  const cities = ['Islamabad', 'Hyderabad', 'Sialkot', 'Multan', 'Murree'];

  const provinces = ['Punjab', 'Balochistan', 'Sindh', 'KPK', 'Islamabad Capital Territory'];

  const handleSearch = () => {
    // You can navigate to the next screen or perform actions based on user inputs
    // For now, let's log the selected inputs
    console.log('Category:', category);
    console.log('City:', city);
    console.log('Province:', province);
  };

  return (
    <ImageBackground source={require('./background_image.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>User Input</Text>
        <DropDownPicker
          items={categories}
          placeholder="Select Category"
          containerStyle={styles.inputContainer}
          style={styles.dropdownStyle}
          itemStyle={styles.dropdownItemStyle}
          dropDownStyle={styles.dropdownDropStyle}
          onChangeItem={(item) => setCategory(item.value)}
        />
        <DropDownPicker
          items={cities.map((c) => ({ label: c, value: c }))}
          placeholder="Select City"
          containerStyle={styles.inputContainer}
          style={styles.dropdownStyle}
          itemStyle={styles.dropdownItemStyle}
          dropDownStyle={styles.dropdownDropStyle}
          onChangeItem={(item) => setCity(item.value)}
        />
        <DropDownPicker
          items={provinces.map((p) => ({ label: p, value: p }))}
          placeholder="Select Province"
          containerStyle={styles.inputContainer}
          style={styles.dropdownStyle}
          itemStyle={styles.dropdownItemStyle}
          dropDownStyle={styles.dropdownDropStyle}
          onChangeItem={(item) => setProvince(item.value)}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
    </ImageBackground>
  );
};












const HomeScreen = ({ navigation }) => {

  const handleExplore = () => {
    navigation.navigate('Details');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>MakeMyRoute</Text>
      </View>

      <View style={styles.searchInput}>

        <TextInput
          style={styles.inputs}
          placeholder="Search location here" />

      </View>
      <ScrollView>
        <View style={styles.categories}>
          <TouchableOpacity><Text style={{ backgroundColor: "green", borderRadius: 10, fontSize: 17, padding: 5, marginRight: 4, color: "white" }}>Religious</Text></TouchableOpacity>
          <TouchableOpacity><Text style={{ backgroundColor: "green", borderRadius: 10, fontSize: 17, padding: 5, marginRight: 4, color: "white" }}>Historical</Text></TouchableOpacity>
          <TouchableOpacity><Text style={{ backgroundColor: "green", borderRadius: 10, fontSize: 17, padding: 5, marginRight: 4, color: "white" }}>shrine</Text></TouchableOpacity>
          <TouchableOpacity><Text style={{ backgroundColor: "green", borderRadius: 10, fontSize: 17, padding: 5, marginRight: 4, color: "white" }}>Lake</Text></TouchableOpacity>
          <TouchableOpacity><Text style={{ backgroundColor: "green", borderRadius: 10, fontSize: 17, padding: 5, marginRight: 4, color: "white" }}>Mountain</Text></TouchableOpacity>
        </View>
      </ScrollView>


      <TouchableOpacity style={styles.appCard}>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg/1024px-Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg" }}
          style={styles.appImage}
        />
        <Text style={styles.appTitle}>Faisal Mosque</Text>
        <Text style={styles.appDescription}>Faisal Mosque is situated in Islamabad,Pakistan,is an architectural marvel known for its modern design and vast capacity to accommodate worshippers,reflecting the country's Islamic heritage.</Text>
      </TouchableOpacity>
      <View style={styles.Button1}>
        <TouchableOpacity onPress={handleExplore} >
          <Text style={styles.btntext}>
            Explore
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.appCard}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1531804308561-b6438d25a810?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhaG9yZSUyMG5pZ2h0fGVufDB8fDB8fHww" }}
          style={styles.appImage}
        />
        <Text style={styles.appTitle}>Hunza Valley</Text>
        <Text style={styles.appDescription}>Hunza Valley is nestled in the Gilgit-Baltistan region of Pakistan,is renowned for its breathtaking natural beauty,boasting snow-capped peaks,crystal-clear rivers,and lush greenery.</Text>
      </TouchableOpacity>
      <View style={styles.Button1}>
        <TouchableOpacity onPress={handleExplore} ><Text style={styles.btntext}> Explore</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.appCard}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1531804308561-b6438d25a810?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhaG9yZSUyMG5pZ2h0fGVufDB8fDB8fHww" }}
          style={styles.appImage}
        />
        <Text style={styles.appTitle}>Lahore Fort</Text>
        <Text style={styles.appDescription}>Lahore Fort is also known as Shahi Qila,is a historical gem located in Lahore,Pakistan,showcasing a blend of Mughal and Sikh architectural influences,representing centuries of rich cultural heritage.</Text>
      </TouchableOpacity>
      <View style={styles.Button1}>
        <TouchableOpacity onPress={handleExplore} >
          <Text style={styles.btntext}>
            Explore
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.appCard}>
        <Image
          source={{ uri: "https://media.istockphoto.com/id/535695503/photo/pakistan-monument-islamabad.webp?b=1&s=170667a&w=0&k=20&c=P9bV8YuP2gCVEloH5ASVrAHebs28Xa8MpdAq6ZbI6Js=" }}
          style={styles.appImage}
        />

        <Text style={styles.appTitle}>Pakistan Monument</Text>
        <Text style={styles.appDescription}>The Pakistan Monument is situated in Islamabad,is a national symbol representing the unity and diversity of Pakistan,featuring four blossoming petals representing the country's provinces and three smaller petals representing territories.</Text>
      </TouchableOpacity>
      <View style={styles.Button1}>
        <TouchableOpacity onPress={handleExplore} >
          <Text style={styles.btntext}>
            Explore
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.appCard}>
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdbQp7XxOPzaR7yIrPbcoswujYgWw56N_9yV9kxWAx0ltcfhxV" }}
          style={styles.appImage}
        />

        <Text style={styles.appTitle}>K2 Mountain</Text>
        <Text style={styles.appDescription}>K2 is also known as Mount Godwin-Austen,is the second-highest mountain in the world,standing at an elevation of 8,611 meters (28,251 feet) above sea level. It is part of the Karakoram Range and is located on the China-Pakistan border,in the Gilgit-Baltistan region of Pakistan.</Text>
      </TouchableOpacity>
      <View style={styles.Button1}>
        <TouchableOpacity onPress={handleExplore} >
          <Text style={styles.btntext}>
            Explore
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const DetailsScreen = () => {
  return (

    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>MakeMyRoute</Text>
      </View>
      <Image
        source={{ uri: 'https://plus.unsplash.com/premium_photo-1697729760807-27c9c2e07a57?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXNsYW1hYmFkJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D' }}
        style={styles.mainImage}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>Faisal Mosque</Text>
        <Text style={styles.locationText}>Islamabad,Islamabad Capital </Text>
        <Text style={styles.descriptionText}>
          The Faisal Mosque located in Islamabad.Pakistan is one of the largest and most iconic mosques globally,designed by the Turkish architect Vedat Dalokay.
          Standing against the backdrop of the Margalla Hills,its unique contemporary design blends traditional and modern architectural elements,featuring eight-sided,sloping roofs,symbolizing a Bedouin tent.
          The mosque's massive prayer hall can accommodate over 100,000 worshippers and the main prayer chamber boasts a stunning chandelier gifted by the late King Fahd of Saudi Arabia.
        </Text>

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hcHxlbnwwfHwwfHx8MA%3D%3D' }}
          style={styles.mapImage}
        />
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    marginTop: 0,
    backgroundColor: 'green',
    paddingVertical: 5,
    alignItems: 'center',
    textAlign: "center"
  },
  headerText: {
    textAlign: "center",
    marginBottom: 3,
    fontSize: 24,
    color: 'white',
  },

  exploreButton: {
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 20,

  },
  detailsText: {
    fontSize: 18,
    padding: 20,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
    paddingHorizontal: 10,
    margin: -5


  },
  Button1:
  {

    alignItems: "center",
    justifyContent: "center",

  },
  btntext:
  {
    backgroundColor: "green", borderRadius: 10, fontSize: 17, color: "white", width: "100", height: "40", paddingHorizontal: 85, paddingTop: 10, paddingBottom: 10, marginBottom: 25
  },


  searchInput: {
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,


  },
  inputs: {
    height: 40,
    borderColor: 'green',
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 40,


  },
  category: {

    fontSize: 10,
    color: 'green',
    justifyContent: "center"
  },
  appCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,


  },
  appImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  appDescription: {
    color: '#555',
  },
  mainImage: {
    width: '100%',
    height: 210,
  },
  infoContainer: {
    padding: 15,
    marginBottom: 8,
    margin: 7
  },
  nameText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 21,
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14.5,
    marginBottom: 10,
    fontWeight: 'light',
  },
  mapImage: {
    width: '100%',
    height: 250,
  },
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,

  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 3,
    borderColor: 'green',
    borderRadius: 25,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  loginButton: {
    width: '80%',
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: 'green',
    fontSize: 99,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    fontWeight:'bold'   
    
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    width:"60%",
 
  },
  buttonText: {
    fontFamily: 'Avenir',  
    fontSize: 18,  
    color: 'green',
    textAlign: 'center',
    
    

  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: 'white',
  },
  inputContainer: {
    height: 50,
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
  dropdownStyle: {
    backgroundColor: 'white',
  },
  dropdownItemStyle: {
    justifyContent: 'flex-start',
  },
  dropdownDropStyle: {
    backgroundColor: 'white',
  }
 
});




export default App;