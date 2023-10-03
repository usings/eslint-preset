import type { Arrayable, FlatESLintConfig } from './types'

/**
 * Define a flat ESLint configuration by combining Arrayable configs.
 *
 * @param configs - Input ESLint configs that are arrayable.
 * @returns Flattened ESLint configuration array.
 */
export function defineFlatConfig(configs: Arrayable<Arrayable<FlatESLintConfig>>): FlatESLintConfig[] {
  return Array.isArray(configs) ? combineConfigs(...configs) : combineConfigs([configs])
}

/**
 * Flatten and merge ESLint configs into a single array.
 *
 * @param configs - The ESLint configs to merge, can be single or arrays.
 * @returns A flattened array containing all configs.
 */
export function combineConfigs(...configs: (Arrayable<FlatESLintConfig>)[]): FlatESLintConfig[] {
  return configs.flatMap(config => Array.isArray(config) ? config : [config])
}
