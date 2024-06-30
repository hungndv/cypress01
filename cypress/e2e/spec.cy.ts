describe('Suite 01', () => {
  it('C1 Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')

    cy.clickLink('type')

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})