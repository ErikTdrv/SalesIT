import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Register from "./Register";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe("Register Component", () => {
  const mockUserAuth = {
    userAuth: false,
  };
  it("should render without crashing", () => {
    render(
      <Router>
        <AuthContext.Provider value={mockUserAuth}>
          <Register />
        </AuthContext.Provider>
      </Router>
    );

    const registerTitle = screen.getAllByText("Register")[0];
    expect(registerTitle).toBeInTheDocument();
  });
  it("should update value states when changing the inputs", () => {
    render(
      <Router>
        <AuthContext.Provider value={mockUserAuth}>
          <Register />
        </AuthContext.Provider>
      </Router>
    );
    const usernameInput = screen.getByTestId('username-input')
    fireEvent.change(usernameInput, { target: { value: "testUsername"}})
    expect(usernameInput.value).toBe("testUsername")

    const emailInput = screen.getByTestId('email-input');
    fireEvent.change(emailInput, {target: { value: 'testEmail@gmail.com'}});
    expect(emailInput.value).toBe('testEmail@gmail.com')

    const passwordInput = screen.getByTestId('password-input');
    fireEvent.change(passwordInput, {target: { value: '123456'}});
    expect(passwordInput.value).toBe('123456')

    const rePassInput = screen.getByTestId('repass-input');
    fireEvent.change(rePassInput, {target: { value: '123456'}});
    expect(rePassInput.value).toBe('123456')

    const phoneInput = screen.getByTestId('phone-input');
    fireEvent.change(phoneInput, {target: { value: '+359 111111111'}});
    expect(phoneInput.value).toBe('+359 111111111')
  });
});
