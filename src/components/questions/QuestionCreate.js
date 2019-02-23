import React from 'react';
import { connect } from 'react-redux';
import { createQuestion } from '../../actions';
import QuestionForm from './QuestionForm';

class QuestionCreate extends React.Component {
    onSubmit = formValues => {
        //TODO action
        //this.props.createQuestion(formValues);
        console.log(formValues);
    };

    render() {
        return (
        <div>
            <h3>Create a Question</h3>
            <QuestionForm onSubmit={this.onSubmit} />
        </div>
        );
    }
}

export default connect(
    null,
    { createQuestion }
)(QuestionCreate);