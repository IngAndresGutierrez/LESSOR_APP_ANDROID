import React, { Component } from 'react';
import { Text, View, Picker, Alert, StyleSheet,Image} from 'react-native';
import { Button, Divider, Header  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import image from '../images/logo.png';
import { setFilterProperty } from '../actions/filter';
import store from '../data/store';
import {connect} from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Logo from './logo';
import database,{firebase} from '@react-native-firebase/database';
import { setProperties } from '../actions/properties';


const styles = StyleSheet.create({

	container: {
		flex: 0.7, 
		justifyContent: "center", 
		alignItems: "center",
		
	},
	title:{ 		
		fontSize:25,
		color:'#583778',
		fontWeight:'bold'
	},
	picker:{
		height: 50, 
		width: 250
	},
	button:{
		backgroundColor:'#583778'
	},
  	icon: {
	    width: 24,
	    height: 24,
  	},
  	title_container:{
  		flex: 0.3, 
  		alignItems: 'center', 
  		justifyContent: 'center' 
  	},
  	divider:{
  		flex: 0.2, 
  	}

  
});

class FilterPage extends Component {

	state = {
		typeProperty:'',
		municipality:''
	}

  	static navigationOptions = {
	  	headerTitle: <Logo />,	
	    drawerLabel: 'Buscar Inmuebles',
	    drawerIcon: ({ tintColor }) => (
	       <Icon name='search' color='#e65735'/>	        
	    ),
  	};

	filter =() => {
	  const { typeProperty, municipality } = this.state;  
	  const { typePropertyProps, municipalityProps } = this.props;  
	  
      
      let filter = {
        typeProperty:typeProperty,
        municipality:municipality
      }

      if(typeProperty && municipality){

        firebase.database().ref().child('properties').orderByChild('category_municipality').equalTo(typeProperty+"_"+municipality).once('value',snapshot => {
          		store.dispatch(setProperties(snapshot.val()))
      	})    

		
	    this.props.navigation.navigate('Main') 
      }
	}
  
  render() {

  	const {typeProperty,municipality} = this.state;

    return (
      <View style={styles.container}>
    
        <Divider style={styles.divider} />

        <View style={styles.title_container}>
		        <Text style={styles.title}>Buscar Inmuebles</Text>
		</View>

		<Divider style={styles.divider} />


        <Icon name='list-ul' color='#e65735'/>
        <Picker
		  selectedValue={typeProperty}
		  style={styles.picker}
		  onValueChange={(itemValue, itemIndex) =>
		    this.setState({typeProperty: itemValue})
		  }>

		  <Picker.Item label="Tipo de inmueble..." value="" />
		  <Picker.Item label="Apartaestudios" value="Apartaestudios" />
		  <Picker.Item label="Apartamentos" value="Apartamentos" />
		  <Picker.Item label="Casas" value="Casas" />
		  <Picker.Item label="Habitaciones" value="Habitaciones" />
		  <Picker.Item label="Locales" value="Locales" />
		</Picker>


		<Divider style={styles.divider} />


		<Icon name='map' color='#e65735'/>
		<Picker
		  selectedValue={municipality}
		  style={styles.picker}
		  onValueChange={(itemValue, itemIndex) =>
		    this.setState({municipality: itemValue})
		  }>

		  <Picker.Item label="Municipio..." value="" />
		  <Picker.Item label="Armenia" value="Armenia" />
		  <Picker.Item label="Ibagué" value="Ibague" />
		  <Picker.Item label="Manizales" value="Manizales" />
		  <Picker.Item label="Pereira" value="Pereira" />
		  <Picker.Item label="Villamaria" value="Villamaria" />
		  
		</Picker>

		<Divider style={styles.divider} />
		
		{typeProperty !== '' && municipality !== '' &&

			<Button
			  icon={
			    <Icon
			      name="search"
			      size={20}
			      color="white"
			    />
			  }
			  iconRight
			  buttonStyle={styles.button}
			  title="Buscar"
			  onPress={this.filter}
			/>
		}

      </View>
    );
  }
}

const mapStateToProps = (state,props) => ({

  categories: state.Categories.categories,
  municipalities: state.Municipalities.municipalities,
  filter:state.Filter.filter
 
})

export default FilterPage;
