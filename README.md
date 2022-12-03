# Cypress-Assignment-Vanessa-Russell

This automation suite is for the SauceDemo website:

** It was executed with the cypress automation tool

The automated test scripts are as follows:

1. Data - Driven login- this test script can be found in the 'Page Objects' folder with the title 'login'

2. The checkout workflow ** Single item checkout & ** Multiple items checkout - This test script can be found in the 'Page Objects' folder with the title 'Checkout'

3. Sort - this test script can be found in the 'Sort' folder with the title 'sortTest'

4. Remove item - this test script can be found in the 'Remove' folder with the title 'removeFromCart'

5. Negative tests - this test script can be found in the 'Negative' folder negative with the title 'negativeTest'


Dependencies NodeJS v12,
v14 or above NPM v6 or above Chrome browser 

Getting Started Clone the repository & install dependencies

$ git clone 
$ cd cypress-ui-automation-bootcamp $ 
npm install 

Folder Structure 

cypress/e2e/page: Page object files which include element selectors and functions that are used in tests.

cypress/e2e/test: Test files which include the actual tests.

Execute tests Execute the Cypress GUI

npx cypress open

Execute the Cypress via commandline

npx cypress run

Executes all tests in the Chrome browser and generates a Mochawesome report.

npm test

Execute tests in a different browser npx cypress run --browser firefox

N.B. The browser must be installed on the device.

Execute a specific test file Without Report

npx cypress run --spec cypress/e2e/test/InClassActivities/activity4.cy.js

OR

With Report

npm run test:spec cypress/e2e/test/InClassActivities/activity4.cy.js
