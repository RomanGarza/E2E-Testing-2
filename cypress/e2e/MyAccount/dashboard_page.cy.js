// Description

/* The Dashboard contains many main functions such 
as buttons to lead the user to various pages and quick 
information like account balance and recent activity. */

describe("Test Dashboard main functions", () => {
  beforeEach(() => {
    cy.visit("https://cvtmyaccount.thatprepaidcard.com/");
    //   Login custom command
    cy.Login();
  });

  it("See Card Number", () => {
    cy.get('[data-cy="dash-virtualcard-img-btn"] > .v-btn__content')
      .should("be.visible")
      .click();
      cy.location("pathname").should("eq", "/dash/virtualcard")
  })

  it("Account Deposit", () => {
    cy.get('[data-cy="amount-text"]')
    .should("be.visible")
  })

  it("Direct Deposit", () => {
    cy.get('[data-cy="dash-directDeposit-title"]').should("be.visible");
    cy.get('[data-cy="dash-directDeposit-button"]')
      .should("be.visible")
      .click();
    cy.location("pathname").should("eq", "/dash/directDeposit");
  });
});

// Expected results

// Each button should take the user to the corresponding page as described above.
