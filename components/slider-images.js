import React,{Component} from 'react';
import Slideshow from 'react-native-image-slider-show';


export default class SlideshowTest extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: 'https://www.revistainteriores.es/uploads/s1/43/43/97/interiores%20de%20casas_24_730x442.jpg',
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: 'https://i.pinimg.com/originals/ca/6c/06/ca6c06121b27ca2e4df90dbf899d22d8.jpg',
        }, {
          title: 'Title 3',
          caption: 'Caption 3',
          url: 'https://casaydiseno.com/wp-content/uploads/2015/07/interiores-de-casas-modernas-vistas.jpg',
        },
      ],
    };
  }
 
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 6000)
    });
  }
 
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
 
  render() {
    return (
    <Slideshow 
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
    );
  }
}