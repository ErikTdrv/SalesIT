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
  })
  
});
