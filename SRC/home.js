import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button, Header ,Divider,Card, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class home extends Component {

    
    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    
                />

                <View>
                    <Card>
                        <Text>Subham kumar</Text>
                    </Card>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    container:{
        flex:1,
    }
})
