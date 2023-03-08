const selectByTestId = (attr) => `[test-id=${attr}]`;

export const createAliases = ({ selector, label }) =>
  cy.get(selectByTestId(selector)).as(label.replace("@", ""));
