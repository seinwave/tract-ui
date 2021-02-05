import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TeamMember from "./TeamMember";
import TeamMemberModal from "./TeamMemberModal";
import NewMemberModal from "./NewMemberModal";

import "./Team.css";

function Team({ teamData }) {
  const [clickedUser, setClicked] = useState();
  const [addUser, setAdderClicked] = useState();

  function handleUserClick(user) {
    let settableUser = !clickedUser ? user : null;
    return setClicked(settableUser);
  }

  return (
    <div className="team">
      <h1>Team</h1>
      <div className="add-user-button-wrapper">
        <button onClick={() => setAdderClicked(!addUser)}>Add New</button>
      </div>
      {clickedUser ? (
        <TeamMemberModal user={clickedUser} handleUserClick={handleUserClick} />
      ) : null}

      {addUser ? <NewMemberModal /> : null}
      <div className={clickedUser ? "team-roster-blur" : "team-roster"}>
        {teamData.map((u) => {
          return (
            <TeamMember
              clickedUser={clickedUser}
              handleUserClick={handleUserClick}
              className="team-member"
              key={uuid()}
              user={u}
              data-testid={`user-${u.user_id}`}
            >{`${u.user_full_name}`}</TeamMember>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
