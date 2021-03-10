/// <reference types="cypress" />

describe('All login tests', function () {


    it('Login - Valid Credentials', () => {
        cy.visit('https://trytestingthis.netlify.app/')
        cy.get('#uname').type('test')
        cy.get('#pwd').type('test')
        cy.get('[type="submit"]').click()
        
        //Assertion
        cy.contains('Login Successful').should('have.text', 'Login Successful :) ')
    })

    it('Login - Invalid Credentials', () => {
        cy.visit('https://trytestingthis.netlify.app/')
        cy.get('#uname').type('cde')
        cy.get('#pwd').type('e45')
        cy.get('[type="submit"]').click()

        //asserting alert message is displayed
        cy.on('window:alert', (txt) => {
            expect(txt).to.be.equal('Wrong Credentials! Try again!')
        })

        cy.get('.side').scrollTo('bottom')
        //asserting Login button is visible
        cy.get('[type="submit"]').should('be.visible',)

    })

})
