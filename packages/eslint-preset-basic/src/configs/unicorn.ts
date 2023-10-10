import type { FlatESLintConfig } from '../types'
import { pluginUnicorn } from '../modules'

export const unicorn = (): FlatESLintConfig[] => {
  return [
    {
      plugins: { unicorn: pluginUnicorn },
      rules: {
        ...(pluginUnicorn as any).configs.recommended.rules,

        'unicorn/filename-case': [
          'error',
          {
            cases: { kebabCase: true, pascalCase: true },
            ignore: [/^[A-Z]+\..*$/],
          },
        ],
        'unicorn/prefer-top-level-await': 'warn',
        'unicorn/prevent-abbreviations': 'warn',
      },
    },
  ]
}
