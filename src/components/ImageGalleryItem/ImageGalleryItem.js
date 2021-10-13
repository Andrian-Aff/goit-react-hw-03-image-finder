import s from './ImageGalleryItem.module.css'
// import PropTypes from 'prop-types';

export default function ImageGalleryItem({ onToggle, pictures }) {
    return (
      <>
        {pictures.map(picture => {
          return (
            <li key={picture.id} onClick={onToggle} className={s.ImageGalleryItem} >
              <img
                src={picture.webformatURL}
                alt={picture.tags[0]}
                className={s.ImageGalleryItem__image}
                largeimage={picture.largeImageURL}
              />
            </li>
          );
        })}
      </>
    );
  };
  
  // ImageGalleryItem.propTypes = {
  //   src: PropTypes.string.isRequired,
  //   alt: PropTypes.string.isRequired,
  //   largeImageUrl: PropTypes.string.isRequired,
  // };
