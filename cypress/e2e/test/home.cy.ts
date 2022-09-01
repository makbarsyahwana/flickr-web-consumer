describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('http://localhost:3000')
      
      cy.get('[id=load-more]', { timeout: 60000 }).click()
    })
})