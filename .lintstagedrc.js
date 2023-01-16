const config = {
  'apps/stock-dashboard/**/*.{js,jsx,ts,tsx}': (filenames) =>
    `pnpm lint:app --fix --lintFilePatterns=${filenames}`,
  'apps/stock-dashboard-e2e/**/*.{js,jsx,ts,tsx}': (filenames) =>
    `pnpm lint:app-e2e --fix --lintFilePatterns=${filenames}`,
  'apps/server/**/*.{js,jsx,ts,tsx}': (filenames) =>
    `pnpm lint:app-e2e --fix --lintFilePatterns=${filenames}`,
};

module.exports = config;
