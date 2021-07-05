import React, { Component } from "react";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
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
    const { name, number } = this.state;
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { id: newId, name: name, number: number },
      ],
    }));
  };

  filterDataHandle = (event) => {
    console.log(event.target.value);
    const inputData = event.target.value;
    this.setState({
      filter: inputData,
    });
    console.log(this.state.filter);
  };

  // filterContacts(filterDataState) {
  //   const stateDataList = this.state.contacts;
  //   console.log(stateDataList);
  //   console.log(stateDataList.filter())
  //   // return stateDataList.filter((element) => {
  //   //   console.log(element.toLowerCase().indexOf(filterDataState.toLowerCase()) > -1);
  //   //     return element.toLowerCase().indexOf(filterDataState.toLowerCase()) > -1;
  //   // })
  // }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onHandleChange={this.handleChange}
          onAddContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter onFilterHandle={this.filterDataHandle} />
        {/* <ContactList data={this.filterContacts(this.state.filter)} /> */}
      </div>
    );
  }
}
