describe("HexCalculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // Adjust URL to where your app runs
  });

  it("should display the calculator title", () => {
    cy.contains("Hex Calculator"); // Verifies the title is displayed
  });


  it("should perform hex addition", () => {
    cy.get('[data-testid="button-A"]').click(); // Input 'A'
    cy.get('[data-testid="button-+"]').click(); // Operator '+'
    cy.get('[data-testid="button-5"]').click(); // Input '5'
    cy.get('[data-testid="button-equals"]').click(); // Calculate

    cy.get('[data-testid="result"]').should("have.text", "= 000F"); // Check result
  });


  it("should handle division by zero", () => {
    cy.get('[data-testid="button-A"]').click();
    cy.get('[data-testid="button-/"]').click();
    cy.get('[data-testid="button-0"]').click();
    cy.get('[data-testid="button-equals"]').click();

    cy.contains("Division by zero"); // Check error message
  });
});
