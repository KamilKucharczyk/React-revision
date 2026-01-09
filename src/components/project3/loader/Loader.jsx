import React, { Component } from 'react';
import { FidgetSpinner } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <FidgetSpinner
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    );
  }
}

export default Loader;
