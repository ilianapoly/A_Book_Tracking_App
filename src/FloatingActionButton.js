import React, { Component } from 'react';
import { Link } from "react-router-dom";

class FloatingActionButton extends Component {
    
    render(){
      
        return(       
          <Link to='./search'>
            <div className="open-search">
              <button className="open-search">            
                Add a book
              </button>
            </div>
          </Link>
        );
    }
}

export default FloatingActionButton;