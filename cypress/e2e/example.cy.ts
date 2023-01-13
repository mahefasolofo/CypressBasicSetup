const url : string ="https://example.cypress.io"
describe('template spec', () => {
  it('passes', () => {
    cy.visit(url)

  })
})