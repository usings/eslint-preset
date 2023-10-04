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
        ...(pluginAstro as any).configs['recommended'].rules,

        ...overrides,
      },
    },
  ]
}
