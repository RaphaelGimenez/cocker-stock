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
});
