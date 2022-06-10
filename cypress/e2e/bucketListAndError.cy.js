describe ('Let\'s Go Boating Bucket List and Error Page', () => {
  beforeEach(() => {
    cy.intercept('GET', "http://localhost:4000/api/v1/rivers", {
      statusCode: 200,
      fixture: 'miniRiverData'
    })

    cy.intercept('GET', "http://localhost:4000/api/v1/rivers/1", {
      fixture: 'singleRiverData'
    })

    cy.visit('http://localhost:3000/')
  })

  it('Should be able to add a trip to their bucket list, and view their list', () => {
    cy.get('#1').click()
    cy.get('.fav-btn').click()
    cy.get('.bl-btn').click()

    cy.get('.thumbnail-styling').should('have.length', 1)

    cy.get('#1').click()
    cy.get('.fav-btn').should('not.exist')
  })

  it('Should see a 404 page when visiting a page that doesn\'t exist', () => {
    cy.visit('http://localhost:3000/potato')

    cy.get('.fof-message').should('contain', 'Oh no! This page doesn\'t exist!')
    cy.get('.redirect').should('contain', 'Click here to go back to the main page.')
    cy.get('.fof-image').should('have.attr', 'src').should('include', 'https://confluence-solutions.com/wp-content/uploads/2020/04/raft-flip.jpg')

    cy.get('.redirect').eq(1).click()
    cy.url('http://localhost:3000/')
  })
})
