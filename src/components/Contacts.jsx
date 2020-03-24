import React from "react";

const Contacts = props => {
  return (
    <div className="list-group">
      {props.contacts.map(el => {
        return (
          <li className="list-group-item">
            {el.name} {el.email}
            <button
              onClick={() => props.handleDelete(el.email)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Contacts;
