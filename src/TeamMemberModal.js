import React from "react";

function TeamMemberModal({ user }) {
  return <div data-testid="user-profile-modal">{user.user_full_name}</div>;
}

export default TeamMemberModal;
