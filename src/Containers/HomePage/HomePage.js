import React from "react";
import './HomePage.css';
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

class HomePage extends React.Component {

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
              <div className="px-4 pt-4 pb-4 bg-light">
                <form>
                  <div className="form-group">
                    <label >Poke Question</label>
                    <input type="text" className="form-control" placeholder="To" />
                  </div>
                  <div className="form-group">
                    <textarea type="text" className="form-control" placeholder="Question here" />
                  </div>
                  <div className="form-check  pb-2">
                    <input type="checkbox" className="form-check-input" id="anonymous" />
                    <label className="form-check-label">Anonymously</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Send</button>
                </form>
              </div>
              <div className="py-4 px-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)