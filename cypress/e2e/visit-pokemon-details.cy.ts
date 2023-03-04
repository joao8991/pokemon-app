describe("Visit Pokemon Details test", () => {
  it("click first pokemon and goes to details page", () => {
    cy.visit("http://localhost:3000");
    cy.get("a").eq(0).click();
    cy.url().should("include", "/pokemon/");
  });

  it("when in a pokemon details click the come back button and go to the main page", () => {
    cy.visit("http://localhost:3000/pokemon/bulbasaur");
    cy.get('[data-cy="come-back-button"]').click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
