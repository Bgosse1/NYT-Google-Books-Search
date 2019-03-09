import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import { List } from "../components/List";
import API from "../utils/API";
import Book from "../components/Book";

class Search extends Component {
  state = {
    books: [],
    queryString: "",
    message: "Search For A Book To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  queryBooks = () => {
    API.queryBooks({ title: this.state.queryString })
      .then(res =>
        this.setState({
          books: res.data.items
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Please Enter Another Title"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.queryBooks();
  };

  handleSaveBook = id => {
    const book = this.state.books.find(book => book.id === id);
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      link: book.volumeInfo.infoLink,
      image: book.volumeInfo.imageLinks.thumbnail
    })
      .then(() => this.queryBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12 md-12">
            <form>
              <h1>Book Search</h1>
              <label>Book</label>
              <Input
                value={this.state.queryString}
                onChange={this.handleInputChange}
                id="titleSearch"
                name="queryString"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!this.state.queryString}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12 md-12">
            <Jumbotron>
              <h1>Search Results</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book =>
                  <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    link={book.volumeInfo.infoLink}
                    authors={book.volumeInfo.authors.join(", ")}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    Button={() => (
                      <button
                        onClick={() => this.handleSaveBook(book.id)}
                        className="btn btn-primary ml-2"
                      >
                        Save
                      </button>
                    )}
                  />
              )}
              </List>
            ) : (
              <h3>{this.state.message}</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
