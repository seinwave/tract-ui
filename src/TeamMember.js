import React from "react";
import dayjs from "dayjs";
import tony from "./images/tony.jpg";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function capitalizeMultiple(str) {
  return str.split(" ").map(capitalize).join(" ");
}

function TeamMember({ user, handleUserClick }) {
  return (
    <div
      data-testid="user-container"
      className="user-container"
      onClick={() => handleUserClick(user)}
    >
      <div className="user-attributes-container">
        <div className="profile-img-wrapper">
          <img
            height="200px"
            alt={`user-${user.user_full_name}`}
            className="profile-img"
            src={tony}
          ></img>
        </div>
        <div className="user-attributes-wrapper">
          <div className="user-headline-wrapper">
            <span data-testid="user-name" className="attribute user-name">
              {user.user_full_name}
            </span>
          </div>
          <span data-testid="user-role" className="attribute user-role">
            {user.user_role === "admin" ? "Administrator" : ""}
            {user.user_role === "dev" ? "Developer" : ""}
            {user.user_role === "pm" ? "Project Manager" : ""}
            {user.user_role === "sub" ? "Submitter" : ""}
          </span>
          <span data-testid="user-email" className="attribute user-email">
            {user.user_email}
          </span>
        </div>
      </div>
      <div className="user-activity-container">
        <div className="user-recent-activity">
          <span
            data-testid="user-most-recent-act"
            className="attribute user-activity"
          >
            {capitalizeMultiple(user.user_activity[0].activity)}
          </span>
          <span
            data-testid="user-activity-date"
            className="attribute user-activity-date"
          >
            {dayjs(user.user_activity[0].timestamp).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
