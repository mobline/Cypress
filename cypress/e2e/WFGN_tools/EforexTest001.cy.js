///<reference types ="cypress"/>


describe('CAS DE TEST EFOREX VERSION 3.2.0', () => {
  it('passes', () => {

    cy.visit('https://uat.guceg.gov.gn/tvf/tvfGen/list', { timeout: 6000 })
    //cy.get('.gLFyf').type("ANDREW THE MAIN MAN {enter}")

    cy.get('#username').type('mohamed.traore@webbfontaine.com')
    cy.get('#password').type('Abce1234!@{enter}')





  })
})