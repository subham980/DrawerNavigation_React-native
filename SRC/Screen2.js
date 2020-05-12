/*Example to open a screen out of the Navigation Drawer*/
import React, { Component } from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';

export default class Screen2 extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Screen 2 </Text>
        <Button
          title="Go to Other Screen with Navigation Drawer"
          onPress={() => this.props.navigation.navigate('ScreenExternal')}
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