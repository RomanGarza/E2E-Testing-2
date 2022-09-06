// Description:

// Login page is the gateway to MyAccount, Enroll, and Forgot Username/Password.

describe("visit myaccount login page", () => {
  beforeEach(() => {
    cy.visit("https://cvtmyaccount.thatprepaidcard.com/");
  });

  context("Login Page", () => {
    it("ATM locations button", () => {
      cy.get('.atm-locations-btn')
        .should("be.visible")
        .click();
    });

    it("Cash Reload Locations button", () => {
      cy.get('.cash-reload-locations-btn')
        .should("be.visible")
        .click();
    });

    it("Enter invalid credentials to get an error that you could not log in", () => {
      cy.get('[data-cy="username-input"]').type("fakeUser");
      cy.get('[data-cy="password-input"]').type("fakePassword");
      cy.get('[data-cy="submit-button"]')
        .contains("LOGIN")
        .should("be.visible")
        .click();
      cy.get('[data-cy="login-error"]').should("be.visible");
      cy.get(".cascade--html-text").should("be.visible");
    });

    // it("Click on the Don't have a card? Get one now - to be taken to enroll", () => {
    //   cy.get('.login--get-a-card > [data-cy]')
    //   .should("be.visible")
    //   .click();
    // });

    it("Click on Get A Card button - to be taken to enroll", () => {
      cy.get('.login--get-a-card > [data-cy]')
        .should("be.visible")
        .click();
    });

    it("Click on forgot username / forgot password button to be sent to the recovery flow.", () => {
      cy.get('[data-cy="recover-link"]').should("be.visible").click();
      cy.location("pathname").should("eq", "/recover");
    });

    it("Enter valid log in credentials and click the log in button to reach MyAccount", () => {
      cy.get('[data-cy="username-input"]').type("RomanGarza");
      cy.get('[data-cy="password-input"]').type("aknsdlfknasdnf789!!@@F");
      cy.get('[data-cy="submit-button"]')
        .contains("LOGIN")
        .should("be.visible")
        .click();
      cy.location("pathname").should("eq", "/dash");
    });
  });
});

// Expected results:

// Each button should direct the user to a new page of Enroll or Recover.
// Entering invalid credentials should result in an error message that the user can not log in with provided info.
// Entering valid credentials should result in the user being taken to the MyAccount Dashboard.
