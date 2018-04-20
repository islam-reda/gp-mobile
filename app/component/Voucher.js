import React, { Component } from 'react';
import { Container,View, Header, Content, Card, CardItem, Body, Text,Icon,Left } from 'native-base';
import {connect } from 'react-redux';
import {getmyvoucher} from '../actions/VoucherAction.js';
import {Spinner } from '../common/Spinner.js';
import ls from 'react-native-local-storage';
import QRCode from 'react-native-qrcode';
class Voucher extends Component {
  _renderVoucher(){

    if(!this.props.loading && this.props.collection){
      if(this.props.collection.length > 0){
        return this.props.collection.map((prop, key) => {
          return (
          <CardItem key={key}>
            <Left>
              <Icon name="trophy" style={{ color: '#ffd400' }} />
            </Left>
              <Body>
                <Text key={key}>
                   <Text>Valid to : {prop.voucher_to}</Text>
                </Text>
                <QRCode
                   value={prop.value+'\n'+
                     prop.serial
                   }
                   size={200}
                   bgColor='black'
                   fgColor='white'/>
              </Body>
            </CardItem>
          );
        });
      }
      return (
        <Text>
           Not Found Vouchers
        </Text>
      );
    }
    return <Spinner/>;
  }
  componentDidMount(){
    ls.get('user_tokin').then((token) => {
      if(token){

        this.props.getmyvoucher({token});
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
          <Text style={{textAlign:'center',padding:10}}>Your Vouchers</Text>
          <Card>
            {this._renderVoucher()}
          </Card>
        </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('--------Vouchers----------');
  console.log(state);
  console.log('------------------');
    return {
      error : state.voucher.error,
      collection : state.voucher.collection,
      loading : state.voucher.loading,
    }
}
export default connect(mapStateToProps,{getmyvoucher})(Voucher);
