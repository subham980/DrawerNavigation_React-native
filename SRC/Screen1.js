/*Example to open a screen out of the Navigation Drawer*/
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Screen1 extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Screen 1 </Text>
        <Button
          title="Go to Other Screen out of the Navigation Drawer1"
          onPress={() => this.props.navigation.navigate('ScreenExternal')}
        />
        <View style={{padding:20}}/>
        <Button
          title="Go to Other Screen with Navigation Drawer2"
          onPress={() => this.props.navigation.navigate('ScreenInternal')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});