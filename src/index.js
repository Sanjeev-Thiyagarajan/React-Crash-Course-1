import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

import Tweets from "./components/Tweets";
import Contacts from "./components/Contacts";

const App = () => {
  const [contacts, changeContacts] = useState([]);

  const [newName, changeName] = useState("");
  const [newEmail, changeEmail] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    changeContacts([...contacts, { name: newName, email: newEmail }]);

    changeName("");
    changeEmail("");
  };

  const handleNameChange = event => {
    changeName(event.target.value);
  };

  const handleEmailChange = event => {
    changeEmail(event.target.value);
  };

  const handleDelete = email => {
    changeContacts(
      contacts.filter(el => {
        return el.email !== email;
      })
    );
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={newName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={newEmail}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Contact
        </button>
      </form>

      <Contacts handleDelete={handleDelete} contacts={contacts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
