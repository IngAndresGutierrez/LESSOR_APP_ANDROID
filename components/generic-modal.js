import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,Text,Image,StyleSheet,Modal} from 'react-native';
import {Button} from 'react-native-elements';


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
  }

});


class GenericModal extends Component{


	state = {
    	modalVisible: false,
  	};

  	openModal() {
    	this.setState({modalVisible:true});
  	}

  	closeModal() {
    	this.setState({modalVisible:false});
  	}

	render(){
		return(

			<View>
	          <Modal
	              visible={this.state.modalVisible}
	              animationType={'slide'}
	              onRequestClose={() => this.closeModal()}
	          >
		            <View style={styles.modalContainer}>
		              <View style={styles.innerContainer}>
		                
		              	{this.props.children}

		                <Button
		                    onPress={() => this.closeModal()}
		                    title="Cerrar"
		                    buttonStyle={styles.buttonClose}
		                >
		                </Button>
		              </View>
		            </View>
		          </Modal>
		         
		          <Button
					  icon={
					    <Icon
					      name={this.props.icon}
					      size={30}
					      color="#583778"
					    />
					  }
					  iconRight
					  buttonStyle={styles.buttonOpen}						  
					  onPress={() => this.openModal()}
					/>
			</View>		
	       
		)
	}
}

export default GenericModal;