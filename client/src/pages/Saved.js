import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Book from "../components/Book";
import API from "../utils/API";
import { List } from "../components/List";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.querySavedBooks();
  }

  querySavedBooks = () => {
    API.getBooks()
      .then(res =>{
        console.log(res.data)
        this.setState({
          books: res.data
        })
      
      })
      .catch(err => console.log(err));
  };

  bookDeleteHandler = id => {
    API.deleteBook(id).then(res => this.querySavedBooks());
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12 md-12" />
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <Book
                  key={book._id}
                  title={book.title}
                  subtitle={book.subtitle}
                  link={book.link}
                  authors={book.authors.join(", ")}
                  description={book.description}
                  image={book.image}
                  Button={() => (
                    <button
                      onClick={() => this.bookDeleteHandler(book._id)}
                      className="btn btn-primary ml-2"
                    >
                      Delete
                    </button>
                  )}
                />
              ))}
            </List>
          ) : (
            <h3>Currently There Are No Saved Books</h3>
          )}
        </Row>
      </Container>
    );
  }
}

export default Saved;
