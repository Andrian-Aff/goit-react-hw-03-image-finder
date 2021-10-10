import React, { Component } from 'react'
import s from './SearchBar.module.css'

class SearchBar extends Component {
state = {
    value:''
}

onChange= e=> {
    const {value} = e.currentTarget;
    this.setState({value: value})
}

handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
}

reset =()=> {
    this.setState({
      name: '',
      number: '',
    })
  }

render() {
    return(
        <header className={s.Searchbar}>
            <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={s.SearchForm__button}>
                    <span className={s.SearchForm__button__label}>Search</span>
                </button>
                <input
                className={s.SearchForm__input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.onChange}
                />
            </form>
        </header>
    )
}
}

export default SearchBar;