import React,{ Component } from 'react';
import Book from './Book';

class BookShelf extends Component {

    render(){
      
        const books = this.props.books
        return(
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map(book => {
                   return <Book key={book.id} book={book}  refreshBookshelves={this.props.refreshBookshelves} />
                  })}
              </ol>
            </div>
          </div>
        );
    }
}

export default BookShelf;