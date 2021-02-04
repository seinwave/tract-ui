import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TeamMemberModal from "./TeamMemberModal";

const user = {
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
};

it("has relevant features", async () => {
  render(<TeamMemberModal user={user} />);
  let modalName = screen.getByTestId(/modal-profile-name/i);
  expect(modalName).toHaveTextContent("Agatha Borpo");
  let modalTitle = screen.getByTestId(/modal-profile-title/i);
  expect(modalTitle).toHaveTextContent("Administrator");
  let modalActivity = screen.getByTestId(/modal-profile-activity/i);
  expect(modalActivity).toHaveTextContent(/delete comment/i);
  let modalProjects = screen.getByTestId(/modal-profile-projects/i);
  expect(modalProjects).toHaveTextContent(/inventory tracker/i);
  let modalContact = screen.getByTestId(/modal-profile-contact/i);
  expect(modalContact).toHaveTextContent("a.Runcie.11@live.nl");
});
