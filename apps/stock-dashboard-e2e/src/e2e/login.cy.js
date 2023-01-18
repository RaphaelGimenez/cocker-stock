import { createClient } from '@supabase/supabase-js';
import { faker } from '@faker-js/faker';
const supabase = createClient(
  Cypress.env('SUPABASE_URL'),
  Cypress.env('SUPABASE_API_KEY')
);

describe('Login page', () => {
  beforeEach(() => cy.visit('/'));
  it('should let user login with valid credentials', () => {
    cy.intercept(/\/auth\/v1\/token/).as('signup');

    const user = {
      email: faker.internet.exampleEmail(),
      password: faker.internet.password(),
    };
    supabase.auth.admin.createUser({
      email: user.email,
      password: user.password,
      email_confirm: true, // to auto confirm email
    });

    cy.findByRole('link', { name: /se connecter/i }).click();

    cy.location('pathname').should('eq', '/login');

    cy.findByLabelText(/email/i).type(user.email);
    cy.findByLabelText(/mot de passe/i).type(user.password);
    cy.findByRole('button', { name: /se connecter/i }).click();

    cy.wait('@signup').its('response.statusCode').should('eq', 200);

    cy.location('pathname').should('eq', '/dashboard');
  });
});
