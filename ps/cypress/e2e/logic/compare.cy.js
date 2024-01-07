describe('Choice Manager Functionality', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      // Assume there is a way to navigate to the Choice Manager component
    });
  
    it('Should allow adding a choice', () => {
      cy.get('input[type="text"]').type('New Choice');
      cy.get('button').contains('Add Choice').click();
      cy.get('.choice-list').should('contain', 'New Choice');
    });
  
    it('Should not allow adding duplicate choices', () => {
      cy.get('input[type="text"]').type('Duplicate Choice');
      cy.get('button').contains('Add Choice').click();
      cy.get('input[type="text"]').type('Duplicate Choice');
      cy.get('button').contains('Add Choice').click();
      cy.get('.error-message').should('contain', 'Duplicate choices are not allowed');
    });
  
    // Additional tests for Choice Manager functionality
  });
  
  describe('Comparison Manager Functionality', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      // Add steps to navigate to the Comparison Manager component if needed
    });
  
    it('Should allow selecting a choice', () => {
      // Add steps to test selecting a choice
      // Example: cy.get('.comparison-item').first().click();
    });
  
    // Additional tests for Comparison Manager functionality
  });