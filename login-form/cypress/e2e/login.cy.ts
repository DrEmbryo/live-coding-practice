import {
  BASE_URL,
  URL,
  CREDENTIALS,
  INCORRECT_CREDENTIALS,
} from "../../src/constants/api";

import { LOGIN_SELECTORS as SELECTORS } from "../support/selectors";

beforeEach(() => {
  cy.visit(BASE_URL);
});

describe("Login success", () => {
  it("Should successfully login", () => {
    const { username, password, submit, loginSuccess } = SELECTORS;

    cy.createAliases(username);
    cy.createAliases(password);
    cy.createAliases(submit);

    cy.intercept("POST", URL).as("loginRequest");

    cy.get(username.label).type(CREDENTIALS.username);
    cy.get(password.label).type(CREDENTIALS.password);
    cy.get(submit.label).click();

    cy.wait("@loginRequest");

    cy.createAliases(loginSuccess);
    cy.get(loginSuccess.label).contains("User name");
  });
});

describe("Login failure", () => {
  it("Login process should fail", () => {
    const { username, password, submit, loginError } = SELECTORS;

    cy.intercept("POST", URL).as("loginRequest");

    cy.createAliases(username);
    cy.createAliases(password);
    cy.createAliases(submit);

    cy.get(username.label).type(INCORRECT_CREDENTIALS.username);
    cy.get(password.label).type(INCORRECT_CREDENTIALS.password);
    cy.get(submit.label).click();

    cy.wait("@loginRequest");

    cy.createAliases(loginError);
    cy.get(loginError.label).contains("Invalid request");
  });
});

export {};
