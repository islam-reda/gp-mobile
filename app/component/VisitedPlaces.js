import React, { Component } from 'react';
import { View, FlatList, Text ,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { getUserPlaces } from '../actions/VisitedPlacesActions.js';
import { Header, Left, Body, Title, Right ,Container ,Content} from 'native-base';
import VisitedPlacesItem from './VisitedPlacesItem.js';
import {Spinner } from '../common/Spinner.js';
import Appfooter from '../common/Appfooter.js';
import ls from 'react-native-local-storage';
class VisitedPlaces extends Component {

  componentWillMount() {
    ls.get('user_id').then((user_id) => {
        if (user_id) {
          this.props.getUserPlaces({ user_id });
        } 
      });
  }
 _keyExtractor = (item, index) => item.id;

  renderFlatList() {
    console.log('this.props.places.loading', this.props.places.loading);
  if (this.props.places.loading === 'false') {
    return (
      <FlatList
        data={this.props.places.data.products}
        renderItem={({ item, index }) => {
          return (
            <VisitedPlacesItem keyExtractor={this._keyExtractor} item={item} key = {item.id} index={index} />
          );
        }}
      />
              );
      }
      return <Spinner size='large' />
  }

  render() {
      return (
      <Container>
      <Content>
        <ScrollView style={{ flex: 1 }}>
            <Header>
              <Left />
              <Body>
                <Title>Visited places</Title>
              </Body>
              <Right />
            </Header>
        {this.renderFlatList()}
        <Text style={styles.errorTextStyle}>{this.props.places.error}</Text>
        </ScrollView>
      </Content>
        <Appfooter navigation = {this.props.navigation} />
      </Container>

      );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
const places = state.visitedPlaces;
console.log('places', places);
return { places };
};

export default connect(mapStateToProps, { getUserPlaces })(VisitedPlaces);
