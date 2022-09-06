// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// -- This is a parent command --

Cypress.Commands.add('Login', () => { 
    cy.get('[data-cy="username-input"]').type("RomanGarza");
      cy.get('[data-cy="password-input"]').type("aknsdlfknasdnf789!!@@F");
      cy.get('[data-cy="submit-button"]')
        .contains("LOGIN")
        .should("be.visible")
          .click();
       
 })