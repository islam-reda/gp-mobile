import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import { Container} from 'native-base';

import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window')
const loading = require('../files/logo.png')
const styles = {
  wrapper: {
    height : 300,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width,
    flex: 1,
    backgroundColor: 'transparent',
    height : 300
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },

  loadingImage: {
    width: null,
    height: 60
  }
}

const Slide = props => {
  return (<View style={styles.slide}>
    <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}} />
    {
      !props.loaded && <View style={styles.loadingView}>
        <Image style={styles.loadingImage} source={loading} />
      </View>
    }
  </View>)
}

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imgList: [
        'https://data.whicdn.com/images/58341787/original.jpg',
        'https://ep01.epimg.net/cultura/imagenes/2015/04/24/actualidad/1429862346_901964_1429862857_noticia_normal.jpg',
        'https://data.whicdn.com/images/35992437/large.jpg',
        'http://s1.r29static.com//bin/entry/389/0,0,2000,2400/720x864/1856640/image.png'
      ],
      loadQueue: [0, 0, 0, 0]
    }
    this.loadHandle = this.loadHandle.bind(this)
  }
  loadHandle (i) {
    let loadQueue = this.state.loadQueue
    loadQueue[i] = 1
    this.setState({
      loadQueue
    })
  }
  render () {
    return (
        <Swiper loadMinimal autoplay loadMinimalSize={1} nextButton = "<Text style={styles.buttonText}>›</Text>"  style={styles.wrapper} loop={true}>
          {
            this.state.imgList.map((item, i) => <Slide
              loadHandle={this.loadHandle}
              loaded={!!this.state.loadQueue[i]}
              uri={item}
              i={i}
              key={i} />)
          }
        </Swiper>
    )
  }
}
