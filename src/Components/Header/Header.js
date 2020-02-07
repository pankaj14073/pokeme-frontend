import React from "react";
import styles from './Header.css'
import { filterQuestions, logoutUser } from "../../js/actions/index"
import { connect } from "react-redux";



const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
    };
}

class Header extends React.Component {
    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">PokeMe</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input id="search" className="form-control mr-sm-2" type="search" onChange={this.props.onChange} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-dark my-2 my-sm-0" onClick={(() => this.props.logoutUser())}>Logout</button>
                    </form>
                </div>
            </nav >
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)