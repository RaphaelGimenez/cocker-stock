import { faker } from '@faker-js/faker';

describe('Signup page', () => {
  beforeEach(() => cy.visit('/'));
  it('should let user sign up with valid credentials', () => {
    cy.intercept(/\/auth\/v1\/signup/).as('signup');
    const user = {
      email: faker.internet.exampleEmail(),
      password: faker.internet.password(),
    };

    cy.findByRole('link', { name: /créer un compte/i }).click();
    cy.location('pathname').should('eq', '/signup');

    cy.findByLabelText(/email/i).type(user.email);
    cy.findByLabelText(/mot de passe/i).type(user.password);
    cy.findByRole('button', { name: /s'inscrire/i }).click();

    cy.wait('@signup').its('response.body.user').should('exist');
  });
});
