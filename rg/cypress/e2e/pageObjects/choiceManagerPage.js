// In cypress/pageObjects/ChoiceManagerPageObject.js
class ChoiceManagerPageObject {
    visit() {
      cy.visit('http://localhost:3000/path-to-choice-manager');
    }
  
    addChoice(choiceText) {
      cy.get('input[type="text"]').type(choiceText);
      cy.get('button').contains('Add Choice').click();
    }
  
    // Add more methods as needed...
  }
  
  export default ChoiceManagerPageObject;
  