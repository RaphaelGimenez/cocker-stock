import { faker } from '@faker-js/faker';
import slugify from 'slugify';

describe('Dashboard page', () => {
  before(() => {
    cy.resetDatabase();
  });

  it('should redirect unlogged users', () => {
    cy.visit('/dashboard');

    cy.location('pathname').should('eq', '/login');
  });

  it('should let user create and access an organization', () => {
    cy.createUserAndLogin();

    const spaceName = faker.company.name();
    const spaceSlug = slugify(spaceName);

    cy.findAllByTestId(/space-card/i).should('have.length', 0);

    cy.findByRole('button', { name: /créer une organisation/i }).click();

    cy.location('pathname').should('eq', '/dashboard/new-space');

    cy.findByLabelText(/nom/i).type(spaceName);
    cy.findByRole('button', { name: /créer/i }).click();

    cy.location('pathname').should('eq', `/dashboard/sapces/${spaceSlug}`);

    cy.visit('/dashboard');

    cy.findAllByTestId(/space-card/i).should('have.length', 1);

    cy.findByRole('link', { name: spaceName }).click();

    cy.location('pathname').should('eq', `/dashboard/sapces/${spaceSlug}`);
  });
});
