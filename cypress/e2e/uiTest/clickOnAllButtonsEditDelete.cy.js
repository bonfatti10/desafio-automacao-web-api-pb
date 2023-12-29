describe("click on the buttons edit and delete - first simple example ", () => {
  it("click edit and delete", () => {
    cy.visit(Cypress.env("site"));

    cy.get(':nth-child(1) > :nth-child(7) > [href="#edit"]').click();
    cy.get(':nth-child(1) > :nth-child(7) > [href="#delete"]').click();
    cy.get(':nth-child(2) > :nth-child(7) > [href="#edit"]').click();
    cy.get(':nth-child(2) > :nth-child(7) > [href="#delete"]').click();
    cy.get(':nth-child(3) > :nth-child(7) > [href="#edit"]').click();
    cy.get(':nth-child(3) > :nth-child(7) > [href="#delete"]').click();
    cy.get(':nth-child(4) > :nth-child(7) > [href="#edit"]').click();
    cy.get(':nth-child(4) > :nth-child(7) > [href="#delete"]').click();
    cy.get(':nth-child(5) > :nth-child(7) > [href="#edit"]').click();
    cy.get(':nth-child(5) > :nth-child(7) > [href="#delete"]').click();
    cy.get(':nth-child(6) > :nth-child(7) > [href="#edit"]').click();
    cy.get(':nth-child(6) > :nth-child(7) > [href="#delete"]').click();
    cy.get(':nth-child(7) > :nth-child(7) > [href="#edit"]').click();
    cy.get(':nth-child(7) > :nth-child(7) > [href="#delete"]').click();
    cy.get(':nth-child(8) > :nth-child(7) > [href="#edit"]').click();
    cy.get(':nth-child(8) > :nth-child(7) > [href="#delete"]').click();
    cy.get(':nth-child(9) > :nth-child(7) > [href="#edit"]').click();
    cy.get(':nth-child(9) > :nth-child(7) > [href="#delete"]').click();
    cy.get(':nth-child(10) > :nth-child(7) > [href="#edit"]').click();
    cy.get(':nth-child(10) > :nth-child(7) > [href="#delete"]').click();
  });
});

describe("Click on the buttons edit and delete -  second example using for ", () => {
  it("click edit and delete", () => {
    cy.visit(Cypress.env("site"));

    const numberOfElements = 10;

    for (let i = 1; i <= numberOfElements; i++) {
      cy.get(`:nth-child(${i}) > :nth-child(7) > [href="#edit"]`, {
        timeout: 10000,
      }).click();

      cy.get(`:nth-child(${i}) > :nth-child(7) > [href="#delete"]`, {
        timeout: 10000,
      }).click();
    }
  });
});
