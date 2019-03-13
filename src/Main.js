import React, { Component } from 'react';
import BookShelf from './BookShelf';
import FloatingActionButton from './FloatingActionButton';

class Main extends Component {
    
  
    render(){

        const allBooks = this.props.allBooks
        const currentlyReadingBooks = allBooks.filter(book => book.shelf === "currentlyReading")
        const readBooks = allBooks.filter(book => book.shelf === "read")
        const wantToReadBooks = allBooks.filter(book => book.shelf === "wantToRead")

        return(
          <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                  <BookShelf name="Currently Reading" books={currentlyReadingBooks} refreshBookshelves={this.props.refreshBookshelves}/>
                  <BookShelf name="Want to Read"  books={wantToReadBooks}  refreshBookshelves={this.props.refreshBookshelves}/>
                  <BookShelf name="Read"  books={readBooks}  refreshBookshelves={this.props.refreshBookshelves}/>
                </div>
            </div>
            <FloatingActionButton />
          </div>  
        );
    }
}
export default Main;