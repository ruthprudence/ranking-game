describe('Ranking Game E2E Tests', () => {
    it('Completes a full game flow', () => {
      // Visit the game's URL
      cy.visit('localhost:8012');
    //   cy.visit('https://ruthprudence.com/rg');
  
      // Check if the splash page is loaded correctly
      cy.get('h1#headingSplash').should('have.text', 'the Ranking Game');
      cy.get('input#topicInput').should('exist');
      cy.get('button#submitTopicButton').should('be.disabled');
      cy.get('p#splashPrompt').should('have.text', '(enter a topic above)');
  
      // Interact with the splash page
      cy.get('input#topicInput').type('fruits');
      cy.get('button#submitTopicButton').should('be.enabled');
      cy.get('p#splashPrompt').should('have.text', 'click "Submit Topic"');
      cy.get('input#topicInput').clear();
      cy.get('button#submitTopicButton').should('be.disabled');
      cy.get('p#splashPrompt').should('have.text', '(enter a topic above)');
      cy.get('input#topicInput').type('fruits');
      cy.get('button#submitTopicButton').click();
  
      // Input Page
    //   cy.url().should('include', '/input'); // Checking if the URL is correct
      cy.get('h2#inputPageTopic').should('have.text', 'fruits');
      cy.get('button#RankBtn').should('be.disabled');
      cy.get('td[name="1"] input').type('apricots');
      cy.get('td[name="2"] input').type('persimmons');
      cy.get('td[name="3"] input').type('cranberries');
      cy.get('button#RankBtn').should('be.enabled').click();
  
      // Matchup Page
    //   cy.url().should('include', '/matchup');
      // Check the first matchup and make a selection
      cy.get('.button.matchupBtn').first().should('contain', 'persimmons').click();
      // Check the second matchup and make a selection
      cy.get('.button.matchupBtn').first().should('contain', 'cranberries').click();

      cy.get('.button.matchupBtn').first().should('contain', 'cranberries').click();
  
      // Results Page
    //   cy.url().should('include', '/results');
      cy.get('h2#headingResults').should('have.text', 'fruits ..ranked!');
      cy.get('#resultsTable').should('exist');
      cy.get('#resultsTable').find('tr').should('have.length', 4); // Including header row
    });
  });
  