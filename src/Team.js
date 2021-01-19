import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { team } from "./teamData";

let teamData = team;

function Team() {
  return (
    <div>
      <h1 role="heading">Team</h1>
      {teamData.map((m, index) => {
        return <Row data-testid={`user-${index}`}>{`${m.user_full_name}`}</Row>;
      })}
    </div>
  );
}

export default Team;
