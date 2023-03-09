/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      createAliases(selectors): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add("createAliases", (selectors: any) => {
  const { selector, label } = selectors;

  const selectByTestId = (attr) => `[test-id=${attr}]`;

  return cy.get(selectByTestId(selector)).as(label.replace("@", ""));
});

export {};
