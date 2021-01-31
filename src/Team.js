import React from "react";
import { v4 as uuid } from "uuid";
import TeamMember from "./TeamMember";
import "./Team.css";

function Team({ teamData }) {
  return (
    <div className="team">
      <h1>Team</h1>
      <div className="team-roster">
        {teamData.map((u) => {
          return (
            <TeamMember
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
