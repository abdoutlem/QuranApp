import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

function AntennaEdit(props) {
  const data = props.route.params.data;

  const [identity, setIdentity] = useState(data.identity);
  const [status, setStatus] = useState(data.status);

  const updateAntenna = () => {
    fetch(`http://192.168.1.28:8080/polls/antennes/${identity}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identity: identity, status: status }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        props.navigation.navigate("Antenna list", { data: data });
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <View>
      <TextInput
        style={{ margin: 10 }}
        label="Antenna Identity"
        value={identity}
        onChangeText={(identity) => setIdentity(identity)}
      />

      <TextInput
        style={{ margin: 10 }}
        label="Antenna Identity"
        value={status}
        onChangeText={(status) => setStatus(status)}
      />

      <Button icon="update" model="contained" onPress={() => updateAntenna()}>
        Update
      </Button>
    </View>
  );
}

export default AntennaEdit;
