import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon,Card, CardItem, Left, Body, Right, Separator } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Spinner } from '../common/Spinner.js';
import {connect } from 'react-redux';
class Stores extends Component {
  componentDidMount(){

  }
  _renderStore(){
    if(!this.props.loading && this.props.collection){
      if(this.props.collection.length > 0){
        return this.props.collection.map((prop, key) => {
          return (
            <ListItem key={key}>
                <Body>
                      <Text>{prop.store_name}</Text>
                </Body>
            </ListItem>
          );
        });
      }
      return (
        <Text>
           Not Found Stores
        </Text>
      );
    }

    return <Spinner/>;
  }
  render() {
    return (
      <Container>
        <Content>
           <List>
           </List>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => {
      console.log('--------location----------');
      console.log(state);
      console.log('------------------');
    return {
      error : state.location.error,
      collection : state.location.stores,
      loading : state.location.loading,
    }
}
export default Stores;
