import React, { Component } from 'react';
import { Container, Header, Content,Text,View} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image } from 'react-native';
export default class Topproducts extends Component {
  // constructor(props){
  //   super(props);
  //   this.data = props.data;
  // }
  render() {
    return (
      <View>
        <Text style={{textAlign:'center',padding:10}}>Get Your products Now</Text>
        <Grid>
          <Col style={{height: 410 }}>
            <Row>
                <Image source={{uri: 'http://www.themarketingblog.co.uk/wp-content/uploads/2015/09/Final-01.jpg'}} style={{height: 200, width: 190, flex: 1}}/>
            </Row>
            <Row>
                <Image source={{uri: 'https://ae01.alicdn.com/kf/HTB1woUIHFXXXXXxXXXXq6xXFXXXP/Top-selling-Casual-female-handbag-popular-designer-handbags-new-handbags-for-women.jpg_640x640.jpg'}} style={{height: 200, width: 190, flex: 1}}/>
            </Row>
          </Col>
          <Col style={{height: 410 }}>
            <Row>
                <Image source={{uri: 'https://www.plm.automation.siemens.com/media/global/en/consumer-products-apparel-segment-tile-384x288_tcm27-10805.jpg'}} style={{height: 200, width: 190, flex: 1}}/>
            </Row>
            <Row>
                <Image source={{uri: 'https://image.freepik.com/free-vector/modern-blue-sale-banner-template_1201-1290.jpg'}} style={{height: 200, width: 190, flex: 1}}/>
            </Row>
          </Col>
          <Col style={{height: 410 }}>
            <Row>
                <Image source={{uri: 'https://i.pinimg.com/originals/45/ab/fe/45abfe334a7a6781e014ae24e2dae85b.jpg'}} style={{height: 200, width: 190, flex: 1}}/>
            </Row>
            <Row>
                <Image source={{uri: 'https://yalebooks.yale.edu/sites/default/files/25_off_star_1.gif'}} style={{height: 200, width: 190, flex: 1}}/>
            </Row>
          </Col>
        </Grid>
        </View>
    );
  }
  }
