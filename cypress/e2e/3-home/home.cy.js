describe('Navigation', () => {
  it('should navigate to the home page', () => {
    cy.visit('http://localhost:3000/')
 
    cy.get('#logo').click()

    cy.url().should('equal', 'http://localhost:3000/')
  })

  it('should navigate to the calendar page', () => {
    cy.visit('http://localhost:3000/')
 
    cy.get('#calendario').click()

    cy.url().should('equal', 'http://localhost:3000/calendario')
  })

  it('should navigate to the calendar page through main content', () => {
    cy.visit('http://localhost:3000/')
 
    cy.get('#calendario-main').click()

    cy.url().should('equal', 'http://localhost:3000/calendario')
  })

  it('should navigate to the portfolio page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#portfolio')
      .should('have.attr', 'href')
      .and('equal', 'https://lucasalves.dev/')
  })

  it('should navigate to the source page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#source')
      .should('have.attr', 'href')
      .and('equal', 'https://ceagesp.gov.br/sala-imprensa/sazonalidade-de-compras/')
  })
})

describe('Main content', () => {
  it('should display the main elements', () => {
    cy.visit('http://localhost:3000/')

    cy.get('h1').contains('Tá na época de:')

    cy.get('[id^=food-]').its('length').should('be.gt', 1)
  })
})