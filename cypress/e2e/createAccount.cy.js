describe('CreateAccount Page', () => {
  beforeEach(() => {
    cy.visit('/create-account');
  });


  it('Deberia mostrar un Titulo', () => {
    cy.contains('h1', 'Create account').should('be.visible');
  });

  it('Deberia mostrar un subtitulo', () => {
    cy.contains('p', 'Lorem ipsum dolor sit amet').should('be.visible');
  });
});