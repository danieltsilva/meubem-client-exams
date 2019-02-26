import React from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import { fetchQuestions } from '../../actions';

class QuestionList extends React.Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                <div className="item">
                    <i className="large list alternate outline middle aligned icon"></i>
                    <div className="content">
                    <p className="header">Semantic-Org/Semantic-UI</p>
                    <div className="description">Updated 10 mins ago</div>
                    </div>
                </div>
                <div className="item">
                    <i className="large list alternate outline middle aligned icon"></i>
                    <div className="content">
                    <p className="header">Semantic-Org/Semantic-UI-Docs</p>
                    <div className="description">Updated 22 mins ago</div>
                    </div>
                </div>
                <div className="item">
                    <i className="large list alternate outline middle aligned icon"></i>
                    <div className="content">
                    <p className="header">Semantic-Org/Semantic-UI-Meteor</p>
                    <div className="description">Updated 34 mins ago</div>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         streams: Object.values(state.streams),
//         currentUserId: state.auth.userId,
//         isSignedIn: state.auth.isSignedIn
//     };
// };

export default connect(
    null,
    { fetchQuestions }
  )(QuestionList);