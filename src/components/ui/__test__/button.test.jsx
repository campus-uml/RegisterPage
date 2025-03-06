import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Button } from "../button"

describe("Componente Button", () => {
    it("se renderiza con variante y tamaño predeterminados", () => {
        render(<Button>Default Button</Button>)
        const button = screen.getByRole("button", { name: /default button/i })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass("bg-primary text-primary-foreground")
    })

    it("se renderiza con variante destructiva", () => {
        render(<Button variant="destructive">Destructive Button</Button>)
        const button = screen.getByRole("button", { name: /destructive button/i })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass("bg-destructive text-white")
    })

    it("se renderiza con variante de contorno", () => {
        render(<Button variant="outline">Outline Button</Button>)
        const button = screen.getByRole("button", { name: /outline button/i })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass("border border-input bg-background")
    })

    it("se renderiza con variante secundaria", () => {
        render(<Button variant="secondary">Secondary Button</Button>)
        const button = screen.getByRole("button", { name: /secondary button/i })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass("bg-secondary text-secondary-foreground")
    })

    it("se renderiza con variante fantasma", () => {
        render(<Button variant="ghost">Ghost Button</Button>)
        const button = screen.getByRole("button", { name: /ghost button/i })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass("hover:bg-accent hover:text-accent-foreground")
    })

    it("se renderiza con variante de enlace", () => {
        render(<Button variant="link">Link Button</Button>)
        const button = screen.getByRole("button", { name: /link button/i })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass("text-primary underline-offset-4")
    })

    it("se renderiza con tamaño pequeño", () => {
        render(<Button size="sm">Small Button</Button>)
        const button = screen.getByRole("button", { name: /small button/i })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass("h-8 rounded-md gap-1.5 px-3")
    })

    it("se renderiza con tamaño grande", () => {
        render(<Button size="lg">Large Button</Button>)
        const button = screen.getByRole("button", { name: /large button/i })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass("h-10 rounded-md px-6")
    })

    it("se renderiza con tamaño de icono", () => {
        render(<Button size="icon">Icon Button</Button>)
        const button = screen.getByRole("button", { name: /icon button/i })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass("size-9")
    })

    it("se renderiza como componente hijo", () => {
        render(
            <Button asChild>
                <a href="/test">Child Button</a>
            </Button>
        )
        const button = screen.getByRole("link", { name: /child button/i })
        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute("href", "/test")
    })
})
