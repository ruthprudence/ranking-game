describe('Sort Mechanism for Presenting Options', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('input[class="theme_Box"]', { timeout: 10000 }).should('be.visible').type('Fruits');
    cy.get('button').contains('Submit Topic').click();
  });

  /* 3 choices - [a, b, c]:
  [b, a]
  [c, b]
  [c, a]
*/
  it('Presents choices in the correct order for 3 options', () => {
    // Input 3 choices: Apples, Bananas, Cranberries
    cy.get('input[id="1"]').type('Apples');
    cy.get('input[id="2"]').type('Bananas');
    cy.get('input[id="3"]').type('Cranberries');

    // Submit the choices
    cy.get('button').contains('Submit').click();

    // Validate the order of choices presented
    // For the first pair: Bananas (left), Apples (right)
    cy.get('button.left').should('contain', 'Bananas');
    cy.get('button.right').should('contain', 'Apples');
    // Click one of the choices to proceed to the next pair
    cy.get('button.left').eq(0).click();

    // For the second pair: Cranberries (left), Bananas (right)
    cy.get('button.left').should('contain', 'Cranberries');
    cy.get('button.right').should('contain', 'Bananas');
    cy.get('button.left').click();

    // For the third pair: Cranberries (left), Apples (right)
    cy.get('button.left').should('contain', 'Cranberries');
    cy.get('button.right').should('contain', 'Apples');
    cy.get('button.left').click();
  });

/* 4 choices - [a, b, c, d]:
  [b, a]
  [c, b]
  [d, c]
  [c, a]
  [d, b]
  [d, a]
*/
  it('Presents choices in the correct order for 4 options', () => {
    // Input 4 choices: Apples, Bananas, Cranberries, Dates
    cy.get('input[id="1"]').type('Apples');
    cy.get('input[id="2"]').type('Bananas');
    cy.get('input[id="3"]').type('Cranberries');
    cy.get('button[name="addRow"]').click();
    cy.get('input[id="4"]').type('Dates');

    // Submit the choices
    cy.get('button').contains('Submit').click();

    // Validate the order of choices presented
    // For the first pair: Bananas (left), Apples (right)
    cy.get('button.left').should('contain', 'Bananas');
    cy.get('button.right').should('contain', 'Apples');
    // Click one of the choices to proceed to the next pair
    cy.get('button.left').click();

    // For the second pair: Cranberries (left), Bananas (right)
    cy.get('button.left').should('contain', 'Cranberries');
    cy.get('button.right').should('contain', 'Bananas');
    cy.get('button.left').click();

    // For the third pair: Dates (left), Cranberries (right)
    cy.get('button.left').should('contain', 'Dates');
    cy.get('button.right').should('contain', 'Cranberries');
    cy.get('button.left').click();

    // For the fourth pair: Cranberries (left), Apples (right)
    cy.get('button.left').should('contain', 'Cranberries');
    cy.get('button.right').should('contain', 'Apples');
    cy.get('button.left').click();

    // For the fifth pair: Dates (left), Bananas (right)
    cy.get('button.left').should('contain', 'Dates');
    cy.get('button.right').should('contain', 'Bananas');
    cy.get('button.left').click();

    // For the sixth pair: Dates (left), Apples (right)
    cy.get('button.left').should('contain', 'Dates');
    cy.get('button.right').should('contain', 'Apples');
    cy.get('button.left').click();


  });

});




/*
5 choices
[a, b, c, d, e]:
  [b, a]
  [c, b]
  [d, c]
  [e, d]
  [c, a]
  [d, b]
  [e, c]
  [d, a]
  [e, b]
  [e, a]

*/