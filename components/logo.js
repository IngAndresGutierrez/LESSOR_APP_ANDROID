import React, { Component } from 'react';
import { Image } from 'react-native';


class Logo extends Component{
	render(){
		return (<Image source={require('../images/logo.png')}/>)
	}
}

export default Logo;