import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewMemberModal from "./NewMemberModal";

const projects = [
  "Butt enhancement",
  "Wiener aligning",
  "Fart reduction",
  "Slime befriendship",
];

const tickets = [
  "Where am I parked?",
  "Not enough gray space",
  "Too much gray space",
  "The everglades",
];

it("has name and email fields we need", () => {
  render(<NewMemberModal />);
  const nameInput = screen.queryByTestId("new-user-name-input");
  expect(nameInput).not.toBeNull();
  const emailInput = screen.queryByTestId("new-user-email-input");
  expect(emailInput).not.toBeNull();
});

it("has a radio input for user roles", () => {
  render(<NewMemberModal />);
  const roleInput = screen.queryAllByTestId("new-user-role-input");
  expect(roleInput).not.toBeNull();

  const adminInput = screen.getByLabelText(/administrator/i);
  expect(adminInput).not.toBeNull();

  const pmInput = screen.getByLabelText(/project manager/i);
  expect(pmInput).not.toBeNull();

  const devInput = screen.getByLabelText(/developer/i);
  expect(devInput).not.toBeNull();

  const subInput = screen.getByLabelText(/submitter/i);
  expect(subInput).not.toBeNull();
});

it("has select dropdowns for projects and tickets", () => {
  render(<NewMemberModal projecs={projects} tickets={tickets} />);
  // project dropdown is present, and has the options we want
  const projectInput = screen.queryByTestId("new-user-project-input");
  expect(projectInput).not.toBeNull();
  const projectDropdown = within(projectInput).getByTestId("project-dropdown");
  expect(projectDropdown).not.toBeNull();

  // ticket dropdown is present, and has the options we want
  const ticketInput = screen.queryByTestId("new-user-ticket-input");
  expect(ticketInput).not.toBeNull();
});
