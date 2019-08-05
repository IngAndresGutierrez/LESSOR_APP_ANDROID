import React,{Component} from 'react';
import {ScrollView,Text,View} from 'react-native';
import store from '../data/store';
import { setProperties } from '../actions/properties';
import Property from './property';
import {connect} from 'react-redux';
import Logo from './logo';


class Properties extends Component{

	static navigationOptions = {
	  	headerTitle: <Logo />,	
	    drawerLabel: 'ListInmuebles',
	    drawerIcon: ({ tintColor }) => (
	       <Icon name='list-ul' color='#e65735'/>	        
	    ),
  	};


	//componentWillMount(){

		//  let categoryToFilter = store.getState().Filter.filter.typeProperty;
		//  let municipalityToFilter = store.getState().Filter.filter.municipality;
		  
		//  firebase.database().ref().child('properties').orderByChild('category_municipality').equalTo(categoryToFilter+"_"+municipalityToFilter).on('value',snapshot => {
        //  		store.dispatch(setProperties(snapshot.val()))
      	//	})
  	//}  
	

	render(){

		const { properties } = this.props;

		return(
			
			<ScrollView >
                

                {properties ?

                    Object.keys(properties).map((property, index) => (
                        
                        <Property key={index} {...properties[property]}  >
                            
                        </Property>

                    ))

                  :<View><Text>No existen inmuebles registrados para los datos de búsqueda especificados</Text></View>  
                }

        	</ScrollView>
		)
	}
}


const mapStateToProps = (state,props) => ({

  properties: state.Properties.properties,
  
})

export default connect(mapStateToProps)(Properties);