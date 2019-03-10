import React , {Component} from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import Brain from './brain-icon.png';

export default class Logo extends Component {
  render() {
    return (
      <div className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
          <div className="Tilt-inner pa3">
            <img src={Brain} style={{paddingTop: '25px'}}alt='Brain Logo' />
          </div>
        </Tilt>
      </div>
    );
  }
}