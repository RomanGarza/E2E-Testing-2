// Description

/* The Dashboard contains many main functions such 
as buttons to lead the user to various pages and quick 
information like account balance and recent activity. */

describe("Test Dashboard main functions", () => {
  it("logs in", () => {
    cy.visit("https://cvtmyaccount.thatprepaidcard.com/");
    //   Login custom command
    cy.Login();
  })

  // Code required to view virtual card
  // it("See Card Number", () => {
  //   cy.get('[data-cy="dash-virtualcard-img-btn"] > .v-btn__content')
  //     .should("be.visible")
  //     .click();
  //     cy.location("pathname").should("eq", "/dash/virtualcard")
  // })

  it("Account Balance", () => {
    cy.get('[data-cy="amount-text"]')
      .should("be.visible")
  })

  it("FriendSpend-Rewards", () => {
    //testing code
  })

  it("Direct Deposit", () => {
    cy.get('[data-cy="dash-directDeposit-title"]').should("be.visible");
    cy.get('[data-cy="dash-directDeposit-button"]')
      .should("be.visible")
      .click();
    cy.location("pathname").should("eq", "/dash/directDeposit");
  });

  it("Recent Activity", () => {
    cy.visit("https://cvtmyaccount.thatprepaidcard.com/");
    cy.Login();
    cy.get('[data-cy="dash-recentActivity-title"]')
      .should("be.visible")
    cy.get('.transactions')
      .should("be.visible")
    cy.get('[data-cy="dash-recentActivity-button"]')
      .should("be.visible")
      .click()
    cy.location("pathname").should("eq", "/dash/activity")
  });

  it("Load Cash", () => {
    cy.visit("https://cvtmyaccount.thatprepaidcard.com/");
    cy.Login();
    cy.get('[data-cy="dash-loadMoney-title"]').should("be.visible")
    cy.get('[data-cy="dash-loadMoney-button"]').should("be.visible").click()
    cy.get('.v-card__actions').should("be.visible")
  })


});

// Expected results

// Each button should take the user to the corresponding page as described above.
