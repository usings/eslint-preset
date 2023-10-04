import type { FlatESLintConfig, OptionsOverrides, OptionsTypescript } from 'eslint-preset-basic'
import { parserTs } from 'eslint-preset-basic/modules'
import { parserSvelte, pluginSvelte } from './modules'

export type OptionsSvelte = OptionsTypescript & OptionsOverrides

export const svelte = ({ enableTs = true, overrides = {} }: OptionsSvelte = {}): FlatESLintConfig[] => {
  return [
    {
      ignores: ['**/.svelte-kit'],
    },
    {
      files: ['**/*.svelte'],
      languageOptions: {
        parser: parserSvelte,
        parserOptions: {
          extraFileExtensions: ['.svelte'],
          parser: enableTs ? parserTs : undefined,
          sourceType: 'module',
        },
      },
      plugins: {
        svelte: pluginSvelte,
      },
      processor: pluginSvelte.processors!['.svelte'],
      rules: {
        ...(pluginSvelte as any).configs['recommended'].rules,

        ...overrides,
      },
    },
  ]
}
