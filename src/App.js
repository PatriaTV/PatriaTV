import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';

import logo from './logo.png';
import './stylesheets/App.scss';

import companies from './companies';
import axios from 'axios';

class App extends Component {

  state = {
    companies,
    movies: [],
    suggest: []
  }

  handleClick = (page, id) => {
    this.props.history.push(`/${page}/${id}`);
  }

  componentDidMount = () => {
    axios.get(`http://api.elorri.fr/disney-plus/movies`)
      .then(res => {
        const movies = res.data;
        axios.get(`http://api.elorri.fr/disney-plus/suggest`)
        .then(res => {
          const suggest = res.data;
          this.setState({ movies, suggest });
        });
      });
    
    
  }

  render() {
    const movies = this.state.movies;
    const suggest = this.state.suggest;
    const highlightItems = movies.filter(movie => movie.highlighted);
    const highlightItem = highlightItems.map(item => {
      return (
        <div key={item.id} className="highlight-item">
          <Card
            cover={
              <img
                alt={item.title}
                src={item.cover}
              />
            }
            onClick={() => this.handleClick("movie", item.id)}
          />
        </div>
      );
    });

    const companiesList = Object.keys(companies).map(key => {
      return (
        <Col key={key} className="company" md={6}>
          <Card
            cover={
              <img
                alt={companies[key]}
                src={`${process.env.PUBLIC_URL}/img/companies/logo-${key}.png`}
              />
            }
            onClick={() => this.handleClick("company", key)}
          />
        </Col>
      );
    });

    const newList = movies.slice(0, 6).map(movie => {
      return (
        <Col key={movie.id} className="item" md={4}>
          <Card
            cover={
              <img
                alt={movie.title}
                src={movie.poster}
              />
            }
            onClick={() => this.handleClick("movie", movie.id)}
          />
        </Col>
      );
    });
    
    const suggestionsList = suggest.slice(suggest.length - 3).map(movie => {
      return (
        <Col key={movie.id} className="item" md={8}>
          <Card
            cover={
              <img
                alt={movie.title}
                src={movie.cover}
              />
            }
            onClick={() => this.handleClick("movie", movie.id)}
          />
        </Col>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="App-container">
          {highlightItem}

          <div className="companies">
            <Row gutter={16}>
              {companiesList}
            </Row>
          </div>

          <div className="new">
            <h2>Nouveautés</h2>
            <Row gutter={16}>
              {newList}
            </Row>
          </div>

          <div className="suggestions">
            <h2>Suggestions</h2>
            <Row gutter={16}>
              {suggestionsList}
            </Row>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
