import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export class App extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addContact = (name, number, id) => {
        if (this.state.contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase())
                ) {
                    alert(`${name} is already in contacts.`);
                    return;
                }
        
        this.setState(prevState => {
            return {
                contacts: [...prevState.contacts, { name, number, id }],
            };
        });
    };

    filterContacts = () => {
        return this.state.contacts.filter(contact => {
            return contact.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase());
        });
    };

    deleteContact = id => {
        const contacts = this.state.contacts.filter(contact => {
            return contact.id.toLowerCase() !== id.toLowerCase();
        });

        this.setState(() => {
            return {
                contacts: [...contacts],
            };
        });
    };

    render() {
        return (
            <div className={css.container}>
                <h2 className={css.title}>Phonebook</h2>
                <ContactForm addContact={this.addContact}/>
                <h2 className={css.title}>Contacts</h2>
                <Filter
                    filter={this.state.filter}
                    handleFilterChange={this.handleInputChange}
                />
                <ContactList
                    contacts={this.filterContacts()}
                    deleteContact={this.deleteContact}
                />
            </div>
        )
    }
}