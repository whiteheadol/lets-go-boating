describe ('Let\'s Go Boating homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', "http://localhost:4000/api/v1/rivers", {
      statusCode: 200,
      fixture: 'miniRiverData'
    })
    cy.visit('http://localhost:3000/')
  });

  it('Should be able to visit the homepage', () => {
    cy.url('http://localhost:3000/')
  });

  it('Should be able to view a homepage nav bar and thumbnails', () => {
    cy.get('.home-title').should('have.text', 'Let\'s Go Boating!')
    cy.get('.nav-image').should('have.attr', 'src').should('include', "https://p.kindpng.com/picc/s/173-1733025_rafting-kayaking-canoe-clip-art-rafting-silhouette-png.png")
    cy.get('.bucket-button').should('have.text', 'Bucket List')

    cy.get('.thumbnail-styling').should('have.length', 3)
    cy.get('.thumbnail-styling').first().should('contain', 'Upper Salt Daily, Salt River')
    cy.get('.thumbnail-styling').first().should('contain', 'AZ')
    cy.get('.thumbnail-styling').first().should('contain', 'Feb | Mar | Apr | May')

    cy.get('.thumbnail-styling').last().should('contain', 'Browns Canyon National Monument, Arkansas River')
    cy.get('.thumbnail-styling').last().should('contain', 'CO')
    cy.get('.thumbnail-styling').last().should('contain', 'May | Jun | Jul | Aug | Sept')
  });

  it('Should be able to click on a trip thumbnail to view more details about the trip', () => {
    cy.intercept('GET', "http://localhost:4000/api/v1/rivers/1", {
      fixture: 'singleRiverData'
    })
    cy.get('#1').click()
    cy.url("http://localhost:4000/api/v1/rivers/1")

    cy.get('.details-text').should('contain', 'Upper Salt Daily, Salt River | AZ')
    cy.get('.details-text').should('contain', 'Difficulty: III, IV')
    cy.get('.details-text').should('contain', 'Typical Season: Feb | Mar | Apr | May')
    cy.get('.details-text').should('contain', 'Length in Days: 0.5 | 1')
    cy.get('.details-text').should('contain', 'Length in Miles: 9')
    cy.get('.details-text').should('contain', 'Put-in: Hwy 60 (First Camp) is the most popular put-in')
    cy.get('.details-text').should('contain', 'Take-out: Hoodoo River Access')
    cy.get('.details-text').should('contain', 'Wild and Scenic: false')

    cy.get('.fav-btn').should('contain', 'Add this trip to your bucket list!')
    cy.get('.home-btn').should('contain', 'Home')
    cy.get('.bl-btn').should('contain', 'Bucket List')

    cy.get('.home-btn').click()
    cy.get('.thumbnail-styling').should('have.length', 3)
  });

  it('Should contain a form to filter trip thumbnails', () => {
    cy.get('form').should('contain', 'Narrow down your trip search:')
    cy.get('form').should('contain', 'What month would you like to go?')
    cy.get('form').should('contain', 'Check if you\'re open to trips that require a lottery permit:')

    cy.get('select').select('Feb')
    cy.get('.submit-btn').click()
    cy.get('.thumbnail-styling').should('have.length', 1)

  });

  it('Should be able to filter by different criteria', () => {
    cy.get('select').select('Feb')
    cy.get('input[name="permitBoolean"]').check()
    cy.get('.submit-btn').click()
    cy.get('.thumbnail-styling').should('have.length', 2)

  });
});
