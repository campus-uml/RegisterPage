import { render, screen } from "@testing-library/react";
import CreateAccount from "../CreateAccount";
import { vi } from "vitest";

vi.mock("../Header", () => ({
  Header: () => <div data-testid="header">Mocked Header</div>,
}));

vi.mock("../layout/Form", () => ({
  Form: () => <div data-testid="form">Mocked Form</div>,
}));

describe("Pruebas en el componente CreateAccount", () => {
  it("debe renderizar correctamente el título y subtítulo", () => {
    render(<CreateAccount />);

    expect(screen.getByText("Create account")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
  });

  it("debe renderizar el Header", () => {
    render(<CreateAccount />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("debe renderizar el Form", () => {
    render(<CreateAccount />);
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });
});
