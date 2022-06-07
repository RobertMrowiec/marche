describe('Input-Map action test', () => {
  it('should visit default page with default selected input value and highlighted expected states', () => {
    cy.visit('localhost:3000/')
    cy.contains("User visits")
    cy.contains("0-250")
    cy.get('path').should('have.class', 'wa fill')
    cy.get('path').should('have.class', 'oh fill')
  })

  it('should select input 250-500 and highlight expected states', () => {
    cy.visit('localhost:3000/')
    cy.get("#visits-dropdown").select('250-500')

    cy.get('path').should('not.have.class', 'wa fill')
    cy.get('path').should('not.have.class', 'oh fill')

    cy.get('path').should('have.class', 'mi fill')
    cy.get('path').should('have.class', 'md fill')
    cy.get('path').should('have.class', 'me fill')
  })

  it('should select input 500-1000 and highlight expected states', () => {
    cy.visit('localhost:3000/')
    cy.get("#visits-dropdown").select('500-1000')

    cy.get('path').should('not.have.class', 'wa fill')
    cy.get('path').should('not.have.class', 'mi fill')
    cy.get('path').should('not.have.class', 'de fill')

    cy.get('path').should('have.class', 'mt fill')
    cy.get('path').should('have.class', 'nd fill')
    cy.get('path').should('have.class', 'al fill')
    cy.get('path').should('have.class', 'ok fill')
    cy.get('path').should('have.class', 'nh fill')
    cy.get('path').should('have.class', 'ri fill')
  })

  it('should select input 1000+ and highlight expected states', () => {
    cy.visit('localhost:3000/')
    cy.get("#visits-dropdown").select('1000+')

    cy.get('path').should('not.have.class', 'wa fill')
    cy.get('path').should('not.have.class', 'mi fill')
    cy.get('path').should('not.have.class', 'oh fill')
    cy.get('path').should('not.have.class', 'md fill')
    cy.get('path').should('not.have.class', 'me fill')
    cy.get('path').should('not.have.class', 'mt fill')
    cy.get('path').should('not.have.class', 'nd fill')
    cy.get('path').should('not.have.class', 'al fill')
    cy.get('path').should('not.have.class', 'ok fill')
    cy.get('path').should('not.have.class', 'nh fill')
    cy.get('path').should('not.have.class', 'ri fill')
  })
})
