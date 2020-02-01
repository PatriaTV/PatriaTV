import React, { Component } from 'react'
import { Row, Col, Card, Skeleton, Spin } from 'antd';
import 'antd/dist/antd.css';

import logo from '../logo.png';
import '../stylesheets/App.scss';

import axios from 'axios';

const CompanyDisplay = props => {
    console.log(props);
    if (props.loading) {
        return <Skeleton active />;
    } else {
        const companyMovies = props.movies.map(movie => {
            return (
                <Col key={movie.id} className="item" md={4}>
                    <Card
                        cover={
                            <img
                                alt={movie.title}
                                src={movie.poster}
                            />
                        }
                    />
                </Col>
            );
        });

        return companyMovies;
    }
}

export default class Company extends Component {

    state = {
        movies: [],
        loading: true
    }

    goToHome() {
        this.props.history.push(`/`);
    }

    componentDidMount() {
        const company = this.props.match.params.id;

        axios.get(`http://api.elorri.fr/disney-plus/company/${company}`)
        .then(res => {
            const movies = res.data;
            this.setState({ movies, loading: false });
        });
    }

    render() {

        const company = this.props.match.params.id;

        return (
            <div className="App">
                <header className="App-header">
                    {this.state.loading ? <Spin /> : null}
                    <img src={logo} className="App-logo" alt="logo" onClick={() => this.goToHome()} />
                </header>

                <div className="App-container">
                    <div className="company-intro">
                        <div className="company-logo">
                            <img
                                alt={company}
                                src={`${process.env.PUBLIC_URL}/img/companies/logo-${company}.png`}
                            />
                        </div>
                        <div className="company-text">
                            <span>vous présente</span>
                            <span>tout son</span>
                            <span>catalogue</span>
                        </div>
                    </div>

                    <Row gutter={16}>
                        <CompanyDisplay loading={this.state.loading} movies={this.state.movies} company={company} />
                    </Row>
                </div>
            </div>
        );
    }
}
