import { React, Component } from "react";
import { v4 as uuidv4 } from "uuid";

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

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onFilterName = (event) => {
    this.setState({ filter: event.target.value });
  };

  onChangeNumber = (event) => {
    this.setState({ number: event.target.value });
  };

  addContact = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      const contact = {
        id: uuidv4(),
        name: prevState.name,
        number: prevState.number,
      };

      if (prevState.contacts.some((e) => ciEquals(e.name, contact.name))) {
        alert(`${contact.name} is already in contacts`);
        return;
      }

      return {
        contacts: [...prevState.contacts, contact],
        name: "",
        number: "",
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
    const {
      addContact,
      onChangeName,
      onChangeNumber,
      onFilterName,
      removeContact,
    } = this.props;
    return (
      <div className="container">
        <div>
          <h2 className="h2">Phonebook</h2>
          <ContactForm
            addContact={addContact}
            handleNameInput={onChangeName}
            handleNumberInput={onChangeNumber}
            name={this.state.name}
            number={this.state.number}
          />
        </div>
        <div>
          <h2 className="h2">Contacts</h2>
          <ContactFilter
            handleFilterName={onFilterName}
            filter={this.state.filter}
          />
          <ContactList
            contacts={filteredContacts}
            removeContact={removeContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
