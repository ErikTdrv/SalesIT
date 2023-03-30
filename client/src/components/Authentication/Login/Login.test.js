import {
  fireEvent,
  getByLabelText,
  render,
  screen,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Login from "./Login";

describe("Login component", () => {
  const mockUserAuth = {
    userAuth: false,
  };

  it("renders without crashing", () => {
    render(
      <Router>
        <AuthContext.Provider value={mockUserAuth}>
          <Login />
        </AuthContext.Provider>
      </Router>
    );

    const loginTitle = screen.getByText("Email");
    expect(loginTitle).toBeInTheDocument();
  });
  it("updates the email state when email input is changed", () => {
    render(
      <Router>
        <AuthContext.Provider value={mockUserAuth}>
          <Login />
        </AuthContext.Provider>
      </Router>
    );

    const emailInput = screen.getByTestId("email-input");
    console.log(emailInput)
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    expect(emailInput.value).toBe("test@test.com");
  });
});
