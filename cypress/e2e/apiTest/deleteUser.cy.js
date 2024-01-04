describe("DELETE /users", () => {
  it("delete a user", () => {
    cy.getUser().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      const users = response.body.users;
      expect(response.body.length).to.be.greaterThan(0);
      const randomIndex = Math.floor(Math.random() * response.body.length);
      let id = response.body[randomIndex].id;
      cy.api({
        url: `/users/${id}`,
        method: "DELETE",
      }).then((response) => {
        expect(response.status).to.eq(200); 
      });
    });
  });
});
