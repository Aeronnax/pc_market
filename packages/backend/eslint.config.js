// @ts-check

import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tsEslint.config(
  {
    ignores: [
      'build/**',
      '.rollup.cache/**',
      'swagger.json',
      'src/routes.ts',
      '.yarn/**',
      '.rollup.cache/**',
      'vite.config.ts',
    ],
  },
  eslint.configs.recommended,
  ...tsEslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/newline-after-import': ['error', { count: 1 }],
    },
  },
  {
    files: ['**/*.ts'],
  },
  {
    files: ['**/*.js'],
    ...tsEslint.configs.disableTypeChecked,
  },
  eslintConfigPrettier,
);
