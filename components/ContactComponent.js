import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderContact(props) {
  const { contactArray } = props;

  return (
    <View>
      {contactArray.map((el, index) => (
        <Text style={{ margin: 10 }} key={index}>
          {el}
        </Text>
      ))}
    </View>
  );
}

class Contact extends Component {
  static navigationOptions = {
    title: 'Contact'
  };

  render() {
    const contactArray = [
      '121, Clear Water Bay Road',
      'Clear Water Bay, Kowloon',
      'HONG KONG',
      'Tel: +852 1234 5678',
      'Fax: +852 8765 4321',
      'Email:confusion@food.net'
    ];

    return (
      <Card featuredTitle={'Contact Information'}>
        <RenderContact contactArray={contactArray} />
      </Card>
    );
  }
}

export default Contact;
