import React, { Component } from 'react';
import { View } from 'react-native';
import { CardItem, Thumbnail, Text, Left, Body } from 'native-base';


class VisitedPlacesItem extends Component {
render() {
    return (
      <CardItem key = {this.props.item.id}>
          <Left>
              <Thumbnail source={{ uri: this.props.item.shop_image }} />
              <Body>

                    <Text>{this.props.item.brand_name}</Text>
                    <Text>{this.props.item.date}</Text>
              </Body>
          </Left>
      </CardItem>
    );
  }
}
export default VisitedPlacesItem;
