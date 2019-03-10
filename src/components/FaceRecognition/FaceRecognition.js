import React , {Component} from 'react';

export default class FaceRecognition extends Component {
  render() {
    const { imageUrl } = this.props
    return (
      <div className='center ma'>
        <div className="absolute mt2">
          <img src={imageUrl} alt='' width='500px' height='auto' />
        </div>
      </div>
    );
  }
}