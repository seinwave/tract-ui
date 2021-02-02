import React from "react";
import tony from "./images/tony.jpg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { capitalize, capitalizeMultiple } from "./utils.js";
import "./TeamMemberModal.css";

dayjs.extend(relativeTime);

function TeamMemberModal({ user }) {
  return (
    <div data-testid="user-profile-modal" className="user-profile-modal">
      <div className="modal-hero">
        <div className="modal-banner">
          <div className="modal-background-image-wrapper"></div>
          <div className="modal-closeout-button"></div>
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
          <span className="modal-activity-headline">Activity</span>
          {user.user_activity.slice(0, 2).map((a) => {
            return (
              <div className="modal-activity-report">
                <span className="modal-activity">
                  {capitalizeMultiple(a.activity)}
                </span>
                <span className="modal-activity">
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
          <span className="modal-activity-headline">Projects</span>
          <span className="modal-activity">{user.project_name}</span>
        </div>
        <div
          data-testid="modal-profile-contact"
          className="modal-profile-contact"
        >
          <span className="modal-activity-headline">Contact</span>
          {user.user_email}
        </div>
      </div>
    </div>
  );
}

export default TeamMemberModal;
