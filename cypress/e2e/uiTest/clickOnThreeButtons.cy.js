describe("click on the 3 buttons ", () => {
  it("checks if buttons have been clicked", () => {
    cy.visit(Cypress.env("site"));

    cy.get("div#content div.large-2.columns > a:nth-child(1)").click();
    cy.get("div#content a.button.alert").click();
    cy.get("div#content a.button.success").click();
  });
});
