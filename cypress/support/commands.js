Cypress.Commands.add("getUser", () => {
  cy.api({
    url: "/users",
    method: "GET",
  }).then((response) => {
    return response;
  });
});
