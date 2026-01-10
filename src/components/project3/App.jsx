import React, { Component } from 'react';
import SearchBar from './searchbar/SearchBar';
import ImageGallery from './imageGallery/ImageGallery';
import Button from './button/Button';
import axios from 'axios';
import Loader from './loader/Loader';
import Modal from './modal/Modal';
import css from './app.module.css';

const baseUrl = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    hasMore: false,
    largeImageURL: null,
    error: '',
  };

  getImages = async (query, page) => {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get(`${baseUrl}`, {
        params: {
          q: query,
          page,
          key: '39460878-dc736cfcb50ba2857b324878d',
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      });
      const images = response.data;
      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
        isLoading: false,
        hasMore: images.hits.length > 0,
      }));
    } catch (error) {
      this.setState({ isLoading: false });
      console.error('Image fetch error', error);
    }
  };

  handleSubmit = inputValue => {
    this.setState({ query: inputValue, page: 1, images: [] }, () => {
      this.getImages(inputValue, this.state.page);
    });
  };

  loadMoreImages = () => {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage });
    this.getImages(this.state.page, nextPage);
  };

  openModal = largeImageURL => {
    this.setState({ largeImageURL });
  };

  closeModal = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { images, largeImageURL, hasMore, isLoading } = this.state;
    return (
      <div className={css.app}>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} onSelect={this.openModal} />
        {isLoading && <Loader />}
        <Button onClick={this.loadMoreImages} hasMore={hasMore} />
        {largeImageURL && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
