import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      campsites: CAMPSITES
    }
  }
  static navigationOptions = {
    title: 'Contact Us'
  }
  render(){
    return (

      <ScrollView wrapperStyle={{margin:20}}>    
        <Card title='Contact Information'>
            <Text> 
                1 Nucamp Way {"\n"} 
                Seattle, WA 98001 {"\n"}
                U.S.A {"\n"}
            </Text>
            <Text>
                Phone: 1-206-555-1234 {"\n"}
                Email: campsites@nucamp.co {"\n"}
            </Text>
        </Card>
      </ScrollView>
    )
  }
}

export default Contact