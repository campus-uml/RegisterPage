import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { ThemeProvider, useTheme } from "../../ui/theme-provider";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  vi.stubGlobal("localStorage", {
    getItem: vi.fn((key) => {
      if (key === "vite-ui-theme") return "light";
      return null;
    }),
    setItem: vi.fn(),
    removeItem: vi.fn(),
  });
});

function ThemeTestComponent() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <p data-testid="theme">{theme}</p>
      <button onClick={() => setTheme("dark")}>Set Dark Theme</button>
    </div>
  );
}

describe("ThemeProvider", () => {
  test("se renderiza con el tema predeterminado", () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeTestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme").textContent).toBe("light");
  });

  test("cambia el tema al hacer clic en el botón", async () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeTestComponent />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: "Set Dark Theme" });
    await userEvent.click(button);

    expect(screen.getByTestId("theme").textContent).toBe("dark");
    expect(localStorage.setItem).toHaveBeenCalledWith("vite-ui-theme", "dark");
  });


  
});
