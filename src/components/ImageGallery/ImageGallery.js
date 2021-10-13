import s from './ImageGallery.module.css';
import React, { PureComponent } from 'react';
import LoaderPend from "../Loader";
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button'
import pixabayApi from '../pixabayApi';

export default class ImageGallery extends PureComponent{
state = {
    pictures: [],
    error: null,
    status: 'idle',
    page:1,
};


componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.queryValue ;
    const nextValue = this.props.queryValue;
        if(prevValue !== nextValue) {
            this.setState({ status: 'pending'});
            this.renderPictures(nextValue);
    }
}

renderPictures = (nextValue) => {
    const { page } = this.state;
    // const {queryValue} = this.props.queryValue;

    pixabayApi
      .fetchPictures(nextValue, page)
      .then(pictures =>
        this.setState(prevState => ({ 
            pictures: [...prevState.pictures, ...pictures.hits],
            status: 'resolved',
            page: prevState.page + 1,
         }))
      )
      .catch(error => this.setState({ error,  status: 'rejected'}))
  };

// onLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//     this.props.handleSearchOnSubmit(this.props.queryValue);
//   };

render(){
    const {pictures, error, status} = this.state;
    const{onOpen} = this.props

    if(status === 'idle') {
       return  <p>Input your query</p>  
    }

    if(status === 'pending') {
        return <LoaderPend/>
    }

    if(status === 'rejected') {
        return <p>Whoops, something went wrong: {error.message}</p>
    }

    if(status === 'resolved') {
        return(
            <>
                <ul className={s.ImageGallery}>
                    <ImageGalleryItem
                        pictures={pictures}
                        onToggle={onOpen}
                    />
                </ul>
                <Button onLoadMore={this.renderPictures} />
            </>
        )
    }
    
}
}