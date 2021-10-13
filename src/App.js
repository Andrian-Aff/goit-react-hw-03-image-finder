import './App.css';
import React, {PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify';
import SearchBar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
import Modal from './components/Modal'


class App extends PureComponent {
state= {
  queryValue: '',
  showModal: false,
  largeimage: null,
}
// shouldComponentUpdate(nextProps, nextState) {
//   return nextState.state.id !== this.state.id
// }
handleSearchOnSubmit= value => {
  // console.log('queryValue:', value)
  this.setState({queryValue: value})
  };
  
takeLargePicture = e => {
  if (!e.target) {
    return;
  } else {
    this.setState({
      largeimage: e.target.attributes['largeimage'].value
    });
  }
  this.toggleModal();
};

toggleModal = () => {
  this.setState(({ showModal }) => ({
    showModal: !showModal,
  }));
};

render() {
  const {queryValue, showModal, largeimage} = this.state
  return (
    <div className="App">
    <SearchBar onSubmit={this.handleSearchOnSubmit}/>
    <ToastContainer autoClose={3000} />
    <ImageGallery 
      queryValue={queryValue}
      onOpen={this.takeLargePicture}
    /> 
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeimage} alt={queryValue} />
          </Modal>)
        }
    </div>
  );
}
}



export default App;
