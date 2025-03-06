import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Header } from "../Header";

describe("Pruebas en el componente Header.tsx", () => {
  it("Deberia renderizar botones menu y user.", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /user/i })).toBeInTheDocument();
  });
});
