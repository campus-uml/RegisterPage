import { render } from "@testing-library/react";
import { Separator } from "../../ui/separator"; 


describe("Pruebas en el componente Separator.tsx", () => {
  it("debe renderizar un separador horizontal por defecto", () => {
    const { container } = render(<Separator />);
    const separator = container.firstChild;
    expect(separator).toHaveClass("data-[orientation=horizontal]:h-px");
    expect(separator).toHaveClass("data-[orientation=horizontal]:w-full");
  });

  it("debe renderizar un separador vertical cuando la propiedad orientation sea vertical", () => {
    const { container } = render(<Separator orientation="vertical" />);
    const separator = container.firstChild;
    expect(separator).toHaveClass("data-[orientation=vertical]:h-full");
    expect(separator).toHaveClass("data-[orientation=vertical]:w-px");
  });

  it("debe aplicar clases adicionales a través de la propiedad className", () => {
    const { container } = render(<Separator className="custom-class" />);
    const separator = container.firstChild;
    expect(separator).toHaveClass("custom-class");
  });


});
