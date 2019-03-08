import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import ViewBtn from "../components/ViewBtn";
import SaveBtn from "../components/SaveBtn";
import { Link, Redirect } from "react-router-dom";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadBooks = () => {
    console.log("hello");
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("in the submit");
    console.log(this.state.title);
    API.queryBooks({ title: this.state.title })
      .then(res => {
        console.log(res);
        this.setState({books: res.data.items})
      })
      .catch(err => console.log(err));
  };

  handleSaveBook = event => {
    this.setState({title: event.title, author: event.author, description: event.description, image: event.image, link: event.link})
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        description: this.state.description,
        link: this.state.link,
        image: this.state.image
      })
        .then(res => console.log("saved"))
        .catch(err => console.log(err));
    }
  };

  viewBook = event => {
    console.log("hello");
    console.log(JSON.stringify(event));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12 md-12">
            <form>
              <h1>Book Search</h1>
              <label>Book</label>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                id="titleSearch"
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!this.state.title}
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
                {this.state.books.map(book => (
                  <ListItem key={book.id}>

                      <strong>
                        {book.volumeInfo.title} Written by {book.volumeInfo.authors[0]}
                      </strong>
                      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                      <p>{book.volumeInfo.description}</p>
                      <ViewBtn onClick={() => this.viewBook({redirect: book.volumeInfo.infoLink})}>
                        View
                      </ViewBtn>
                      <SaveBtn onClick={() => this.handleSaveBook({title:book.volumeInfo.title, author:book.volumeInfo.authors[0], description:book.volumeInfo.description, link:book.volumeInfo.infoLink, image: book.volumeInfo.imageLinks.thumbnail})}>
                        Save
                      </SaveBtn>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
