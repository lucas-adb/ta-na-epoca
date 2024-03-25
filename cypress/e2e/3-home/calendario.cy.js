describe('Calendar', () => {
  it('should display the calendar table', () => {
    cy.visit('http://localhost:3000/calendario')

    cy.get('h1').contains('Sazonalidade de produtos')

    cy.get('table').should('exist')
    cy.get('table').find('th').should('have.length', 13)

    cy.get('table').find('tr').should('have.length.gt', 2)
  })

  it('should change route when searching for a name', () => {
    cy.visit('http://localhost:3000/calendario')

    cy.get('form').find('input').type('jiló')
    cy.get('form').find('button').click()

    cy.url().should('equal', 'http://localhost:3000/calendario/busca?food=jil%C3%B3&type=&month=')
  })

  it('should change route when searching for a type', () => {
    cy.visit('http://localhost:3000/calendario')

    cy.get('#type-select').select('Fruta')
    cy.get('form').find('button').click()

    cy.url().should('equal', 'http://localhost:3000/calendario/busca?food=&type=FRUIT&month=')
  })

  it('should change route when searching for a month', () => {
    cy.visit('http://localhost:3000/calendario')

    cy.get('#month-select').select('Jan')
    cy.get('form').find('button').click()

    cy.url().should('equal', 'http://localhost:3000/calendario/busca?food=&type=&month=01')
  })

  it('should change route when searching for a name, type and month', () => {
    cy.visit('http://localhost:3000/calendario')

    cy.get('form').find('input').type('jiló')
    cy.get('#type-select').select('Vegetal')
    cy.get('#month-select').select('Jan')
    cy.get('form').find('button').click()

    cy.url().should('equal', 'http://localhost:3000/calendario/busca?food=jil%C3%B3&type=VEGETABLE&month=01')
  })

  it('should not change route with no search criteria', () => {
    cy.visit('http://localhost:3000/calendario')

    cy.get('form').find('button').click()

    cy.url().should('equal', 'http://localhost:3000/calendario')

    cy.get('p').contains('Preencha ao menos um campo')
  })

  it('should got no results with invalid name', () => {
    cy.visit('http://localhost:3000/calendario')

    cy.get('form').find('input').type('rum ham')
    cy.get('form').find('button').click()

    cy.url().should('equal', 'http://localhost:3000/calendario/busca?food=rum%20ham&type=&month=')

    cy.get('td').contains('Nenhum resultado encontrado')
  })

  it('should go back to the calendar page when link is clicked', () => {
    cy.visit('http://localhost:3000/calendario/busca?food=jil%C3%B3&type=&month=')

    cy.get('a').contains('Limpar Pesquisa').click()

    cy.url().should('equal', 'http://localhost:3000/calendario')
  })
})