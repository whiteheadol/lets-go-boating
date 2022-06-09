describe ('Let\'s Go Boating homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:4000/api/v1/rivers', {
      fixture: 'miniRiverData'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should be able to visit the homepage', () => {
    cy.url('http://localhost:3000/')
  });

  it('Should be able to view a homepage nav bar and thumbnails', () => {
    cy.get('.home-title').should('have.text', 'Let\'s Go Boating')
  });
  
})
