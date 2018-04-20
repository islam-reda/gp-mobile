import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon,Card, CardItem, Left, Body, Right, Separator } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Spinner } from '../common/Spinner.js';
import {connect } from 'react-redux';
import {getCategories} from '../actions/CategoriesAction.js';
class Categories extends Component {
  componentWillMount(){
    this.props.getCategories();
  }
  _CategoryproductNavigate(id){
      const navigation = this.props.navigation;
      navigation.navigate('Product',{
              category_id : id,
      });
  }
  _renderCategories(){
    if(!this.props.loading && this.props.collection){
      if(this.props.collection.length > 0){
        return this.props.collection.map((prop, key) => {
          return (
            <ListItem navigation = {this.props.navigation} onPress={() => this._CategoryproductNavigate(prop.id) } key={key}>
                <Body>
                      <Text>{prop.name}</Text>
                </Body>
            </ListItem>
          );
        });
      }
      return (
        <Text>
           Not Found Categories
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
            {this._renderCategories() }
           </List>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => {

    return {
      error : state.categories.error,
      collection : state.categories.collection,
      loading : state.categories.loading,
    }
}
export default connect(mapStateToProps,{getCategories})(Categories);
