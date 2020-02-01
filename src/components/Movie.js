import React, { Component } from 'react';
import { Modal, Spin, Tag, Skeleton, Icon } from 'antd';
import 'antd/dist/antd.css';

import logo from '../logo.png';
import '../stylesheets/App.scss';

//import movies from '../movies';
import axios from 'axios';

const MovieDisplay = props => {
    if (props.loading) {
        return <Skeleton active />;
    } else {

        const autoplay = props.modalVisible ? "autoplay=1" : "autoplay=0";

        return (
            <div className="movie">
                <div className="movie-poster">
                    <img alt={props.movie.title} src={props.movie.poster} />
                    <div className="play-wrapper" onClick={props.playMovie}>
                        <Icon type="play-circle" theme="twoTone" twoToneColor="#01b9dc" />
                    </div>
                </div>
                <div className="movie-body">
                    <h1>{props.movie.title}</h1>
                    <Tag color="#01B9DC">{props.movie.company}</Tag>
                    <p>{props.movie.description}</p>
                </div>

                <Modal visible={props.modalVisible}
                    onCancel={props.handleCancel}
                    footer={null}
                    width={"100%"}
                    wrapClassName={"movie-modal"}
                >
                    <iframe src={`${props.movie.video}?${autoplay}&controls=1&showinfo=0&modestbranding=1&autohide=1`} title={props.movie.title} allow="autoplay" frameBorder={0} allowFullScreen />
                </Modal>
            </div>
        );
    }
}

export default class Movie extends Component {

    state = {
        movie: {},
        loading: true,
        modalVisible: false
    }

    goToHome = () => {
        this.props.history.push(`/`);
    }

    playMovie = () => {
        this.setState({
            modalVisible: true,
        });
    }

    handleCancel = () => {

        // Arrêter la video à la fermeture de la popin
        const iframe = document.querySelector('iframe');
        console.log(iframe);
        if (iframe) {
            let iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }

        this.setState({
            modalVisible: false,
        });
    }

    componentDidMount = () => {
        const id = Number(this.props.match.params.id);
        axios.get(`http://api.elorri.fr/disney-plus/movie/${id}`)
            .then(res => {
                const movie = res.data;
                console.log(movie);
                this.setState({ movie, loading: false });
            });
    }

    render() {
        console.log("render");
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.loading ? <Spin /> : null}
                    <img src={logo} className="App-logo" alt="logo" onClick={() => this.goToHome()} />
                </header>

                <div className="App-container">
                    <MovieDisplay loading={this.state.loading} movie={this.state.movie} modalVisible={this.state.modalVisible} playMovie={() => this.playMovie()} handleCancel={() => this.handleCancel()} />
                </div>
            </div>
        );
    }
}
