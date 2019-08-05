import React,{Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import GenericModal from './generic-modal';
import SliderImages from './slider-images';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const styles = StyleSheet.create({
  image: {
    
    height: 150
  },
  name:{

  },
  buttonOpen:{
		backgroundColor:'white'
  },
  buttonClose:{
		backgroundColor:'#583778'
  },
  title: {		 
  		flex:0.1,
		justifyContent: "center", 
		alignItems: "center",		
  },
  container: { flex: 0, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }

});

class Property extends Component{

	state = {
      tableHead: ['Pisos', 'Cuartos', 'Area', 'Precio'],
      tableData: [
        [this.props.num_floors, this.props.num_rooms, this.props.area_property, this.props.price]        
      ]
    }

  	render(){

  		const title = this.props.category + " | " + this.props.municipality + " | " + this.props.neighborhood;
  		const state = this.state;


  		return (

		  	// implemented without image with header
			<Card title={title}>
			  {
		        <View >
		          <Image
		            style={styles.image}
		            resizeMode="cover"
		            source={{ uri: this.props.cover }}
		          />
		          <Text style={styles.name}>{this.props.description}</Text>
		        </View>

			  }

				<GenericModal icon="eye">

					<Text>{title}</Text>

					<SliderImages />

					<View style={styles.container}>
					        <Table borderStyle={{borderWidth: 1, borderColor: '#583778'}}>
					          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
					          <Rows data={state.tableData} textStyle={styles.text}/>
					        </Table>
					</View>
									

				</GenericModal>

			</Card>

			
	  	)
  	}
	  	
}

export default Property;


