import React from "react";
import Card from 'react-bootstrap/Card';
import styles from './Post.css';

export default class Post extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.tittle}</h5>
                    <p className="card-text"> {this.props.answer} </p>
                </div>
            </div>

        );
    }
}