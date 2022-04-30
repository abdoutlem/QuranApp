import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-paper";

function AntennaDetails(props) {
  const data = props.route.params.data;

  const deleteAntenna = (data) => {
    fetch(`http://192.168.1.28:8080/polls/antennes/${data.identity}/`, {
      method: "DELETE",
    })
      .then((data) => {
        props.navigation.navigate("Antenna list");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.viewStyle}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            {data.identity}
          </Text>
          <Text style={{ fontSize: 20 }}>{data.status}</Text>
        </View>
        <View style={styles.btnStyles}>
          <Button
            icon="update"
            mode="contained"
            onPress={() =>
              props.navigation.navigate("Antenna Edit", {
                data,
              })
            }
          >
            Update
          </Button>
          <Button
            icon="delete"
            mode="contained"
            onPress={() => deleteAntenna(data)}
          >
            Delete
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    margin: 10,
    padding: 10,
  },
  btnStyles: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
    padding: 10,
  },
});

export default AntennaDetails;
