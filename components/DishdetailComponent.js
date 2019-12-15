import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderDish(props) {
  const dish = props.dish;

  try {
    if (dish != null) {
      return (
        <Card
          featuredTitle={dish.name}
          image={require('./images/uthappizza.png')}
        >
          <Text style={{ margin: 10 }}>{dish.description}</Text>
        </Card>
      );
    } else {
      return <View></View>;
    }
  } catch (error) {
    console.log(error);
  }
}

function Dishdetail(props) {
  return <RenderDish dish={props.dish} />;
}

export default Dishdetail;
