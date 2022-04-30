import React, { useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { setSyntheticTrailingComments } from "typescript";

function Details(props) {
  const [identity, setIdentity] = useState("");
  const [status, setStatus] = useState("");

  const createData = () => {
    fetch(`http://192.168.1.28:8080/polls/antennes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identity: identity, status: status }),
    })
      .then((resp) => resp.json())
      .then(() => {
        props.navigation.navigate("Antenna list");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <View>
      <TextInput
        style={{ margin: 10 }}
        label="Antenna Identity"
        value={identity}
        onChangeText={(text) => setIdentity(text)}
      />
      <TextInput
        style={{ margin: 10 }}
        label="Antenna Status"
        value={status}
        onChangeText={(text) => setStatus(text)}
      />

      <Button
        style={{ backgroundColor: "red", margin: 10 }}
        mode="contained"
        icon="pencil"
        onPress={() => createData()}
      >
        Add Antenna
      </Button>
    </View>
  );
}

export default Details;
