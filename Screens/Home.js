import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { useState, useEffect } from "react";
import { Card, FAB } from "react-native-paper";

function Home(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = () => {
    console.log("donnée cherchées !");
    fetch("http://192.168.1.28:8080/polls/antennes/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    loadData();
  }, []);

  const clickedItem = (data) => {
    props.navigation.navigate("Antenna details", { data: data });
  };

  const renderData = (item) => {
    return (
      <Card style={styles.cardStyle} onPress={() => clickedItem(item)}>
        <Text>{item.identity}</Text>
        <Text>{item.status}</Text>
      </Card>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderData(item);
        }}
        onRefresh={() => loadData()}
        refreshing={false}
        keyExtractor={(item) => item.id}
      />

      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        onPress={() => props.navigation.navigate("Create")}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  cardStyle: {
    padding: 10,
    margin: 10,
    height: 100,
  },

  fab: {
    position: "absolute",
    margin: 16,
    right: 10,
    bottom: 0,
    backgroundColor: "blue",
  },
});
