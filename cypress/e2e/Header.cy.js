describe("Componente Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("debe renderizar el botón de menú", () => {
    cy.get("button").contains("Menu").should("exist");

    cy.get("button").find("svg").should("have.class", "w-6 h-6");
  });

  it("debe renderizar el botón de usuario con el icono correcto", () => {
    cy.get("button").contains("User").should("exist");

    cy.get("button").find("svg").should("have.class", "w-6 h-6");
  });

  it("debe cambiar de icono al hacer clic en el botón de modo", () => {
    cy.get('button[data-testid="mode-toggle-button"]').should("exist").click();
    cy.get('button[data-testid="mode-toggle-button"]')
      .find("svg")
      .should("have.class", "w-6 h-6");
  });
});
