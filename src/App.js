import './App.css';
import Modal from './components/Modal'
import React, {PureComponent } from 'react'
import SearchBar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
import Button from './components/Button'
import ImageGalleryItem from './components/ImageGalleryItem';

class App extends PureComponent {
state= {
  id: '',
  showModal: false,
}

componentDidMount() {
  
}
// shouldComponentUpdate(nextProps, nextState) {
//   return nextState.state.id !== this.state.id
// }

componentDidUpdate(prevProps, prevState) {
  // if(this.state.id !== prevState.id) {
  // localStorage.setItem()
  // }
}

componentWillUnmount() {
  
}

toggleModal(){
  this.setState(({showModal})=> ({showModal: !showModal}))
}

onSubmit= ({value}) => {
console.log('value:', value)

};

render() {
  const {showModal} = this.state
  return (
    <div className="App">
    <SearchBar onSubmit={this.onSubmit}/>
    <ImageGallery>
      <ImageGalleryItem />
      <Button/>
    </ImageGallery>
    {showModal && <Modal onClose={this.toggleModal}/>}
    </div>
  );
}
}
  

export default App;
