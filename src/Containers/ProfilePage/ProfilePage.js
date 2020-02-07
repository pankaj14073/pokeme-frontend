import React from "react";
import './ProfilePage.css';
import Post from "../../Components/Post/Post";
import Header from "../../Components/Header/Header";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import profileImage from '../../images/fb.jpg'
import { filterQuestions, logoutUser } from "../../js/actions/index"



const mapStateToProps = state => {
    debugger;
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        filterQuestions: val => dispatch(filterQuestions(val)),
        logoutUser: () => dispatch(logoutUser())
    };
}

class ProfilePage extends React.Component {

    createPosts() {
        return this.props.questions.map((question, index) => {
            return <Post key={index} tittle={question.tittle} answer={question.answer} ></Post>
        })
    }

    render() {

        if (!this.props.auth)
            return <Redirect to="/login" />

        return (
            <div>
                <Header user={this.props.user} onChange={(e) => this.props.filterQuestions(e.target.value)} ></Header>
                <div className="row py-5 px-4">
                    <div className="col-xl-6 col-md-8 col-sm-10 mx-auto">
                        <div className="bg-white shadow rounded overflow-hidden">
                            <div className="px-4 pt-4 pb-4 bg-dark">
                                <div className="media align-items-end profile-header">
                                    <div className="profile mr-3"><img src={profileImage} alt="..." width="130" className="rounded mb-2 img-thumbnail" />
                                        <a href="#" className="btn btn-dark btn-sm btn-block">Edit profile</a>
                                    </div>
                                    <div className="media-body mb-5 text-white">
                                        <h4 className="mt-0 mb-0">{this.props.user.name}</h4>
                                        <p className="small mb-4"> <i className="fa fa-map-marker mr-2"></i>{this.props.user.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-light p-4 d-flex justify-content-end text-center">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">241</h5><small className="text-muted"> <i className="fa fa-picture-o mr-1"></i>Photos</small>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">84K</h5><small className="text-muted"> <i className="fa fa-user-circle-o mr-1"></i>Followers</small>
                                    </li>
                                </ul>
                            </div>

                            <div className="py-4 px-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h5 className="mb-0">Timeline</h5><a href="#" className="btn btn-link text-muted">Show all</a>
                                </div>
                                <div className="row">
                                    <div id='questions' >
                                        {
                                            this.createPosts()
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)