describe('Form Submission', () => {
  it('Enters a topic, tries to submit without adding items, and checks for an alert', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[type="text"]').should('exist').first().type('Test Topic');
    cy.get('button').contains('Submit Topic').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Please fill in all entries before submitting.`);
    });
    cy.get('button').contains('Submit').click();
  });
});

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

  });

  describe('Application Load', () => {
    it('Checks if the title is correct', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Ranking Game');
    });
  });
  
  describe('Initial UI Elements', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('Checks for at least one input element on the screen', () => {
      cy.get('input').should('have.length.at.least', 1);
    });
  });