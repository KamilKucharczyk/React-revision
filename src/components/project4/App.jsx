import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar/SearchBar';
import ImageGallery from './imageGallery/ImageGallery';
import Button from './button/Button';
import axios from 'axios';
import Loader from './loader/Loader';
import Modal from './modal/Modal';
import css from './app.module.css';

const baseUrl = 'https://pixabay.com/api/';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('dog');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [error, setError] = useState('');

  const getImages = async (query, page) => {
    setIsLoading(true);
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
      setImages(prevImages => [...prevImages, ...images.hits]);
      setIsLoading(false);
      setHasMore(images.hits.length > 0);
    } catch (error) {
      setIsLoading(false);
      setError('Error fetch');
      console.error('Image fetch error', error);
    }
  };

  const handleSubmit = inputValue => {
    setQuery(inputValue);
    setPage(1);
    setImages([]);
  };

  const loadMoreImages = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  const openModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  const closeModal = () => {
    setLargeImageURL(null);
  };

  useEffect(() => {
    if (query) {
      getImages(query, page);
    }
  }, [query, page]);

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} onSelect={openModal} />
      {isLoading && <Loader />}
      <Button onClick={loadMoreImages} hasMore={hasMore} />
      {largeImageURL && (
        <Modal largeImageURL={largeImageURL} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
