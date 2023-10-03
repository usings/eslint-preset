import type { FlatESLintConfig } from '../types'

export const ignores = (): FlatESLintConfig[] => {
  return [
    {
      ignores: [
        '**/package-lock.json',
        '**/pnpm-lock.yaml',
        '**/yarn.lock',
        '**/bun.lockb',

        '**/node_modules',
        '**/dist',

        '**/.vite-inspect',
        '**/.changeset',
        '**/.output',
        '**/.cache',
        '**/.idea',
        '**/output',
        '**/temp',

        '**/*.min.*',
      ],
    },
  ]
}
