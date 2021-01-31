import { render, screen } from "@testing-library/react";
import Team from "./Team";

const team = [
  {
    user_id: 7,
    user_full_name: "Agatha Borpo",
    user_created_date: "2015-12-12 00:00:00",
    user_role: "admin",
    user_email: "a.Runcie.11@live.nl",
    ticket_title: "Too much gray",
    project_name: "Inventory tracker",
  },
  {
    user_id: 3,
    user_created_date: "2013-10-11 00:00:00",
    user_full_name: "Alice Beale",
    user_role: "dev",
    user_email: "Adelaide.Pickett.64@verizon.net",
    ticket_title: "I forgot where I parked",
    project_name: "Project management",
  },
];

it("renders a heading with 'team' in it", () => {
  render(<Team teamData={team} />);
  const header = screen.queryByRole(/heading/i);
  expect(header).not.toBeNull();
  expect(header).toHaveTextContent(/team/i);
});

it("renders a roster of team members, complete with images, roles, and emails", () => {
  render(<Team teamData={team} />);
  // checking for users
  const users = screen.queryAllByTestId(/^user-\d/i);
  console.log(users);
  expect(users).not.toBeNull();
  expect(users.length).toEqual(2);

  // checking for profile photos
  const userImages = screen.queryAllByAltText(/^user-\w*/i);
  expect(userImages).not.toBeNull();
  expect(userImages.length).toEqual(2);

  // checking for roles
  const userRoles = screen.queryAllByTestId(/user-role/i);
  expect(userRoles).not.toBeNull();
  expect(userRoles.length).toEqual(2);

  // checking for emails
  const userEmails = screen.queryAllByTestId(/user-email/i);
  expect(userEmails).not.toBeNull();
  expect(userEmails.length).toEqual(2);
  screen.debug();
});

it("converts admin roles to human readable titles", () => {
  render(<Team teamData={team} />);

  // checking for human-readable roles
  const userRoleNodes = screen.queryAllByTestId(/user-role/i);
  const userRoles = [];
  userRoleNodes.map((ur) => {
    return userRoles.push(ur.textContent);
  });
  const expectedRoles = ["Administrator", "Developer"];
  expect(userRoles).toEqual(expect.arrayContaining(expectedRoles));

  // checking for human-readable joined dates
  // not using this in the UI anymore -- but save it for
  // activityDates
  // const joinedDateNodes = screen.queryAllByTestId(/user-joined-date/i);
  // const joinedDates = [];
  // joinedDateNodes.map((ujd) => {
  //   return joinedDates.push(ujd.textContent);
  // });
  // const expectedJoinedDates = ["Joined 5 years ago", "Joined 7 years ago"];
  // expect(joinedDates).toEqual(expect.arrayContaining(expectedJoinedDates));
});
