import React from 'react';
import { Field, reduxForm } from 'redux-form';

class QuestionForm extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };
    
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };
    
      render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field name="header" component={this.renderInput} label="Institution / year" />
                <Field
                    name="statement"
                    component={this.renderInput}
                    label="Statement"
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.header) {
        errors.header = 'You must enter a institution / year';
    }

    if (!formValues.statement) {
        errors.statement = 'You must enter a statement';
    }

    return errors;
};

export default reduxForm({
    form: 'questionForm',
    validate
})(QuestionForm);