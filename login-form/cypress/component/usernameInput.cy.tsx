import Input from "../../src/components/inputField"

import { LOGIN_SELECTORS as SELECTORS } from "../support/selectors";

const props = {
  label: "username",
  placeholder: 'test username',
}

describe('Password input component', () => {
  beforeEach(() => {
    cy.mount(<Input {...props}/>);
  })

  it('Component successfully rendered to dom', () => {
    const { username, usernameLabel } = SELECTORS;

    cy.createAliases(username);
    cy.createAliases(usernameLabel);

    cy.get(usernameLabel.label).should("be.visible").and('have.text', `${props.label} :`)
    cy.get(username.label).should("be.visible").and("have.attr", "type", "text").and("have.attr", "placeholder", props.placeholder);
    
  })


})

export {}