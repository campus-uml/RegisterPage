import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from "../dropdown-menu";

describe("Pruebas en el componente DropdownMenu", () => {
    it("debería renderizar el botón de activación", () => {
        render(
            <DropdownMenu>
                <DropdownMenuTrigger>Abrir Menú</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Elemento 1</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        expect(screen.getByText("Abrir Menú")).toBeInTheDocument();
    });

    it("debería abrir el menú cuando se hace clic en el activador", async () => {
        const user = userEvent.setup();

        render(
            <DropdownMenu>
                <DropdownMenuTrigger>Abrir Menú</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Elemento 1</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        const trigger = screen.getByText("Abrir Menú");
        await user.click(trigger);

        expect(screen.getByText("Elemento 1")).toBeInTheDocument();
    });

    it("debería renderizar los elementos del menú con las clases correctas", () => {
        render(
            <DropdownMenu open>
                <DropdownMenuTrigger>Abrir Menú</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Elemento Regular</DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                        Elemento Destructivo
                    </DropdownMenuItem>
                    <DropdownMenuItem inset>Elemento Insertado</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        const regularItem = screen.getByText("Elemento Regular");
        const destructiveItem = screen.getByText("Elemento Destructivo");
        const insetItem = screen.getByText("Elemento Insertado");

        expect(regularItem).toHaveAttribute("data-variant", "default");
        expect(destructiveItem).toHaveAttribute("data-variant", "destructive");
        expect(insetItem).toHaveAttribute("data-inset", "true");
    });

    it("debería renderizar los elementos de casilla de verificación correctamente", async () => {
        const onCheckedChange = vi.fn();
        const user = userEvent.setup();

        render(
            <DropdownMenu open>
                <DropdownMenuTrigger>Abrir Menú</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuCheckboxItem
                        checked={false}
                        onCheckedChange={onCheckedChange}
                    >
                        Elemento de Casilla de Verificación
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        const checkboxItem = screen.getByText("Elemento de Casilla de Verificación");
        await user.click(checkboxItem);

        expect(onCheckedChange).toHaveBeenCalledWith(true);
    });

    it("debería renderizar los elementos del grupo de radio correctamente", async () => {
        const onValueChange = vi.fn();
        const user = userEvent.setup();

        render(
            <DropdownMenu open>
                <DropdownMenuTrigger>Abrir Menú</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuRadioGroup value="option1" onValueChange={onValueChange}>
                        <DropdownMenuRadioItem value="option1">
                            Opción 1
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="option2">
                            Opción 2
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        const option2 = screen.getByText("Opción 2");
        await user.click(option2);

        expect(onValueChange).toHaveBeenCalledWith("option2");
    });

    it("debería renderizar la etiqueta y el separador correctamente", () => {
        render(
            <DropdownMenu open>
                <DropdownMenuTrigger>Abrir Menú</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Etiqueta del Menú</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Elemento después del separador</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        expect(screen.getByText("Etiqueta del Menú")).toBeInTheDocument();
        expect(
            document.querySelector('[data-slot="dropdown-menu-separator"]')
        ).toBeInTheDocument();
    });

    it("debería renderizar el submenú correctamente", async () => {
        const user = userEvent.setup();

        render(
            <DropdownMenu open>
                <DropdownMenuTrigger>Abrir Menú</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Elemento 1</DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Submenú</DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>Elemento del Submenú</DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        const subTrigger = screen.getByText("Submenú");
        await user.click(subTrigger);

        expect(screen.getByText("Elemento del Submenú")).toBeInTheDocument();
    });
});
