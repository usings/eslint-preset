import type { FlatESLintConfig, OptionsOverrides, OptionsTypescript } from 'eslint-preset-basic'
import { GLOB_JSX, GLOB_TSX } from 'eslint-preset-basic'
import { parserTs } from 'eslint-preset-basic/modules'
import { pluginReact, pluginReactHooks } from './modules'

export type OptionsReact = OptionsTypescript & OptionsOverrides

export const react = ({ enableTs = true, overrides = {} }: OptionsReact = {}): FlatESLintConfig[] => {
  return [
    { ignores: ['**/.next'] },
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
      plugins: {
        'react': pluginReact,
        'react-hooks': pluginReactHooks,
      },
      rules: {
        'react/boolean-prop-naming': ['error', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
        'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
        'react/hook-use-state': ['error', { allowDestructuredState: true }],
        'react/jsx-boolean-value': 'error',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-brace-presence': ['error', { children: 'never', propElementValues: 'always', props: 'never' }],
        'react/jsx-curly-spacing': ['error', 'never'],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        'react/jsx-fragments': 'error',
        'react/jsx-handler-names': 'error',
        'react/jsx-key': 'error',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-tag-spacing': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-children-prop': 'error',
        'react/no-deprecated': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/self-closing-comp': ['error', { component: true, html: true }],
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',

        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',

        ...overrides,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ]
}
