/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Creates one Todo using UI
       * @example
       * cy.createTodo('new item')
       */
       clickLink(labelText: string): Chainable<any>
    }
  }