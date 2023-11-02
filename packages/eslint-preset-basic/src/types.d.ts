import type { ESLint, Linter } from 'eslint'
import type { FlatESLintConfigItem } from 'eslint-define-config'

/**
 * A type that can represent either a single value or an array of values.
 */
export type Arrayable<T> = T | Array<T>

/**
 * ESLint plugin.
 */
export type ESLintPlugin = ESLint.Plugin

/**
 * ESLint parser.
 */
export type ESLintParser = Linter.ParserModule | any

/**
 * Flat ESLint Configuration.
 */
export type FlatESLintConfig = FlatESLintConfigItem

/**
 * TypeScript options
 */
export interface OptionsTypescript {
  enableTs?: boolean
}

/**
 * Overrides for ESLint rules.
 */
export interface OptionsOverrides {
  overrides?: FlatESLintConfig['rules']
}
