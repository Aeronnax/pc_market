// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';
import ts from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// @ts-ignore
const patchedConfig = fixupConfigRules([
  ...compat.extends('next/core-web-vitals'),
]);

export default ts.config(
  ...patchedConfig,

  ...ts.configs.recommended,
  eslintConfigPrettier,
  // Add more flat configs here

  {
    ignores: [
      '.next/*',
      'eslint.config.mjs',
      'node_modules/*',
      '.yarn/*',
      '.idea/*',
      '.vscode/*',
      'tsconfig.tsbuildinfo',
    ],
  }
);

// https://blog.linotte.dev/eslint-9-next-js-935c2b6d0371
