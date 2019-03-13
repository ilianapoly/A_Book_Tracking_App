import React, { Component }from 'react'
import { Route } from 'react-router-dom'
import Search from './Search';
import Main from './Main';
import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends Component {

    state = {
        books:[]
    }

    componentDidMount() {
        this.refreshBookshelves()
    }

    refreshBookshelves = () => {
        BooksAPI.getAll().then( books => this.setState( {
            books: books
        }))
    }

    render() {
  
      return (
  
        <div className="app">   
          <Route 
            exact path='/' 
            render={ () => (
            <Main allBooks={this.state.books} refreshBookshelves={this.refreshBookshelves}/>
            )}
          />

          <Route 
            exact path='/search'
            render={ ()=> (
            <Search allBooks={this.state.books}  refreshBookshelves={this.refreshBookshelves}/>
          )}/>    
        </div>
    )
  }
}

export default BooksApp;
