import type { FlatESLintConfig, OptionsOverrides, OptionsTypescript } from 'eslint-preset-basic'
import { parserTs } from 'eslint-preset-basic/modules'
import { parserAstro, pluginAstro } from './modules'

export type OptionsAstro = OptionsTypescript & OptionsOverrides

export const astro = ({ enableTs = true, overrides = {} }: OptionsAstro = {}): FlatESLintConfig[] => {
  return [
    {
      ignores: ['**/.astro'],
    },
    {
      files: ['**/*.astro'],
      languageOptions: {
        parser: parserAstro,
        parserOptions: {
          extraFileExtensions: ['.astro'],
          parser: enableTs ? parserTs : undefined,
          sourceType: 'module',
        },
      },
      plugins: {
        astro: pluginAstro,
      },
      processor: pluginAstro.processors!['.astro'],
      rules: {
        'astro/no-conflict-set-directives': 'error',
        'astro/no-deprecated-astro-canonicalurl': 'error',
        'astro/no-deprecated-astro-fetchcontent': 'error',
        'astro/no-deprecated-astro-resolve': 'error',
        'astro/no-deprecated-getentrybyslug': 'error',
        'astro/no-set-text-directive': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
        'astro/prefer-class-list-directive': 'error',
        'astro/prefer-object-class-list': 'error',
        'astro/prefer-split-class-list': 'error',
        'astro/valid-compile': 'error',

        ...overrides,
      },
    },
  ]
}
