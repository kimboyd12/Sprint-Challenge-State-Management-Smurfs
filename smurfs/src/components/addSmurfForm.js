import React from 'react';
import { addSmurf } from '../actions/addSmurf';
import { connect } from 'react-redux';

class AddSmurfForm extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addSmurf({
            id: Date.now(),
            name: this.state.name,
            age: this.state.age, 
            height: this.state.height
        })
        this.setState({ name: '', age: '', height: '' })
    }

    render() {

        return (
         <div className="smurf-form">
            <h2>Add A New Smurf</h2>

            <form onSubmit={this.submitHandler}>
                <label>
                    Name:
                    <input 
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.changeHandler}
                        placeholder="Please enter a name"
                    />
                </label>
                <label>
                    Age:
                    <input 
                        type="text"
                        name="age"
                        value={this.state.age}
                        onChange={this.changeHandler}
                        placeholder="Please enter an age"
                    />
                </label>
                <label>
                    Height:
                    <input 
                        type="text"
                        name="height"
                        value={this.state.height}
                        onChange={this.changeHandler}
                        placeholder="Enter a height in cm"
                    />
                </label>
            <button type="submit">Add Smurf</button>
            </form>
         </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm)
