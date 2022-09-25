Feature: demo feature

   @demo
    Scenario Outline: Run first demo feature
    Given user is on Google page
    When user searches with <SearchItems>
    Then click on the first search result
    Then URL should match <ExpectedURL>



        Examples:
            | TestID | SearchItems | ExpectedURL |
            | Demo_TC001  | Webdriver IO  | https://webdriver.io/  |