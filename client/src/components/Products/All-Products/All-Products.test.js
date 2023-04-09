import { BrowserRouter as Router } from "react-router-dom";
import AllItems from "./All-Products";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../Redux/store";


describe("All Products component", () => {
  it("should render without crashing", () => {
    render(
      <Router>
        <Provider store={store}>
          <AllItems />
        </Provider>
      </Router>
    );
    const title = screen.getByTestId("loader");
    expect(title).toBeInTheDocument();
  });
});
