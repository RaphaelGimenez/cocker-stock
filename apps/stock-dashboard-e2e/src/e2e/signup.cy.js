import { createClient } from '@supabase/supabase-js';
import { faker } from '@faker-js/faker';
const supabase = createClient(
  Cypress.env('SUPABASE_URL'),
  Cypress.env('SUPABASE_API_KEY')
);

describe('Signup page', () => {
  beforeEach(() => cy.visit('/'));
  it('should let user sign up with valid credentials', () => {
    const user = {
      email: faker.internet.exampleEmail(),
      password: faker.internet.password(),
    };

    cy.wrap(supabase.auth.admin.listUsers()).then((res) => {
      cy.findByRole('link', { name: /créer un compte/i }).click();

      cy.findByLabelText(/email/i).type(user.email);
      cy.findByLabelText(/mot de passe/i).type(user.password);
      cy.findByRole('button', { name: /créer un compte/i }).click();
      cy.findByText(/un email de confirmation vous a été envoyé/i).should(
        'exist'
      );

      cy.wrap(supabase.auth.admin.listUsers())
        .its('data.users')
        .should('have.length', res.data.users.length + 1);
    });
  });
});
