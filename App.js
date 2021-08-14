import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      salary: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.lable}> Firebase Demo - GDSE 53/54 </Text>

        <TextInput
          label="Name"
          value={this.state.name}
          onChangeText={(value) => {
            this.setState({
              name: value
            })
          }}
          style={styles.input}
        />

        <TextInput
          label="Address"
          value={this.state.address}
          onChangeText={(value) => {
            this.setState({
              address: value
            })
          }}
          style={styles.input}
        />

        <TextInput
          label="Salary"
          value={this.state.salary}
          onChangeText={(value) => {
            this.setState({
              salary: value
            })
          }}
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.btn}
          color='green'
        >
          Save Customer
        </Button>

        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.btn}
          color='red'
        >
          Delete Customer
        </Button>

        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.btn}
          color='yellow'
        >
          Update Customer
        </Button>

        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.btn}
          color='blue'
        >
          Get All Customers
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    marginTop: 15
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  btn: {
    marginTop: 20
  },
  lable: {
    marginBottom: 50,
    marginTop:10
  }
})