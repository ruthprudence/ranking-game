import ChoiceManagerPage from '../pageObjects/ChoiceManagerPage';

describe('Choice Manager Functionality', () => {
  const page = new ChoiceManagerPage();

  beforeEach(() => {
    page.visit();
  });

  it('Should allow adding a choice', () => {
    page.addChoice('New Choice');
    cy.get('.choice-list').should('contain', 'New Choice');
  });

  // Additional tests...
});


describe('Choice Manager Functionality', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      // Add navigation to Choice Manager if needed
    });
  
    it('Should allow adding a choice', () => {
      cy.get('input[type="text"]').should('exist').and('be.visible').then(($input) => {
        cy.wrap($input).type('New Choice');
        cy.get('button').contains('Add Choice').should('exist').and('be.visible').click();
        cy.get('.choice-list').should('contain', 'New Choice');
      });
    });
  
    it('Should not allow adding duplicate choices', () => {
      cy.get('input[type="text"]').should('exist').and('be.visible').type('Duplicate Choice');
      cy.get('button').contains('Add Choice').should('exist').and('be.visible').click();
      cy.get('input[type="text"]').clear().should('exist').and('be.visible').type('Duplicate Choice');
      cy.get('button').contains('Add Choice').should('exist').and('be.visible').click();
      cy.get('.error-message').should('contain', 'Duplicate choices are not allowed');
    });
  });
  
  describe('Comparison Manager Functionality', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      // Add navigation to Comparison Manager if needed
    });
  
    it('Should allow selecting a choice', () => {
      // Replace '.comparison-item' with the correct selector
      // Add wait or check for loading if necessary
      cy.get('.comparison-item').should('exist').and('be.visible').first().click();
      // Additional assertions as needed
    });
  });
  