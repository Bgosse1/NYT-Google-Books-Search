import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {

  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("in the submit");
  };

  render() {
      return(
        <Container fluid>
        <Row>
          <Col size="sm-12 md-12">
          <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <p>Search for and Save Books of Intrest</p>
          </Jumbotron>
          <form>
            <h1>Book Search</h1>
            <label>book</label>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>
        </Container>
      );
}
}

export default Search;
