import React, { Component } from 'react'
import Book from './Book';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends Component {

    state= {
        queryBookResults:[]
    }

    updateQuery = (query) => {
        BooksAPI.search(query).then(results => {

          if(results === undefined || results.error){
            this.setState({
              queryBookResults: []
            })
          }else{
            this.setState({
              queryBookResults: results
            })
          }
        })
    }

    clearQuery = () => {
        this.updateQuery('')
    }

    render(){

      return(
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to={'/'} >Close</Link>
            <div className="search-books-input-wrapper">
              {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input 
                type="text" 
                placeholder="Search by title or author"
                onChange={ (event) => this.updateQuery(event.target.value)}
              />
            </div>

          </div>

          
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.queryBookResults !== null && this.state.queryBookResults.map(bookResult => {

                const matchedBook = this.props.allBooks.filter(book => book.id === bookResult.id)

                if(matchedBook && matchedBook[0]){
                  return <Book key={matchedBook[0].id} book={matchedBook[0]} refreshBookshelves={this.props.refreshBookshelves}/>
                } else{
                  bookResult.shelf = 'none'
                  return <Book key={bookResult.id} book={bookResult} refreshBookshelves={this.props.refreshBookshelves}/>  
                }
              })}
            </ol>
          </div>

      </div>);
    }
}

export default Search;