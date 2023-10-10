import type { FlatESLintConfig, OptionsOverrides, OptionsTypescript } from 'eslint-preset-basic'
import { GLOB_JSX, GLOB_TSX } from 'eslint-preset-basic'
import { parserTs } from 'eslint-preset-basic/modules'
import { pluginSolid } from './modules'

export type OptionsSolid = OptionsTypescript & OptionsOverrides

export const solid = ({ enableTs = true, overrides = {} }: OptionsSolid = {}): FlatESLintConfig[] => {
  return [
    {
      files: enableTs ? [GLOB_JSX, GLOB_TSX] : [GLOB_JSX],
      languageOptions: {
        parser: enableTs ? parserTs : undefined,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: { solid: pluginSolid },
      rules: {
        ...(enableTs
          ? (pluginSolid as any).configs.typescript.rules
          : (pluginSolid as any).configs.recommended.rules
        ),

        ...overrides,
      },
    },
  ]
}
