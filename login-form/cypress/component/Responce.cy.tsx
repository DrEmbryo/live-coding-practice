import Response from "../../src/components/form/components/response"

import { LOGIN_SELECTORS as SELECTORS } from "../support/selectors";

const successProps = {
  firstName: "Test",
  lastName: "User"
}

const errorProps = {
  message: "Test error message"
}

describe('Response component', () => {
  it('Component successfully rendered to dom', () => {
    const { loginSuccess } = SELECTORS;

    cy.mount(<Response requestResult={successProps}/>);

    cy.createAliases(loginSuccess);

    cy.get(loginSuccess.label).should("be.visible").and('have.text', `User name is: ${successProps.firstName} ${successProps.lastName}`)
    
  })
  
  it('Component failed rendered to dom', () => {
    const { loginError } = SELECTORS;

    cy.mount(<Response requestResult={errorProps}/>);
    
    cy.createAliases(loginError);
    
    cy.get(loginError.label).should("be.visible").and('have.text', `Invalid request: ${errorProps.message}`)
  })

})

export {}