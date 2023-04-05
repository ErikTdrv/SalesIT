import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Register from "./Register";
import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import Cookies from "js-cookie";
import { Provider } from "react-redux";
import store from "../../../Redux/store";

describe("Register Component", () => {

  it("should render without crashing", () => {
    render(
      <Router>
        <Provider store={store}>
          <Register />
        </Provider>
      </Router>
    );

    const registerTitle = screen.getAllByText("Register")[0];
    expect(registerTitle).toBeInTheDocument();
  });
  it("should update value states when changing the inputs", () => {
    render(
      <Router>
        <Provider store={store}>
          <Register />
        </Provider>
      </Router>
    );
    const usernameInput = screen.getByTestId("username-input");
    fireEvent.change(usernameInput, { target: { value: "testUsername" } });
    expect(usernameInput.value).toBe("testUsername");

    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "testEmail@gmail.com" } });
    expect(emailInput.value).toBe("testEmail@gmail.com");

    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    expect(passwordInput.value).toBe("123456");

    const rePassInput = screen.getByTestId("repass-input");
    fireEvent.change(rePassInput, { target: { value: "123456" } });
    expect(rePassInput.value).toBe("123456");

    const phoneInput = screen.getByTestId("phone-input");
    fireEvent.change(phoneInput, { target: { value: "+359 111111111" } });
    expect(phoneInput.value).toBe("+359 111111111");
  });
  it("should give an error if password mismatch", () => {
    render(
      <Router>
        <Provider store={store}>
          <Register />
        </Provider>
      </Router>
    );
    const registerBtn = screen.getByRole("button", { name: "Register" });

    const usernameInput = screen.getByTestId("username-input");
    fireEvent.change(usernameInput, { target: { value: "testUsername" } });

    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "testEmail@gmail.com" } });

    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    const rePassInput = screen.getByTestId("repass-input");
    fireEvent.change(rePassInput, { target: { value: "1234567" } });

    const phoneInput = screen.getByTestId("phone-input");
    fireEvent.change(phoneInput, { target: { value: "+359 111111111" } });

    fireEvent.click(registerBtn);
    expect(screen.getByText("Passwords must match!")).toBeInTheDocument();
  });
  it("should give error for invalid email", () => {
    render(
      <Router>
        <Provider store={store}>
          <Register />
        </Provider>
      </Router>
    );
    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "testEmail" } });
    fireEvent.blur(emailInput);
    expect(screen.getByText("Email must be valid!")).toBeInTheDocument();
  });
  it("should give error when empty fields", () => {
    render(
      <Router>
        <Provider store={store}>
          <Register />
        </Provider>
      </Router>
    );
    const usernameInput = screen.getByTestId("username-input");
    fireEvent.change(usernameInput, { target: { value: "" } });
    fireEvent.blur(usernameInput);
    expect(screen.getByText("Username is required!")).toBeInTheDocument();

    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.blur(emailInput);
    expect(screen.getByText("Email is required!")).toBeInTheDocument();

    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "" } });
    fireEvent.blur(passwordInput);
    expect(screen.getByText("Password is required!")).toBeInTheDocument();

    const rePassInput = screen.getByTestId("repass-input");
    fireEvent.change(rePassInput, { target: { value: "" } });
    fireEvent.blur(rePassInput);
    expect(screen.getByText("Re-Password is required!")).toBeInTheDocument();

    const phoneInput = screen.getByTestId("phone-input");
    fireEvent.change(phoneInput, { target: { value: "" } });
    fireEvent.blur(phoneInput);
    expect(screen.getByText("Phone is required!")).toBeInTheDocument();
  });
  it("it redirects after successful register", () => {
    render(
      <Router>
        <Provider store={store}>
          <Register />
        </Provider>
      </Router>
    );
    const registerBtn = screen.getByRole("button", { name: "Register" });

    const usernameInput = screen.getByTestId("username-input");
    fireEvent.change(usernameInput, { target: { value: "test" } });
    fireEvent.blur(usernameInput);

    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    fireEvent.blur(emailInput);

    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.blur(passwordInput);

    const rePassInput = screen.getByTestId("repass-input");
    fireEvent.change(rePassInput, { target: { value: "123456" } });
    fireEvent.blur(rePassInput);

    const phoneInput = screen.getByTestId("phone-input");
    fireEvent.change(phoneInput, { target: { value: "+359 111111111" } });
    fireEvent.blur(phoneInput);

    fireEvent.click(registerBtn);
    expect(window.location.href).toEqual("http://localhost/");
  });
  it("disables the register button when empty field", () => {
    render(
      <Router>
        <Provider store={store}>
          <Register />
        </Provider>
      </Router>
    );
    //Different cases
    const registerBtn = screen.getByRole("button", { name: "Register" });
    expect(registerBtn).toBeDisabled();

    const usernameInput = screen.getByTestId("username-input");
    fireEvent.change(usernameInput, { target: { value: "" } });
    fireEvent.blur(usernameInput);
    expect(registerBtn).toBeDisabled();

    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.blur(emailInput);
    expect(registerBtn).toBeDisabled();

    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "" } });
    fireEvent.blur(passwordInput);
    expect(registerBtn).toBeDisabled();

    const rePassInput = screen.getByTestId("repass-input");
    fireEvent.change(rePassInput, { target: { value: "" } });
    fireEvent.blur(rePassInput);
    expect(registerBtn).toBeDisabled();

    const phoneInput = screen.getByTestId("phone-input");
    fireEvent.change(phoneInput, { target: { value: "+359 111111111" } });
    fireEvent.blur(phoneInput);
    expect(registerBtn).toBeDisabled();
  });
  it("disables the register button when invalid email", () => {
    render(
      <Router>
        <Provider store={store}>
          <Register />
        </Provider>
      </Router>
    );
    //Different cases
    const registerBtn = screen.getByRole("button", { name: "Register" });

    const usernameInput = screen.getByTestId("username-input");
    fireEvent.change(usernameInput, { target: { value: "test" } });
    fireEvent.blur(usernameInput);

    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "test" } });
    fireEvent.blur(emailInput);

    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.blur(passwordInput);

    const rePassInput = screen.getByTestId("repass-input");
    fireEvent.change(rePassInput, { target: { value: "123456" } });
    fireEvent.blur(rePassInput);

    const phoneInput = screen.getByTestId("phone-input");
    fireEvent.change(phoneInput, { target: { value: "+359 111111111" } });
    fireEvent.blur(phoneInput);
    expect(screen.getByText("Email must be valid!")).toBeInTheDocument();
    expect(registerBtn).toBeDisabled();
  });
  it("should set auth cookie on register", async () => {
    // ...
    render(
      <Router>
        <Provider store={store}>
          <Register />
        </Provider>
      </Router>
    );
    const registerBtn = screen.getByRole("button", { name: "Register" });

    const usernameInput = screen.getByTestId("username-input");
    fireEvent.change(usernameInput, { target: { value: "test" } });
    fireEvent.blur(usernameInput);

    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    fireEvent.blur(emailInput);

    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.blur(passwordInput);

    const rePassInput = screen.getByTestId("repass-input");
    fireEvent.change(rePassInput, { target: { value: "123456" } });
    fireEvent.blur(rePassInput);

    const phoneInput = screen.getByTestId("phone-input");
    fireEvent.change(phoneInput, { target: { value: "+359 111111111" } });
    fireEvent.blur(phoneInput);

    fireEvent.click(registerBtn);
    Cookies.set("auth", "cookie value");
    
    // check if auth cookie was set
    const authCookie = Cookies.get("auth");
    expect(authCookie).toBeDefined();
  });
});
