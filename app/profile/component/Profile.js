import React, { Component } from 'react';
import { Image,ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,View } from 'native-base';
import {getuser} from '../actions/ProfileAction.js'
import {connect } from 'react-redux';
import ls from 'react-native-local-storage';
import {Spinner } from '../common/Spinner.js';
class Profile extends Component {
  componentWillMount(){
    token = 1; // temp 
    this.props.getuser({token}); // temp
    ls.get('user_tokin').then((token) => {
      if(token){
        this.props.getuser({token});
      }
    });
  }
  renderInfo(){
    if(!this.props.loading){
        var image = this.props.image;
        if(!this.props.image){
           var image = 'https://cdn.onlinewebfonts.com/svg/img_568657.png';
        }

        return (
          <View>
     
          <CardItem>
              <Left>
                <Thumbnail source={{uri: image}} />
                <Body>
                         <Text>
                            Welcome , {this.props.name}
                        </Text>
                        <Text>
                            {this.props.email}
                        </Text>
                </Body>
              </Left>
            </CardItem>
          </View>
        )
    }
    return <Spinner/>
  }
    _renderproducts(){

    if(!this.props.loading && this.props.collection){
      if(this.props.collection.length > 0){
        return this.props.collection.map((prop, key) => {
          var initialArr = [];
          var length = prop.rate_number; // user defined length
          for(var i = 0; i < length; i++) {
              initialArr.push('star');
          }
          return (
            <View key={key}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: prop.shop_image}} />
                <Body>
                  <Text>{prop.shop_name}</Text>
                   
                  <Text>{initialArr.map(key => {
                     return (
                        <Icon name="star"  key={key} style={{ color: '#ffd400' }} />
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
                  {prop.description_product}
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
           Not Found reated products
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
             {this.renderInfo()}
              
            {this._renderproducts()}
            </ScrollView>
          </Card>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => {
    return {
      error : state.profile.error,
      loading : state.profile.loading,
      collection : state.profile.products,
      name : state.profile.name,
      email : state.profile.email,
      image : state.profile.image,
    }
}
export default connect(mapStateToProps,{getuser})(Profile);
