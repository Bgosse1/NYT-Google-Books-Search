import React, { Component } from "react";
import "./App.css";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { Col, Row, Container } from "./components/Grid";
import Jumbotron from "./components/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Nav />
          <Container fluid>
            <Row>
              <Col size="sm-12 md-12">
                <Jumbotron>
                  <h1>(React) Google Books Search</h1>
                  <p>Search for and Save Books of Intrest</p>
                </Jumbotron>
              </Col>
            </Row>
          </Container>

          <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/search" component={Search} />
            <Route path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
