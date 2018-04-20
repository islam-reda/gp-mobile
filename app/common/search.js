import React, { Component } from 'react';
import { Container, Header, Item,View, Input, Icon, Button, Text } from 'native-base';
export default class search extends Component {
  _menuNavigate(){
      const navigation = this.props.navigation;
      navigation.navigate('DrawerOpen');
  }
  render() {
    return (
        <Header searchBar rounded style = {{backgroundColor: '#fff'}}>
          <Item>
            <Icon name="search" />
            <Input placeholder="Search" />
            <Icon name="menu"  onPress={() => this._menuNavigate() } />
          </Item>
        </Header>
    );
  }
}
