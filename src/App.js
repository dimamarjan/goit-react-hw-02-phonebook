import React, { Component } from "react";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const inputData = event.target.value;
    this.setState({
      [event.target.name]: inputData,
    });
  };

  addContact = (event) => {
    event.preventDefault();
    const newId = uuidv4();
    const { name, number, contacts } = this.state;
    let message = "";
    contacts.forEach((contactItem) => {
      if (contactItem.name === name) {
        message = `${name} is already in contacts.`;
        alert(message);
      }
      if (contactItem.number === number) {
        message = `${number} is already in contacts.`;
        alert(message);
      }
    });
    if (message.length === 0) {
      this.setState((prevState) => ({
        contacts: [
          ...prevState.contacts,
          { id: newId, name: name, number: number },
        ],
      }));
      event.target[0].value = "";
      event.target[1].value = "";
    } else {
      event.target[0].value = "";
      event.target[1].value = "";
    }
  };

  filterDataHandle = (event) => {
    const inputData = event.target.value;
    this.setState({
      filter: inputData,
    });
  };

  filterContacts = () => {
    const { contacts } = this.state;
    const stateFilterItem = this.state.filter;
    const isName = parseInt(stateFilterItem);
    if (isNaN(isName)) {
      const newArrData = [
        ...contacts.filter((contactItem) => {
          return (
            contactItem.name
              .toLowerCase()
              .indexOf(stateFilterItem.toLowerCase()) > -1
          );
        }),
      ];
      return newArrData;
    } else {
      const newArrData = [
        ...contacts.filter((contactItem) => {
          return contactItem.number.indexOf(stateFilterItem) > -1;
        }),
      ];
      return newArrData;
    }
  };

  deleteContact = (event) => {
    const { contacts } = this.state;
    contacts.forEach((contactElem, index) => {
      if (contactElem.id === event.target.value) {
        contacts.splice(index, 1);
      }
    });
    this.setState({
      contacts: contacts,
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onHandleChange={this.handleChange}
          onAddContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter onHandleChange={this.filterDataHandle} />
        <ContactList
          onDelete={this.deleteContact}
          filtredDataArr={this.filterContacts()}
        />
      </div>
    );
  }
}
