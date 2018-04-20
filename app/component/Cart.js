import React, { Component } from 'react';
import { Container, Footer, Content, FooterTab, ListItem, Text, Icon, Card,Left, Button,CardItem , Right, Separator ,Body,Thumbnail } from 'native-base';
import {
  StyleSheet,
  WebView
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class Cart extends Component {
  render() {
      // <Container>
      //   <Content>
      //    <Card>
      //      <CardItem>
      //           <Row>
      //             <Col size={1}>
      //                 <Thumbnail square large  source={{uri: 'http://dejavu.shoes/media/catalog/product/cache/1/thumbnail/205x246/9df78eab33525d08d6e5fb8d27136e95/K/U/KUT-AW18-002-BURGUNDY_2_6.JPG'}} />
      //             </Col>
      //             <Col size={2}>
      //                 <Body>
      //                   <Text>KUT-AW18-002</Text>
      //                   <Text>Black</Text>
      //                   <Text>Size : 35</Text>
      //                 </Body>
      //                 <Right>
      //                   <Text>x3</Text>
      //                 </Right>
      //             </Col>
      //           </Row>
      //      </CardItem >
      //      <Separator style={styles.sep}></Separator>
      //      <CardItem>
      //           <Row>
      //             <Col size={1}>
      //                 <Thumbnail square large  source={{uri: 'http://dejavu.shoes/media/catalog/product/cache/1/thumbnail/205x246/9df78eab33525d08d6e5fb8d27136e95/K/U/KUT-AW18-002-BURGUNDY_2_6.JPG'}} />
      //             </Col>
      //             <Col size={2}>
      //                 <Body>
      //                   <Text>KUT-AW18-002</Text>
      //                   <Text>Black</Text>
      //                   <Text>Size : 35</Text>
      //                 </Body>
      //                 <Right>
      //                   <Text>x3</Text>
      //                 </Right>
      //             </Col>
      //           </Row>
      //      </CardItem  >
      //    </Card>
      //  </Content>
      //   <Footer>
      //     <FooterTab style = {styles.footer}>
      //       <Grid>
      //           <Row>
      //               <Col size={1}>
      //                 <Button  vertical >
      //                   <Icon active name="heart" style={styles.black}  />
      //                   <Text style={styles.black}>Wishlist</Text>
      //                 </Button>
      //               </Col>
      //               <Col size={3} style={styles.red}>
      //                   <Button>
      //                     <Text style={styles.black}>Checkout</Text>
      //                   </Button>
      //               </Col>
      //           </Row>
      //       </Grid>
      //     </FooterTab>
      //   </Footer>
      // </Container>
      return (
          <WebView
            source={{uri: 'http://dejavu.shoes/'}}
          />
    );
  }
}
const styles = StyleSheet.create({
  black : {
    color : '#fff',
  },
  sep:{
    height: 5
  },
  red : {
      backgroundColor:'#b31505',
  },
  footer: {
    backgroundColor:'#000',
    flexDirection:'row',
  },
});
