import React, { Component } from 'react';
import SearchBar from './searchbar/SearchBar';
// import ImageGallery from './imageGallery/ImageGallery';
// import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import Button from './button/Button';
// import axios from 'axios';

// const baseUrl = 'https://pixabay.com/api/';

class App extends Component {
  render() {
    return (
      <>
        <SearchBar />
        {/* <ImageGallery />
        <ImageGalleryItem /> */}
        <Button />
      </>
    );
  }
}

export default App;
