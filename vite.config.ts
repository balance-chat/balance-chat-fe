import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { UserConfig as VitestUserConfig } from 'vitest/config';

const vitestConfig: VitestUserConfig = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['src/**/*.spec.tsx'],
    reporters: ['default', 'junit'],
    outputFile: {
      junit: './test-results/junit.xml',
    },
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  ...vitestConfig,
});
