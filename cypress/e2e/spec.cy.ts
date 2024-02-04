describe('My First Test', () => {
  it('Initial project page redirects to multiplication', () => {
    cy.visit('/')
    cy.url().should('include', "/multiplication")
  })
})
