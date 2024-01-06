// cypress/integration/frontend.js

describe('My First Test', () => {
    it('Visits the React app', () => {
      cy.visit('http://localhost:3000') 
      cy.contains('Ranking Game') 
    })
  })
  