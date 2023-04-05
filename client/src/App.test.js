import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store from "./Redux/store";
import { Provider } from "react-redux";

test("renders learn react link", () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
  const linkElement = screen.getByText("All Products");
  expect(linkElement).toBeInTheDocument();
});
