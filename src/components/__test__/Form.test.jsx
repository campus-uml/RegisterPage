import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "../Form";
import userEvent from "@testing-library/user-event";

describe("Form Component", () => {
  it("debe renderizar correctamente los campos y botones", () => {
    render(<Form />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/continue with email/i)).toBeInTheDocument();
    expect(screen.getByText(/continue with google/i)).toBeInTheDocument();
    expect(screen.getByText(/continue with apple/i)).toBeInTheDocument();
  });

  it("debe actualizar el valor del email cuando el usuario lo ingrese", async () => {
    render(<Form />);

    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, "test@example.com");
    expect(emailInput).toHaveValue("test@example.com");
  });
});
