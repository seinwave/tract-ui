import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Team from "./Team";

const team = [
  {
    user_id: 7,
    user_full_name: "Agatha Borpo",
    user_created_date: "2015-12-12 00:00:00",
    user_role: "admin",
    user_activity: [
      { timestamp: "2021-1-12 00:00:00", activity: "delete comment" },
      { timestamp: "2021-1-21 00:00:00", activity: "add attachment" },
    ],
    user_email: "a.Runcie.11@live.nl",
    ticket_title: "Too much gray",
    project_name: "Inventory tracker",
  },
  {
    user_id: 3,
    user_created_date: "2013-10-11 00:00:00",
    user_full_name: "Alice Beale",
    user_activity: [
      { timestamp: "2021-1-12 00:00:00", activity: "delete comment" },
      { timestamp: "2021-1-21 00:00:00", activity: "add attachment" },
    ],
    user_role: "dev",
    user_email: "Adelaide.Pickett.64@verizon.net",
    ticket_title: "I forgot where I parked",
    project_name: "Project management",
  },
  {
    user_id: 11,
    user_full_name: "Willie Thornton",
    user_role: "pm",
    user_activity: [
      { timestamp: "2021-1-12 00:00:00", activity: "delete comment" },
      { timestamp: "2021-1-21 00:00:00", activity: "add attachment" },
    ],
    user_created_date: "2015-12-12 00:00:00",
    user_email: "mthronadon@zasdl.com",
    ticket_title: "asdad",
    project_name: "Landing page",
  },
  {
    user_id: 5,
    user_full_name: "Horny Winklestein",
    user_role: "sub",
    user_activity: [
      { timestamp: "2021-1-12 00:00:00", activity: "delete comment" },
      { timestamp: "2021-1-21 00:00:00", activity: "add attachment" },
    ],
    user_created_date: "2015-12-12 00:00:00",
    user_email: "Clara.Travers.15@blueyonder.co.uk",
    ticket_title: "Don't listen to ticket #7",
    project_name: "Inventory tracker",
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
  const users = screen.queryAllByTestId(/^user-container/i);
  expect(users).not.toBeNull();
  expect(users.length).toEqual(4);

  // checking for profile photos
  const userImages = screen.queryAllByAltText(/^user-\w*/i);
  expect(userImages).not.toBeNull();
  expect(userImages.length).toEqual(4);

  // checking for roles
  const userRoles = screen.queryAllByTestId(/user-role/i);
  expect(userRoles).not.toBeNull();
  expect(userRoles.length).toEqual(4);

  // checking for emails
  const userEmails = screen.queryAllByTestId(/user-email/i);
  expect(userEmails).not.toBeNull();
  expect(userEmails.length).toEqual(4);
});

it("converts admin roles to human readable titles", () => {
  render(<Team teamData={team} />);

  // checking for human-readable roles
  const userRoleNodes = screen.queryAllByTestId(/user-role/i);
  const userRoles = [];
  userRoleNodes.map((ur) => {
    return userRoles.push(ur.textContent);
  });
  const expectedRoles = [
    "Administrator",
    "Project Manager",
    "Submitter",
    "Developer",
  ];
  expect(userRoles).toEqual(expect.arrayContaining(expectedRoles));
});

it("shows the user's most recent activity", () => {
  render(<Team teamData={team} />);

  // checking for most recent activity
  const activityNodes = screen.queryAllByTestId(/user-most-recent-act/i);
  const activities = [];
  activityNodes.map((node) => {
    return activities.push(node.textContent);
  });
  const expectedActivities = ["Delete Comment", "Delete Comment"];
  expect(activities).toEqual(expect.arrayContaining(expectedActivities));

  // checking for human-readable dates
  const activityDates = screen.queryAllByTestId(/user-activity-date/i);
  const dates = [];
  activityDates.map((date) => {
    return dates.push(date.textContent);
  });
  const expectedDates = ["20 days ago", "20 days ago"];
  expect(dates).toEqual(expect.arrayContaining(expectedDates));
});

it("clicking team member container exposes, then hides, modal profile", async () => {
  render(<Team teamData={team} />);

  // 1st profile click exposes modal?
  let users = screen.getAllByTestId(/user-container/i);
  userEvent.click(users[0]);
  await waitFor(() => {
    let modal = screen.getByTestId(/user-profile-modal/i);
    expect(modal).toHaveTextContent("Agatha Borpo");
  });

  // 2nd profile click hides modal?
  users = screen.getAllByTestId(/user-container/i);
  userEvent.click(users[0]);
  await waitFor(() => {
    let modal = screen.queryByTestId(/user-profile-modal/i);
    expect(modal).toBeNull();
  });
});
