import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./src/components/**/*.test.{ts,tsx}', './src/store/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/'],
      reportsDirectory: './coverage',
    },
  },
});
