import React, { Component } from 'react';
import { Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { getmynews } from '../actions/NewsAction.js'
import {connect } from 'react-redux';
import ls from 'react-native-local-storage';
import { Container, Header, View, DeckSwiper,Button, Card, CardItem, Thumbnail, Text, Left,Right, Body, Icon } from 'native-base';
class News extends Component {
  componentWillMount(){
    setInterval(()=>{
      this._deckSwiper._root.swipeLeft();
    },10000);
    ls.get('user_tokin').then((token) => {
      if(token){
        this.props.getmynews({token});
      }else{
        this.setState({
            error : 'There an unexpected error please try to reopen app',
        });
      }
    });
  }
  render() {
    return (
      <Grid>
        <Col style = {{height : 460}}>
          <Text style={{textAlign:'center',padding:10}}>News</Text>
          <DeckSwiper
            dataSource={this.props.news}
            ref={(c) => this._deckSwiper = c}
            renderItem={item =>
              <Card style={{ elevation: 2 }}>
                <CardItem style={{ position: "relative" }}>
                  <Left>
                    <Body>
                      <Text>{item.title}</Text>
                      <Text note>{item.description}</Text>
                    </Body>
                  </Left>
                  <Right>
                      <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom : -35 ,left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
                          <Icon name="arrow-back" style={{ color: '#808080' ,marginTop: 5}} onPress={() => this._deckSwiper._root.swipeLeft()} />
                          <Icon name="arrow-forward" style={{ color: '#808080',marginTop: 5 }}  onPress={() => this._deckSwiper._root.swipeRight()}/>
                       </View>
                  </Right>
                </CardItem>
                <CardItem cardBody>
                <Grid>
                  <Col style={{height: 300 }}>
                    <Row>
                        <Image source={{uri: item.image}} style={{height: 300, width: 190, flex: 1}}/>
                    </Row>
                  </Col>
                  <Col style={{height: 300 }}>
                    <Row>
                        <Image source={{uri:  item.image2}} style={{height: 150, width: 180, flex: 1}}/>
                    </Row>
                    <Row>
                        <Image source={{uri:  item.image3}} style={{height: 150, width: 180, flex: 1}}/>
                    </Row>
                  </Col>
                </Grid>
                </CardItem>
              </Card>
            }
          />
        </Col>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
    return {
      error : state.news.error,
      news : state.news.news,
      loading : state.news.loading,
    }
}
export default connect(mapStateToProps,{getmynews})(News);
