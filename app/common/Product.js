import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, ListItem ,Text, Button, Icon, Left, Body,View } from 'native-base';
import Appfooter from './Appfooter.js';
import {Spinner } from './Spinner.js';
import { saveRate } from '../actions/HomeActions.js';
import {connect } from 'react-redux';
import {getSingleProduct} from '../actions/CategoriesAction.js';
import ls from 'react-native-local-storage';
class Product extends Component {
  componentWillMount(){
      const { params } = this.props.navigation.state;
      const product_id = params ? params.product_id : null;
      this.props.getSingleProduct(product_id);
  }
  _SaveRate(rate_number,product_id,description) {
    ls.get('user_id').then((user_id) => {
      console.warn(user_id);
      if(user_id){
         this.props.saveRate({user_id ,product_id, rate_number,description});
          setTimeout(() => {    
            const { params } = this.props.navigation.state;
          const param_product_id = params ? params.product_id : null;
          this.props.getSingleProduct(param_product_id); }, 1000);
      }
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
          var saveRate = [];
          for(var i = 1; i < 6; i++) {
              saveRate.push(i);
          }
          return (
            <View key={key}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: prop.shop_image}} />
                <Body>
                  <Text>{prop.place_name}</Text>
                   
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
            <CardItem>
            <Text>
                  Rate Now
                </Text>
            {saveRate.map(keys => {
                     return (
                        <Icon name="star" style={{ fontSize: 45,  marginLeft: 10  ,color: "red", lineHeight: 70 }}  onPress={() => this._SaveRate(keys,prop.id,prop.description) } key={keys}  />
                     );
                  })}
                  </CardItem>
            </View>
          );
        });
      }
      return (
        <Text>
           Not found product data
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
              {this._renderproducts()}
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
      rateSuccess : state.homePost.success
    }
}
export default connect(mapStateToProps,{getSingleProduct,saveRate})(Product);