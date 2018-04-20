import React, { Component } from 'react';
import { Image,ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, ListItem ,Text, Button, Icon, Left, Body,View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Product from '../common/Product.js';
import {Spinner } from '../common/Spinner.js';
import {connect } from 'react-redux';
import {getProductbyCategory} from '../actions/CategoriesAction.js';
import Appfooter from '../common/Appfooter.js';
class Products extends Component {
  componentWillMount(){
      const { params } = this.props.navigation.state;
      const category_id = params ? params.category_id : null;
      this.props.getProductbyCategory(category_id);
  }
  _productNavigate(id){
      const navigation = this.props.navigation;
      navigation.navigate('SingleProduct',{
              product_id : id,
      });
  }
    _renderproducts(){

    if(!this.props.loading && this.props.collection){
      if(this.props.collection.length > 0){
        return this.props.collection.map((prop, key) => {
          var initialArr = [];
          var length = prop.rate_number; // user defined length
          for(var i = 0; i < length; i++) {
              initialArr.push('star'+i);
          }
          console.log(prop.id);
          return (
            <View key={key}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: prop.shop_image}} />
                <Body>
                  <Text  onPress={() => this._productNavigate(prop.id) }>{prop.place_name}</Text>
                   
                  <Text>{initialArr.map(keys => {
                     return (
                        <Icon name="star" key={keys} style={{ color: '#ffd400' }} />
                     );
                  })}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {prop.place_name}
                </Text>
                <Text>
                  {prop.description}
                </Text>
                <Image source={{uri: prop.product_image}} style={{height: 200, width: 350, flex: 1}}/>
              </Body>
            </CardItem>
            </View>
          );
        });
      }
      return (
        <Text>
           Not Found products in this Category
        </Text>
      );
    }
    return <Spinner/>;
  }
  render() {
    return (
        <Container>
            <Content>
              <Card style={{flex: 0}}>
              <ScrollView>
                {this._renderproducts()}
                </ScrollView>
              </Card>
            </Content>
            <Appfooter navigation = {this.props.navigation} />
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
export default connect(mapStateToProps,{getProductbyCategory})(Products);