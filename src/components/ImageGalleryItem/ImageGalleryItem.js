import s from './ImageGalleryItem.module.css'
import React, { PureComponent } from 'react'
import Modal from '../Modal'

class ImageGalleryItem extends PureComponent {
  state= {
    showModal: false,
  }
  
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  

  render() {
    const { src, alt, largeImageUrl } = this.props;
    const { showModal } = this.state;
    return (
      <li className={s.ImageGalleryItem}>
      <img
        onClick={this.toggleModal}
        src={src}
        alt={alt}
        className={s.ImageGalleryItemImage}
      />
      {showModal && (
        <Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} />
      )}
      </li>
    );
  };
}

export default ImageGalleryItem
  