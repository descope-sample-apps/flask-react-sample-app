describe('should properly log in and out', () => {
  beforeEach(function () {
    cy.deleteAllTestUsers()
    cy.loginViaDescopeUI()
  })
  it('show JWT Response after log in', () => {
    cy.get('[data-cy="jwt-response"]').should('have.text', "JWT Response")
    // Could add check verifying the JWT response has matching data
  })

  it('show "Welcome!" after logging out', () => {
    cy.get('[data-cy="logout"]').click()
    cy.get('descope-wc').find('span').contains('Welcome!')
  })
})