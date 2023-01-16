const config = {
  'apps/stock-dashboard/**/*.{js,jsx,ts,tsx}': (filenames) =>
    `pnpm lint:stock-dashboard --fix --lintFilePatterns=${filenames}`,
  'apps/stock-dashboard-e2e/**/*.{js,jsx,ts,tsx}': (filenames) =>
    `pnpm lint:stock-dashboard-e2e --fix --lintFilePatterns=${filenames}`,
  'apps/server/**/*.{js,jsx,ts,tsx}': (filenames) =>
    `pnpm lint:server-e2e --fix --lintFilePatterns=${filenames}`,
};

module.exports = config;
