import React, { Component } from 'react';
import { Text, ScrollView, View, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

import { leaders } from '../shared/leaders';

function History() {
  return (
    <Card featuredTitle={'Our History'}>
      <Text style={{ margin: 10 }}>
        Started in 2010, Ristorante con Fusion quickly established itself as a
        culinary icon par excellence in Hong Kong. With its unique brand of
        world fusion cuisine that can be found nowhere else, it enjoys patronage
        from the A-list clientele in Hong Kong. Featuring four of the best
        three-star Michelin chefs in the world, you never know what will arrive
        on your plate the next time you visit us.
      </Text>
      <Text style={{ margin: 10 }}>
        The restaurant traces its humble beginnings to The Frying Pan, a
        successful chain started by our CEO, Mr. Peter Pan, that featured for
        the first time the world's best cuisines in a pan.
      </Text>
    </Card>
  );
}

class About extends Component {
  state = {
    leaders: leaders
  };

  static navigationOptions = {
    title: 'About'
  };

  render() {
    const AboutComponent = ({ item, index }) => {
      const { image, name, description } = item;

      return (
        <ListItem
          key={index}
          title={name}
          subtitle={description}
          hideChevron={true}
          leftAvatar={{ source: require('./images/alberto.png') }}
        />
      );
    };

    return (
      <ScrollView>
        <History />
        <FlatList
          data={leaders}
          renderItem={AboutComponent}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    );
  }
}

export default About;
