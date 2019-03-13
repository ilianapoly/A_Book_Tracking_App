import React, { Component } from 'react';
import BookShelf from './BookShelf';
import FloatingActionButton from './FloatingActionButton';
import { getAll  } from './BooksAPI';
class Home extends Component {
    
    async componentDidMount() {
        try { 
            const books = await getAll(); 
            this.props.addBooks(books);
        }catch (e){
            console.log(e);
        }

        getAll().then( (books) => {
            this.setState( ()=> ({ books }))
        })
    }
    
    render(){
        
        return(
          <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
                <div>
                <BookShelf name="Currently Reading"/>
                <BookShelf name="Want to Read"/>
                <BookShelf name="Read"/>
                </div>
            </div>

            <FloatingActionButton />
          </div>  
        );
    }
}
export default Home;