import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    };

    handleFormSubmit = e => {
        e.preventDefault();

        this.props.addContact(this.state.name, this.state.number, nanoid());
        this.resetForm();
    };

    resetForm = () => {
        this.setState({name: '', number: ''});
    };

    render () {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor="">
                    Name
                    <input 
                        type='text'
                        name='name'
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleInputChange} 
                    />
                </label>
                <label htmlFor="">
                    Number
                    <input 
                        type='tel'
                        name='number'
                        value={this.state.number}
                        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleInputChange}
                    />
                </label>
                <input type='submit' value='Add contact' />
            </form>
        );
    }
};

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};