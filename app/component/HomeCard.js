import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { saveRate } from '../actions/HomeActions';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';

class HomeCard extends Component {


  constructor(props) {
  super(props);
  this.state = {
    generalStarCount: 3.5,
    customStarCount: 2.5,
  };
}

onGeneralStarRatingPress(rating) {
  this.setState({
    generalStarCount: rating,
  });
}

onCustomStarRatingPress(rating) {
  this.setState({
    customStarCount: rating,
  });
  console.log('rating', rating);
}

renderSaveRate(rating) {
  console.log('rating', rating);
  const userId = 1;
  this.props.saveRate(userId , this.props.item.id, rating , this.props.item.description);
}


render() {

  return (
  <View>

    <CardItem>
        <Left>
            <Thumbnail source={{uri:this.props.item.shop_image}} />
            <Body>

                  <Text>{this.props.item.place_name}</Text>
                  <Text>{this.props.item.date}</Text>
            </Body>
        </Left>
    </CardItem>
    <CardItem>
          <Image source={{uri:this.props.item.product_image}} style={{ height: 200, width: null, flex: 1}}/>
    </CardItem>

    <CardItem>
          <Text>{this.props.item.description}</Text>
    </CardItem>

    <CardItem>
          <Text style={styles.textStyle}>Rate: </Text>
     </CardItem>
  </View>
  );
}

}


const styles = {
  starStyle: {
    alignItems: 'start',
    paddingLeft: 20,
    paddingRight: 20
  },
  textStyle: {
    paddingRight:20
  }
};

const mapStateToProps = state => {
const rate = state.homePost;
return { rate };
};


export default connect(mapStateToProps, { saveRate })(HomeCard);
