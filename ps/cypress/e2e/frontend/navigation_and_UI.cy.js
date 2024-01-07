describe('Navigation and UI Interactions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('Should display the main heading', () => {
      cy.get('h1').should('contain', 'Ranking Game');
    });
  
    it('Should have a submit button', () => {
      cy.get('button').should('contain', 'Submit');
    });
  
    // Additional tests for navigation and UI interactions
  });