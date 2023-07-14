import PasswordInput from "../../src/components/passwordField"

import { LOGIN_SELECTORS as SELECTORS } from "../support/selectors";

const props = {
  label: "password",
  placeholder: '123',
  isToggleable: true,
}

describe('Password input component', () => {
  beforeEach(() => {
    cy.mount(<PasswordInput {...props}/>);
  })

  it('Component successfully rendered to dom', () => {
    const { password,passwordLabel , passwordToggle } = SELECTORS;

    cy.createAliases(password);
    cy.createAliases(passwordLabel);
    cy.createAliases(passwordToggle);

    cy.get(passwordLabel.label).should("be.visible").and('have.text', `${props.label} :`)
    cy.get(password.label).should("be.visible").and("have.attr", "type", "password");
    cy.get(passwordToggle.label).should("be.visible").and('have.text', '*');
    
  })

  it('Password type should change when clicked on toggle', () => {
    const { password, passwordToggle } = SELECTORS;

    cy.createAliases(password);
    cy.createAliases(passwordToggle);

    cy.get(password.label).should("have.attr", "type", "password");
    cy.get(passwordToggle.label).click();
    cy.get(password.label).should("have.attr", "type", "text");

  })
})

export {}