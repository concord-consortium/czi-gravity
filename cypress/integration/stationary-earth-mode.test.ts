context("Test the earth mode", () => {
  before(() => {
    cy.visit("?earth");
  });

  describe("Forces Unknown Version Test", () => {
    it("renders Earth without a dropsown", ()=>{
      cy.get("[data-testid=object-2]  [data-testid=object-selection]").should("not.exist");
    });
    it("renders Calculate forces button", ()=>{
      cy.get("[data-testid=save-button]").should("contain", "Calculate force");
    });
    it("renders question mark", () => {
      cy.get("[data-testid=question-mark]").should("be.visible");
      cy.get("[data-testid=force-value]").should("not.exist");
    });
    it("renders alert when question mark is clicked", () => {
      cy.get("[data-testid=question-mark]").click();
      cy.on("winow:alert", (str) => {
        expect(str).to.contain("Click on Calculate forces button");
      });
    });
    it("renders force values and saves to table when Calculate forces button is clicked", ()=>{
      cy.get("[data-testid=save-button]").click();
      cy.get("[data-testid=question-mark]").should("not.exist");
      cy.get("[data-testid=force-arrows]").should("not.exist");
      cy.get("[data-testid=force-value]").should("be.visible").and ("have.length", 2);
      cy.get("[data-testid=data-row]").should("have.length", 1);
    });
    it("renders back to question mark when user changes object 1", ()=>{
      cy.get("[data-testid=object-1] [data-testid=object-selection]").select("soccer");
      cy.get("[data-testid=question-mark]").should("be.visible");
      cy.get(".column.arrows [data-testid=force-arrows]").should("not.exist");
    });
    it("renders back to question mark when table is cleared", ()=>{
      cy.get("[data-testid=save-button").click();
      cy.get("[data-testid=clear-table-button]").click();
      cy.get("[data-testid=question-mark]").should("be.visible");
      cy.get(".column.arrows [data-testid=force-arrows]").should("not.exist");
    });
  });
});
