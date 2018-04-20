import React, { Component } from 'react';
import { Image ,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { getUserPosts } from '../actions/HomeActions.js';
import { Container, Header, Content, Card, CardItem, Thumbnail, ListItem ,Text, Button, Icon, Left, Body,View } from 'native-base';

import HomeCard from './HomeCard.js';
import {Spinner } from '../common/Spinner.js';
import Appfooter from '../common/Appfooter.js';

class Home extends Component {
componentWillMount() {
  this.props.getUserPosts();
}

renderFlatList() {
if (this.props.posts.loading === 'false') {
  return (
              <FlatList
                data={this.props.posts.data.products}
                renderItem={({ item, index }) => {
                  return (
                    <HomeCard item={item} index={index} />
                  );
                }}
              />
        );

    }
    return <Spinner/>;
}
  _productNavigate(id){
      const navigation = this.props.navigation;
      navigation.navigate('SingleProduct',{
              product_id : id,
      });
  }
 _renderproducts(){
    if(!this.props.loading && this.props.posts.data.products){
      if(this.props.posts.data.products.length > 0){
        return this.props.posts.data.products.map((prop, key) => {
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
                  <Text>{prop.date}</Text>
                   
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
                 <CardItem>
                  <Image source={{uri: prop.product_image}} style={{height: 200, width: 350, flex: 1}}/>
                  
                </CardItem>

              </Body>

            </CardItem>
            </View>
          );
        });
      }
      return (
        <Text>
           Not Found products
        </Text>
      );
    }
    return <Spinner/>;
  }
  render() {
    return (
      <Container>
      <Content>
      <ScrollView style={{ flex: 1 }}>
        {this._renderproducts()}
        <Text style={styles.errorTextStyle}>{this.props.posts.error}</Text>

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
const posts = state.homePost;
console.log('posts', posts);
return { posts };
};


export default connect(mapStateToProps, { getUserPosts })(Home);
