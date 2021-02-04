import React from "react";
import PropTypes from "prop-types";
import tony from "./images/tony.jpg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { v4 as uuid } from "uuid";
import { capitalizeMultiple } from "./utils.js";
import "./TeamMemberModal.css";

dayjs.extend(relativeTime);

function TeamMemberModal({ user, handleUserClick }) {
  return (
    <div data-testid="user-profile-modal" className="user-profile-modal">
      <div className="modal-hero">
        <div className="modal-close-button-wrapper">
          <button
            className="modal-close-button"
            data-testid="modal-close-button"
            onClick={handleUserClick}
          >
            ×
          </button>
        </div>
        <div className="modal-banner">
          <div className="modal-background-image-wrapper"></div>
        </div>
        <div className="modal-profile-photo-wrapper">
          <img
            alt="tony-profile"
            src={tony}
            className="modal-profile-photo"
          ></img>
        </div>
        <div className="modal-profile-headline">
          <div data-testid="modal-profile-name" className="modal-profile-name">
            {user.user_full_name}
          </div>
          <div
            data-testid="modal-profile-title"
            className="modal-profile-title"
          >
            {" "}
            {user.user_role === "admin" ? "Administrator" : ""}
            {user.user_role === "dev" ? "Developer" : ""}
            {user.user_role === "pm" ? "Project Manager" : ""}
            {user.user_role === "sub" ? "Submitter" : ""}
          </div>
        </div>
      </div>
      <div className="modal-info-wrapper">
        <div
          data-testid="modal-profile-activity"
          className="modal-profile-activity"
        >
          <span className="modal-info-headline modal-headline">Activity</span>
          {user.user_activity.slice(0, 2).map((a) => {
            return (
              <div key={uuid()} className="modal-activity-report">
                <span
                  className={
                    a.activity.includes("delete")
                      ? "modal-activity-delete modal-item"
                      : a.activity.includes("add")
                      ? "modal-activity-add modal-item"
                      : "modal-activity modal-item"
                  }
                >
                  {capitalizeMultiple(a.activity)}
                </span>
                <span className="modal-activity modal-item modal-activity-timestamp">
                  {dayjs(a.timestamp).fromNow()}
                </span>
              </div>
            );
          })}
        </div>
        <div
          data-testid="modal-profile-projects"
          className="modal-profile-projects"
        >
          <span className="modal-info-headline modal-headline">Projects</span>
          <span className="modal-project modal-item">{user.project_name}</span>
        </div>
        <div
          data-testid="modal-profile-contact"
          className="modal-profile-contact"
        >
          <span className="modal-info-headline modal-headline">Contact</span>
          <span className="modal-item modal-email">{user.user_email}</span>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberModal;

TeamMemberModal.propTypes = {
  user: PropTypes.shape({
    project_name: PropTypes.string.isRequired,
    ticket_title: PropTypes.string.isRequired,
    user_activity: PropTypes.array.isRequired,
    user_created_date: PropTypes.string.isRequired,
    user_email: PropTypes.string.isRequired,
    user_full_name: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    user_role: PropTypes.string.isRequired,
  }),
};
