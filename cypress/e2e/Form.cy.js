describe("Pruebas en el componente Form", () => {
  beforeEach(() => {
    cy.visit("/"); 
  });
it("debería renderizar el formulario", () => {
    cy.get('[data-testid="form"]').should("be.visible");
});

it("debería permitir escribir en el campo de correo electrónico", () => {
    cy.get("#email")
        .type("test@example.com")
        .should("have.value", "test@example.com");
});


  it('debería tener un botón "Continuar con el correo electrónico', () => {
    cy.contains("button", "Continue with Email").should("be.visible");
  });

  it('Deberia haber un boton de inicio de sesion con google', () => {
    cy.contains("button", "Continue with Google").should("be.visible");
  });

  it('Deberia haber un boton de inicio de sesion con Apple', () => {
    cy.contains("button", "Continue with Apple").should("be.visible");
  });

  it("Deberia haber un link para ir a login", () => {
    cy.contains("a", "Login").should("be.visible");
  });
});
