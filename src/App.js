import { React, Component } from "react";
import { v4 as uuid } from "uuid";

import "./index.scss";
import "./App.scss";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import ContactFilter from "./components/ContactFilter/ContactFilter";
import { ciEquals } from "./helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: "",
      number: "",
      filter: "",
    };
  }

  onFilterName = (event) => {
    this.setState({ filter: event.target.value });
  };

  addContact = ({ name, number }) => {
    this.setState((prevState) => {
      const contact = {
        id: uuid(),
        name,
        number,
      };

      if (
        prevState.contacts.some((element) =>
          ciEquals(element.name, contact.name)
        )
      ) {
        alert(`${contact.name} is already in contacts`);
        return;
      }

      return {
        contacts: [...prevState.contacts, contact],
        filter: "",
      };
    });
  };

  removeContact = (id) => {
    alert("Вы собираетесь удалить елемент с ID: " + id);
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((e) => e.id !== id),
        name: "",
        number: "",
        filter: "",
      };
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <div className="container">
        <div>
          <h2 className="h2">Phonebook</h2>
          <ContactForm onSubmit={this.addContact} />
        </div>
        <div>
          <h2 className="h2">Contacts</h2>
          <ContactFilter
            handleFilterName={this.onFilterName}
            filter={this.state.filter}
          />
          <ContactList
            contacts={filteredContacts}
            removeContact={this.removeContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
