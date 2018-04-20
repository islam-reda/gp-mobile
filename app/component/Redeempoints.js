import React, { Component } from 'react';
import { Container,View, Header, Content, Card, CardItem, Body, Text,Icon,Left } from 'native-base';
import {connect } from 'react-redux';
import {getmypoints} from '../actions/RedeemAction.js';
import {Spinner } from '../common/Spinner.js';
import ls from 'react-native-local-storage';
class Redeempoints extends Component {
  _renderPoints(){
    if(!this.props.loading){
        return (
            <Text>
               {this.props.points} Points
               {this.props.error}
               {this.state.error}
            </Text>
        );
    }
    return <Spinner/>;
  }
  componentDidMount(){
    ls.get('user_tokin').then((token) => {
      if(token){
        this.props.getmypoints({token});
      }else{
        this.setState({
            error : 'There an unexpected error please try to reopen app',
        });
      }
    });
  }
  constructor(){
     super();
     this.state = {
       error : '',
     };
  }
  render() {
    return (
      <View>
          <Text style={{textAlign:'center',padding:10}}>Your Points</Text>
          <Card>
            <CardItem>
            <Left>
              <Icon name="trophy" style={{ color: '#ffd400' }} />
            </Left>
              <Body>
                  {this._renderPoints()}
              </Body>
            </CardItem>
          </Card>
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log('------------------');
  console.log(state.points);
  console.log('------------------');
    return {
      error : state.points.error,
      points : state.points.points,
      loading : state.points.loading,
    }
}
export default connect(mapStateToProps,{getmypoints})(Redeempoints);
