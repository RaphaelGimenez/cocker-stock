import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

import { execSync } from 'child_process';

function resetDb() {
  console.log(`Resetting database...`);

  try {
    execSync('pnpm supabase:db:reset');
    execSync('pnpm prisma:db:push');

    console.log(`DB reset successful`);

    return true;
  } catch (error) {
    console.error(`DB reset failed`, error);
  }

  return false;
}

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname),
    setupNodeEvents(on, config) {
      on('task', {
        resetDatabase() {
          return resetDb();
        },
      });
    },
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_API_KEY: process.env.SUPABASE_API_KEY,
  },
  experimentalInteractiveRunEvents: true,
});
