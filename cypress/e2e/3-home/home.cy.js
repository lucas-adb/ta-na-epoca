describe('Navigation', () => {
  it('should navigate to the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
 
    // Find the logo in the header and click it
    cy.get('#logo').click()

    // Check if the URL is correct
    cy.url().should('equal', 'http://localhost:3000/')
  })
  it('should navigate to the calendar page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
 
    // Find the calendar link in the header and click it
    cy.get('#calendario').click()

    // Check if the URL is correct
    cy.url().should('equal', 'http://localhost:3000/calendario')
  })
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find the about link in the header and click it
    cy.get('#sobre').click()

    // Check if the URL is correct
    cy.url().should('equal', 'http://localhost:3000/sobre')
  })
  it('should navigate to the portfolio page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find the portfolio link in the footer and click it
    cy.get('#portfolio')
      .should('have.attr', 'href')
      .and('equal', 'https://lucasalves.dev/')
  })
  it('should navigate to the source page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find the source link in the footer and click it
    cy.get('#source')
      .should('have.attr', 'href')
      .and('equal', 'https://ceagesp.gov.br/sala-imprensa/sazonalidade-de-compras/')
  })
})