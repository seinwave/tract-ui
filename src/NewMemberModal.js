import React from "react";
import PropTypes from "prop-types";
import tony from "./images/tony.jpg";
import { v4 as uuid } from "uuid";
import "./NewMemberModal.css";

function NewMemberModal() {
  return (
    <div className="new-modal" data-testid="new-modal">
      <h1>Add new memba</h1>
      <input
        placeholder="name"
        type="text"
        data-testid="new-user-name-input"
      ></input>
      <input
        placeholder="email"
        type="email"
        data-testid="new-user-email-input"
      ></input>
      <div className="new-user-role-input">
        <input
          aria-labelledby="admin-label"
          type="checkbox"
          data-testid="new-user-role-input-admin"
          name="admin"
          id="admin-role"
          value="Administrator"
        />
        <label id="admin-label" htmlFor="admin">
          Administrator
        </label>
        <input
          aria-labelledby="pm-label"
          type="checkbox"
          data-testid="new-user-role-input-pm"
          name="pm"
          id="pm-role"
          value="Project Manager"
        />
        <label id="pm-label" htmlFor="pm">
          Project Manager
        </label>
        <input
          type="checkbox"
          aria-labelledby="dev-label"
          data-testid="new-user-role-input-dev"
          name="dev"
          id="dev-role"
          value="Developer"
        />
        <label id="dev-label" htmlFor="dev">
          Developer
        </label>
        <input
          type="checkbox"
          aria-labelledby="sub-label"
          data-testid="new-user-role-input-sub"
          name="sub"
          id="sub-role"
          value="Submitter"
        />
        <label id="sub-label" htmlFor="sub">
          {" "}
          Submitter
        </label>
      </div>
      <div
        data-testid="new-user-project-input"
        className="new-user-project-input"
      >
        <select
          className="project-dropdown"
          data-testid="project-dropdown"
        ></select>
      </div>
      <div
        data-testid="new-user-ticket-input"
        className="new-user-ticket-input"
      ></div>
    </div>
  );
}

export default NewMemberModal;
