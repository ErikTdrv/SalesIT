import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Redux/store";
import Home from "./Home";


describe("Home component", () => {
  it("should render without crashing", () => {
    render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    );
    const title = screen.getByText("From laptops to accessories, we have everything you need to stay on top of your tech game - shop with us today!");
    expect(title).toBeInTheDocument();
  });
});
