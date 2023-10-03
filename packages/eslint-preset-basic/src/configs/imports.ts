import type { FlatESLintConfig } from '../types'
import { pluginImport, pluginUnusedImports } from '../modules'

export const imports = (): FlatESLintConfig[] => {
  return [
    {
      plugins: {
        'import': pluginImport,
        'unused-imports': pluginUnusedImports,
      },
      rules: {
        'import/first': 'error',
        'import/newline-after-import': ['error', { considerComments: true, count: 1 }],
        'import/no-default-export': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/order': [
          'error',
          {
            groups: [
              'type',
              'builtin',
              'external',
              'internal',
              'unknown',
              'parent',
              'sibling',
              'index',
              'object',
            ],
            pathGroups: [{ group: 'internal', pattern: '@/**' }],
            pathGroupsExcludedImportTypes: ['type'],
            warnOnUnassignedImports: true,
          },
        ],

        'sort-imports': [
          'error',
          {
            allowSeparatedGroups: false,
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          },
        ],

        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': ['warn', { args: 'after-used', ignoreRestSiblings: true }],
      },
    },
    {
      files: ['**/*.d.?([cm])ts'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-duplicates': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
    {
      files: ['**/{*config,index}.?([cm])[jt]s'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ]
}
