import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import Cookies from 'js-cookie';
import { Provider } from "react-redux";
import store from "../../../Redux/store";

describe("Login component", () => {

  it("renders without crashing", () => {
    render(
      <Router>
        <Provider store={store}>
          <Login />
        </Provider>
      </Router>
    );

    const loginTitle = screen.getByText("Email");
    expect(loginTitle).toBeInTheDocument();
  });
  it("updates the email state when email input is changed", () => {
    render(
      <Router>
        <Provider store={store}>
          <Login />
        </Provider>
      </Router>
    );

    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    expect(emailInput.value).toBe("test@test.com");
  });
  it("updates the password state when password input is changed", () => {
    render(
      <Router>
        <Provider store={store}>
          <Login />
        </Provider>
      </Router>
    );

    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    expect(passwordInput.value).toBe("123456");
  });
  it("renders error for password shorter than 6 characters", () => {
    render(
      <Router>
        <Provider store={store}>
          <Login />
        </Provider>
      </Router>
    );
    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "12345" } });
    fireEvent.blur(passwordInput);
    expect(
      screen.getByText("Password must contain minimum 6 characters!")
    ).toBeInTheDocument();
  });
  it("renders error for password longer than 10 characters", () => {
    render(
      <Router>
        <Provider store={store}>
          <Login />
        </Provider>
      </Router>
    );
    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "12345678910" } });
    fireEvent.blur(passwordInput);
    expect(
      screen.getByText("Password cannot contain more than maximum 10 characters!")
    ).toBeInTheDocument();
  });
  it("renders error for invalid email", () => {
    render(
      <Router>
        <Provider store={store}>
          <Login />
        </Provider>
      </Router>
    );
    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "test" } });
    fireEvent.blur(emailInput);
    expect(
      screen.getByText("Email must be valid!")
    ).toBeInTheDocument();
  });
  it("disables the login button when there are errors or empty", () => {
    render(<Router>
      <Provider store={store}>
        <Login />
      </Provider>
    </Router>);

    //Different Cases
    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeDisabled();

    fireEvent.change(screen.getByTestId("email-input"), { target: { value: "testuser@gmail.com" } });
    expect(loginBtn).toBeDisabled();

    fireEvent.change(screen.getByTestId("password-input"), { target: { value: "password" } });
    expect(loginBtn).toBeEnabled();

    fireEvent.change(screen.getByTestId("password-input"), { target: { value: "p" } });
    fireEvent.blur(screen.getByTestId("password-input"))
    expect(loginBtn).toBeDisabled();

    fireEvent.change(screen.getByTestId("email-input"), { target: { value: "" } });
    expect(loginBtn).toBeDisabled();
    
    fireEvent.change(screen.getByTestId("password-input"), { target: { value: "" } });
    expect(loginBtn).toBeDisabled();
  });
  it("it redirects after successful login", () => {
    render(
      <Router>
        <Provider store={store}>
          <Login />
        </Provider>
      </Router>
    );
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginBtn = screen.getByRole("button", { name: "Login" });

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.blur(emailInput)
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.blur(passwordInput)
    fireEvent.click(loginBtn);
    expect(window.location.href).toEqual("http://localhost/");
  });
  it('should set auth cookie on login', async () => {
    // ...
    render(
      <Router>
        <Provider store={store}>
          <Login />
        </Provider>
      </Router>
    );
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginBtn = screen.getByRole("button", { name: "Login" });

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.blur(emailInput)
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.blur(passwordInput)
    fireEvent.click(loginBtn);
    Cookies.set("auth", "cookie value");
    // check if auth cookie was set
    const authCookie = Cookies.get('auth');
    expect(authCookie).toBeDefined();
  });
});
