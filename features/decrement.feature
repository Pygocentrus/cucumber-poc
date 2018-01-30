Feature: Decrement feature
  In order to do maths
  As a developer
  I want to decrement variables

  @decrement
  Scenario: Simple decrement
    Given a variable set to 3
    When I decrement this variable by 2
    Then the result should be 1
