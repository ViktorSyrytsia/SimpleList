import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './post-add-form.scss';

export default class PostAddForm extends Component {
    state = {
        text: ''
    }

    onValueChange = (e) => {
        let value = e.target.value;
        this.setState((state) => {
            return {
                text: value
            }

        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {

        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    onChange={this.onValueChange}
                    type="text"
                    placeholder="Add some ToDo Items"
                    className="form-control new-post-label"
                    value={this.state.text} />
                <Button
                    type="submit"
                    color="success"
                    className="add-button"
                >ADD</Button>{''}
            </form>
        );
    }
}