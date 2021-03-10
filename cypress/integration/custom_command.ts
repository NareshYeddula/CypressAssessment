/// <reference types="cypress" />
/// <reference types="../support" />

describe('Custom Command Test', function () {


    it("Custom command - 'clickLink'", () => {
        cy.visit('https://trytestingthis.netlify.app/')

        // Using custom command 'clickLink'
        cy.clickLink('Contact');

        // Asserting custom command 'clickLink' is working
        cy.get('.footer').find('h2').eq(0).should('have.text',"Created by Oviya Kandaswamy");
    })

})
