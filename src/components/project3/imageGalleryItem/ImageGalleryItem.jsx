import React, { Component } from 'react';
import css from './imageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  handleClick = () => {
    const { image, onSelect } = this.props;
    onSelect(image.largeImageURL);
  };
  render() {
    const { image } = this.props;
    return (
      <li className={css.imageGalleryItem} onClick={this.handleClick}>
        <img
          className={css.imageGalleryItem_image}
          src={image.webformatURL}
          alt={image.tags}
        />
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
