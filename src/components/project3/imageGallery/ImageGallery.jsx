import React, { Component } from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import css from './imageGallery.module.css';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    const { images, onSelect } = this.props;
    return (
      <ul className={css.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem key={image.id} onSelect={onSelect} image={image} />
        ))}
      </ul>
    );
  }
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
  onSelect: PropTypes.func.isRequired,
};

export default ImageGallery;
