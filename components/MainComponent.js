import React, { Component } from 'react';
import { View, Platform, Image, StyleSheet } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import { dishes } from '../shared/dishes';

const StackMenuNavigator = createStackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="menu"
            size={24}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        )
      })
    },
    Dishdetail: { screen: Dishdetail },
    Contact: { screen: Contact },
    About: { screen: About }
  },
  {
    initialRouteName: 'Menu',
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
);

const StackHomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#512DA8'
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#fff',
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
);

const MenuNavigator = createAppContainer(StackMenuNavigator);
const HomeNavigator = createAppContainer(StackHomeNavigator);

const MainDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ headerTintColor }) => (
          <Icon
            name="home"
            type="font-awesome"
            size={24}
            color={headerTintColor}
          />
        )
      }
    },
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu',
        drawerIcon: ({ headerTintColor }) => (
          <Icon
            name="home"
            type="font-awesome"
            size={24}
            color={headerTintColor}
          />
        )
      }
    },
    Contact: {
      screen: Contact,
      navigationOptions: {
        title: 'Contact',
        drawerLabel: 'Contact',
        drawerIcon: ({ headerTintColor }) => (
          <Icon
            name="address-card"
            type="font-awesome"
            size={24}
            color={headerTintColor}
          />
        )
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        title: 'About',
        drawerLabel: 'About',
        drawerIcon: ({ headerTintColor }) => (
          <Icon
            name="info-circle"
            type="font-awesome"
            size={24}
            color={headerTintColor}
          />
        )
      }
    }
  },
  {
    drawerBackgroundColor: '#D1C4E9'
  }
);

const MainNavigator = createAppContainer(MainDrawerNavigator);

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: dishes,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
        }}
      >
        <MainNavigator />
      </View>
    );
  }
}

export default Main;
