import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, ActivityIndicator, Image, NetInfo } from 'react-native';
import Login from '../component/login.js';
import ls from 'react-native-local-storage';
import { verfyuser } from '../actions/AuthActions.js';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    loadingText: {
        color: '#fff',
        fontSize: 20,
        paddingTop: 10
    },
    image: {
        width: 250,
        height: 150,
        marginBottom: 20
    }
});

class Splash extends Component {
    constructor() {
        super();
        this.state = {
            text: 'loading',
        };
    }
    componentWillReceiveProps(nextProps) {
        console.log('reciving props');
        console.log(nextProps);
        if (nextProps.status) {
            this._navigate('Home');
        } else {
            this._navigate('Loginpage');
        }
    }
    componentDidMount() {
        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                try {
                    ls.get('user_id').then((user_id) => {
                        if (user_id) {
                            this._navigate('Home');
                        } else {
                            this._navigate('Loginpage');
                        }
                    });
                    console.log('==========');
                } catch (e) {
                    console.log('there was an error');
                    console.log(e);
                }
            } else {
                this.setState({ text: 'Please verfy Internet connection' });
            }
        });



        // console.log(AsyncStorage.getItem('app_token'));
        // AsyncStorage.getItem('app_token')
        //   .then(token => {
        //     console.log('fuck');
        //       if (token) {
        //         console.log('done');
        //         this._navigate('Home');
        //       }else {
        //         console.log('not done');
        //         this._navigate('Loginpage');
        //       }
        //   }).catch(error => console.log(error));
    }

    //Added this dummy method to cause a delay just to see the splash
    _navigate(screen) {
        setTimeout(() => {
            console.log('islam');
            this.props.navigation.navigate(screen);
        }, 2000);

    }

    render() {
        return ( 
          <View style = { styles.container }>
            <Image source = { require('../files/logo.png') }
            style = { styles.image }/> 
            <ActivityIndicator color = "#fff" />
            <Text style = { styles.loadingText } > { this.state.text } </Text> 
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        error: state.login.is_success,
        status: state.login.status,
    }
}
export default connect(mapStateToProps, { verfyuser })(Splash);