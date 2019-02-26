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

    renderTextArea = ({textarea, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
        <div className={className}>
            <label>{label}</label>
            <textarea {...textarea} placeholder="Content" rows="10" cols="40"></textarea>
            {this.renderError(meta)}
        </div>
        )
    };

    renderAlternative = ({ input, tagLabel, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className="ui item">
                <div className="ui right labeled left icon input">
                    <i className="tags icon"></i>
                    <input {...input} autoComplete="off" placeholder="Enter a alternative answer..." />
                    <a className="ui tag label">
                        {tagLabel}
                    </a>
                    {this.renderError(meta)}
                </div>
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
                <Field name="statement" component={this.renderInput} label="Statement" />
                <div className="ui list">
                    <Field name="alternative1" component={this.renderAlternative} tagLabel="Mark as correct" />
                    <Field name="alternative2" component={this.renderAlternative} tagLabel="Mark as correct" />
                    <Field name="alternative3" component={this.renderAlternative} tagLabel="Mark as correct" />
                </div>
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