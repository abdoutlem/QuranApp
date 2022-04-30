import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import Contants from "expo-constants";
import Create from "./Screens/Create";
import AntennaDetails from "./Screens/AntennaDetails";
import AntennaEdit from "./Screens/AntennaEdit";
import { useEffect } from "react";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "react-native-splash-screen";

const Stack = createStackNavigator();

const myStyles = {
  title: "Antennes deployées",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "blue",
  },
};

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Antenna list" component={Home} options={myStyles} />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{ ...myStyles, title: "Ajouter les details de l'antenne" }}
        />
        <Stack.Screen
          name="Antenna details"
          component={AntennaDetails}
          options={{ ...myStyles, title: "Details de l'antenne" }}
        />
        <Stack.Screen
          name="Antenna Edit"
          component={AntennaEdit}
          options={{ ...myStyles, title: "Update the antenna" }}
        />
      </Stack.Navigator>
    </View>
  );
}

export default () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    marginTop: Contants.statusBarHeight,
  },
});
