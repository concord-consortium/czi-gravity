context("Test the overall app", () => {
  before(() => {
    cy.visit("?venus");
  });

  describe("Forces Unknown Version Test", () => {
    it("renders Calculate forces button", ()=>{
      cy.get("[data-testid=save-button]").should("contain", "Calculate forces");
    });
    it("renders question mark", () => {
      cy.get("[data-testid=question-mark]").should("be.visible");
      cy.get("[data-testid=force-arrows]").should("not.exist");
    });
    it("renders force values and saves to table when Calculate forces button is clicked", ()=>{
      cy.get("[data-testid=save-button]").click();
      cy.get("[data-testid=question-mark]").should("not.exist");
      cy.get("[data-testid=force-arrows]").should("not.exist");
      cy.get("[data-testid=force-value]").should("be.visible").and("have.length", 4);
      cy.get("[data-testid=data-row]").should("have.length", 1);
    });
    it("renders the correct table", () => {
      cy.get("th").contains("Gravitational force between object and Venus").should("exist");
      cy.get("th").contains("Gravitational force between object and Earth").should("exist");
    });
  });
});
