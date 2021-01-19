import { render, screen } from "@testing-library/react";
import Team from "./Team";

it("renders a heading with 'team' in it", () => {
  render(<Team />);
  const header = screen.queryByRole(/heading/i);
  expect(header).not.toBeNull();
  expect(header).toHaveTextContent(/team/i);
});

it("renders a list of all team members", () => {
  render(<Team />);
  const users = screen.queryByTestId(/^user-\w*/i);
  expect(users).not.toBeNull();
  //expect(users.length).toEqual(8);
});
