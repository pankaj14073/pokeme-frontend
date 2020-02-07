import React from "react";
import './LoginPage.css';
import Post from "../../Components/Post/Post";
import Header from "../../Components/Header/Header";
import { connect } from "react-redux";
import { authenticate } from "../../js/actions/index"
import { Redirect } from "react-router-dom";

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: val => dispatch(authenticate(val))
    };
}
class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isValidEmail: false,
            isValidPassword: false,
            isValidForm: false
        }
    }
    validateField(fieldName, value) {

        this.setState({ [fieldName]: value });
        var isValidEmail = this.state.isValidEmail;
        var isValidPassword = this.state.isValidPassword;
        switch (fieldName) {
            case 'email':
                if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    isValidEmail = true;
                }
                else
                    isValidEmail = false;
                break;
            case 'password':
                if (value.length >= 6) {
                    isValidPassword = true;
                }
                else
                    isValidPassword = false;
                break;
            default:
                break;
        }

        this.setState({
            isValidEmail: isValidEmail,
            isValidPassword: isValidPassword,
            isValidForm: isValidEmail && isValidPassword
        });
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.authenticate(this.state);
        console.log('clicked submit')
        //this.props.history.push('/home')
    }

    render() {
        if (this.props.auth)
            return <Redirect to="/home" />

        return (
            <div className="Login" className="text-center">
                <form className="form-signin" onSubmit={e => this.handleSubmit(e)}>
                    <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                    <label className="sr-only">Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="Email"
                        required
                        onChange={(event) => this.handleUserInput(event)}
                    />
                    <label className="sr-only">Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password"
                        required
                        onChange={(event) => this.handleUserInput(event)}
                    />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={!this.state.isValidForm}>Sign in</button>
                    <p className="mt-5 mb-3">&copy; pxnkaj</p>
                </form>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)