import { createClient } from '@supabase/supabase-js';
import { faker } from '@faker-js/faker';
const supabase = createClient(
  Cypress.env('SUPABASE_URL'),
  Cypress.env('SUPABASE_API_KEY')
);

describe('Signup page', () => {
  beforeEach(() => cy.visit('/'));
  it('should let user sign up with valid credentials', () => {
    cy.intercept('POST', '/signup').as('signup');

    const existingUser = {
      email: faker.internet.exampleEmail(),
      password: faker.internet.password(),
    };
    const validUser = {
      email: faker.internet.exampleEmail(),
      password: faker.internet.password(),
    };

    supabase.auth.admin.createUser({
      email: existingUser.email,
      password: existingUser.password,
      email_confirm: true, // to auto confirm email
    });

    cy.findByRole('link', { name: /créer un compte/i }).click();

    // test with existing email
    cy.findByLabelText(/email/i).type(existingUser.email);
    cy.findByLabelText(/mot de passe/i).type(validUser.password);
    cy.findByRole('button', { name: /créer un compte/i }).click();
    cy.wait('@signup').its('response.statusCode').should('eq', 400);
    cy.findByText(/cet email est déjà utilisé/i).should('exist');

    // test with valid email
    cy.findByLabelText(/email/i).type(validUser.email);
    cy.findByLabelText(/mot de passe/i).type(validUser.password);
    cy.findByRole('button', { name: /créer un compte/i }).click();

    // User should be created in supabase
    cy.wait('@signup').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      cy.wrap(supabase.auth.admin.getUserById(interception.response.body.uid))
        .its('response.statusCode')
        .should('eq', 200);
    });

    cy.findByText(/un email de confirmation vous a été envoyé/i).should(
      'exist'
    );
  });
});
