describe('should properly log in and out', () => {
  beforeEach(function () {
    cy.deleteAllTestUsers()
    cy.loginViaDescopeUI()
  })
  it('shows private component after log in', () => {
    cy.get('[data-cy="private-component"]').should('have.text', "My Private Component")
  })

  it('show login page header message after logging out', () => {
    cy.get('[data-cy="login-header"').contains("Login/SignUp to see the Secret Message!")
  })
})