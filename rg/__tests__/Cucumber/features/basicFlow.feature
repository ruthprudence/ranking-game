Feature: Basic Flow
  Scenario: User completes a ranking game
    Given I am on the splash page
    When I enter a topic
    And I submit the topic
    And I enter items to compare
    And I submit the items
    And I complete the matchups choosing left each time
    Then I should see the final scores
