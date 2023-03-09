/// <reference types="cypress" />


import { mount } from 'cypress/react18'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      createAliases(selectors): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add("createAliases", ({ selector, label }) => {

  const selectByTestId = (attr) => `[test-id=${attr}]`;

  return cy.get(selectByTestId(selector)).as(label.replace("@", ""));
});

export {};
