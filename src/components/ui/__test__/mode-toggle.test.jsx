import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { ModeToggle } from "../../ui/mode-toggle";
import { useTheme } from "../../ui/theme-provider";

vi.mock("../../ui/theme-provider", async () => {
  return {
    useTheme: vi.fn(),
  };
});

describe("Pruebas en el componente ModeToggle.tsx", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("debe cambiar el tema al hacer clic en el botón", () => {
    const setThemeMock = vi.fn();

    useTheme.mockReturnValue({
      theme: "light",
      setTheme: setThemeMock,
    });

    render(<ModeToggle />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setThemeMock).toHaveBeenCalledWith("dark");
  });

  it("debe mostrar el icono de luna si el tema es light", () => {
    useTheme.mockReturnValue({
      theme: "light",
      setTheme: vi.fn(),
    });

    render(<ModeToggle />);

    const icon = screen.getByTestId("moon-icon");
    expect(icon).toBeInTheDocument();
  });

  it("debe mostrar el icono de sol si el tema es dark", () => {
    useTheme.mockReturnValue({
      theme: "dark",
      setTheme: vi.fn(),
    });

    render(<ModeToggle />);

    const icon = screen.getByTestId("sun-icon");
    expect(icon).toBeInTheDocument();
  });
});
